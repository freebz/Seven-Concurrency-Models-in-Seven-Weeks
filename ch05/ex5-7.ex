# 5.2.8 이름을 붙이는 프로세스

pid = Counter.start(42)
# #PID<0.92.0>
Process.register(pid, :counter)
# true
counter = Process.whereis(:counter)
# #PID<0.92.0>
Counter.next(counter)
# 42


Process.registered
# [:elixir_config, :elixir_sup, :elixir_code_server, :erts_code_purger,
#  :error_logger, :init, IEx.Supervisor, :inet_db, :user, :rex, :standard_error,
#  Logger, :standard_error_sup, :kernel_sup, :global_name_server,
#  :kernel_safe_sup, IEx.Config, :global_group, :file_server_2, :code_server,
#  :erl_prim_loader, :counter, :application_controller, Logger.Watcher,
#  Logger.Supervisor]


send(:counter, {:next, self(), make_ref()})
# {:next, #PID<0.84.0>, #Reference<0.0.1.110>}
receive do msg -> msg end
# {:ok, #Reference<0.0.1.110>, 43}


# Actors/counter/counter3.ex
def start(count) do
  pid = spawn(__MODULE__, :loop, [count])
  Process.register(pid, :counter)
  pid
end
def next do
  ref = make_ref()
  send(:counter, {:next, self(), ref})
  receive do
    {:ok, ^ref, count} -> count
  end
end


Counter.start(42)
# #PID<0.86.0>
Counter.next
# 42
Counter.next
# 43
