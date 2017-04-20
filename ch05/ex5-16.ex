# 5.4.3 분산 단어 세기

# 단어 세기

# Actors/word_count/counter.ex
defmodule Counter do
  use GenServer.Behaviour
  def start_link do
    :gen_server.start_link(__MODULE__, nil, [])
  end

  def deliver_page(pid, ref, page) do
    :gen_server.cast(pid, {:deliver_page, ref, page})
  end

  def init(_args) do
    Parser.request_page(self())
    {:ok, nil}
  end

  def handle_cast({:deliver_page, ref, page}, state) do
    Parser.request_page(self())

    words = String.split(page)
    counts = Enum.reduce(words, HashDict.new, fn(word, counts) ->
      Dict.update(counts, word, 1, &(&1 + 1))
    end)
    Accumulator.deliver_counts(ref, counts)
    {:noreply, state}
  end
end


# Actors/word_count/counter.ex
defmodule CounterSupervisor do
  use Supervisor.Behaviour
  def start_link(num_counters) do
    :supervisor.start_link(__MODULE__, num_counters)
  end
  def init(num_counters) do
    workers = Enum.map(1..num_counters, fn(n) ->
      worker(Counter, [], id: "counter#{n}")
    end)
    supervise(workers, strategy: :one_for_one)
  end
end


# 전체 값 기억하기

# Actors/word_count/accumulator.ex
defmodule Accumulator do
  use GenServer.Behaviour

  def start_link do
    :gen_server.start_link({:global, :wc_accumulator}, __MODULE__,
      {HashDict.new, HashSet.new}, [])
  end

  def deliver_counts(ref, counts) do
    :gen_server.cast({:global, :wc_accumulator}, {:deliver_counts, ref, counts})
  end

  def handle_cast({:deliver_counts, ref, counts}, {totals, processed_pages}) do
    if Set.member?(processed_pages, ref) do
      {:noreply, {totals, processed_pages}}
    else
      new_totals = Dict.merge(totals, counts, fn(_k, v1, v2) -> v1 + v2 end)
      new_processed_pages = Set.put(processed_pages, ref)
      Parser.processed(ref)
      {:noreply, {new_totals, new_processed_pages}}
    end
  end
end


# 해석과 장애 허용

# Actors/word_count/parser.ex
defmodule Parser do
  use GenServer.Behaviour

  def start_link(filename) do
    :gen_server.start_link({:global, :wc_parser}, __MODULE__, filename, [])
  end

  def request_page(pid) do
    :gen_server.cast({:global, :wc_parser}, {:request_page, pid})
  end

  def processed(ref) do
    :gen_server.cast({:global, :wc_parser}, {:processed, ref})
  end
end


# Actors/word_count/parser.ex
def init(filename) do
  xml_parser = Pages.start_link(filename)
  {:ok, {ListDict.new, xml_parser}}
end

def handle_cast({:request_page, pid}, {pending, xml_parser}) do
  new_pending = deliver_page(pid, pending, Pages.next(xml_parser))
  {:noreply, {new_pending, xml_parser}}
end

def handle_cast({:processed, ref}, {pending, xml_parser}) do
  new_pending = Dict.delete(pending, ref)
  {:norep.y, {new_pending, xml_parser}}
end


# Actors/word_count/parser.ex
defp deliver_page(pid, pending, page) when nil?(page) do
  if Enum.empty?(pending) do
    pending # Nothing to do
  else
    {ref, prev_page} = List.last(pending)
    Counter.deliver_page(pid, ref, prev_page)
    Dict.put(Dict.delete(pending, ref), ref, prev_page)
  end
end

defp deliver_page(pid, pending, page) do
  ref = make_ref()
  Counter.deliver_page(pid, ref, page)
  Dict.put(pending, ref, page)
end
