# 5.2.6 API ���Ŀ� �޽��� ���߱�

# Actors/counter/counter.ex
defmodule Counter do
  def start(count) do
    spawn(__MODULE__, :loop, [count])
  end
  def next(counter) do
    send(counter, {:next})
  end
  def loop(count) do
    receive do
      {:next} ->
	IO.puts("Current count: #{count}")
	loop(count + 1)
    end
  end
end


counter = Counter.start(42)
# #PID<0.101.0>
Counter.next(counter)
# Current count: 42
# {:next}
Counter.next(counter)
# Current count: 43
# {:next}
