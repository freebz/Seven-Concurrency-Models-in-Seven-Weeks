# 5.2.10 º´·Ä ¸Ê

# Actors/parallel/parallel.ex
defmodule Parallel do
  def map(collection, fun) do
    parent = self()

    processes = Enum.map(collection, fn(e) ->
      spawn_link(fn() ->
	send(parent, {self(), fun.(e)})
      end)
    end)

    Enum.map(processes, fn(pid) ->
      receive do
	{^pid, result} -> result
      end
    end)
  end
end


slow_double = fn(x) -> :timer.sleep(1000); x * 2 end
# #Function<6.52032458/1 in :erl_eval.expr/5>
:timer.tc(fn() -> Enum.map([1, 2, 3, 4], slow_double) end)
# {4046000, [2, 4, 6, 8]}
:timer.tc(fn() -> Parallel.map([1, 2, 3, 4], slow_double) end)
# {1015000, [2, 4, 6, 8]}
