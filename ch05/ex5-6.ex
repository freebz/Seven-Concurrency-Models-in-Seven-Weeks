# 5.2.7 ½Ö¹æÇâ Ä¿¹Â´ÏÄÉÀÌ¼Ç

# Actors/counter/counter2.ex
defmodule Counter do
  def start(count) do
    spawn(__MODULE__, :loop, [count])
  end
  def next(counter) do
    ref = make_ref()
    send(counter, {:next, self(), ref})
    receive do
      {:ok, ^ref, count} -> count
    end
  end
  def loop(count) do
    receive do
      {:next, sender, ref} ->
	send(sender, {:ok, ref, count})
	loop(count + 1)
    end
  end
end


{:ok, ref, count}


counter = Counter.start(42)
# #PID<0.86.0>
Counter.next(counter)
# 42
Counter.next(counter)
# 43
