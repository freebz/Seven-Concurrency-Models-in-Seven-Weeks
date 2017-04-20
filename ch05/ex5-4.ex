# 5.2.5 상태 액터

# Actors/counter/counter.ex
defmodule Counter do
  def loop(count) do
    receive do
      {:next} ->
	IO.puts("Current count: #{count}")
	loop(count + 1)
    end
  end
end


counter = spawn(Counter, :loop, [1])
# #PID<0.95.0>
send(counter, {:next})
# Current count: 1
# {:next}
send(counter, {:next})
# Current count: 2
# {:next}
send(counter, {:next})
# Current count: 3
# {:next}
