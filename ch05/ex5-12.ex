# 5.3.3 프로세스의 감시

# Actors/cache/cache.ex
defmodule CacheSupervisor do
  def start do
    spawn(__MODULE__, :loop_system, [])
  end
  def loop do
    pid = Cache.start_link
    receive do
      {:EXIT, ^pid, :normal} ->
	IO.puts("Cache exited normally")
	:ok
      {:EXIT, ^pid, reason} ->
	IO.puts("Cache failed with reason #{inspect reason} - restartig it")
	loop
    end
  end
  def loop_system do
    Process.flag(:trap_exit, true)
    loop
  end
end


CacheSupervisor.start
# #PID<0.89.0>
Cache.put("google.com", "Welcome to Google ...")
# {:put, "google.com", "Welcome to Google ..."}
Cache.size
# 21


Cache.put("paulbutcher.com", nil)
# {:put, "paulbutcher.com", nil}
# iex(5)> Cache failed with reason {:badarg, [{:erlang, :byte_size, [nil], []}, {Cache, :loop, 2, [file: 'cache.ex', line: 42]}]} - restarting it
# iex(5)>
# 17:54:28.823 [error] Process #PID<0.90.0> raised an exception
# ** (ArgumentError) argument error
#     :erlang.byte_size(nil)
#     cache.ex:42: Cache.loop/2

Cache.size
# 0
Cache.put("google.com", "Welcome to Google ...")
# {:put, "google.com", "Welcome to Google ..."}
Cache.get("google.com")
# "Welcome to Google ..."
