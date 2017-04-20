# 5.3.2 장애 감지

# 연결은 비정상적인 종료를 서로에게 알린다

# Actors/links/links.ex
defmodule LinkTest do
  def loop do
    receive do
      {:exit_because, reason} -> exit(reason)
      {:link_to, pid} -> Process.link(pid)
      {:EXIT, pid, reason} -> IO.puts("#{inspect(pid)} exited because #{reason}")
    end
    loop
  end
end


pid1 = spawn(&LinkTest.loop/0)
# #PID<0.86.0>
pid2 = spawn(&LinkTest.loop/0)
# #PID<0.88.0>
send(pid1, {:link_to, pid2})
# {:link_to, #PID<0.88.0>}
send(pid2, {:exit_because, :bad_thing_happened})
# {:exit_because, :bad_thing_happened}


Process.info(pid2, :status)
# nil
Process.info(pid1, :status)
# nil


# 연결은 쌍방향이다

pid1 = spawn(&LinkTest.loop/0)
# #PID<0.94.0>
pid2 = spawn(&LinkTest.loop/0)
# #PID<0.96.0>
send(pid1, {:link_to, pid2})
# {:link_to, #PID<0.96.0>}
send(pid1, {:exit_because, :another_bad_thing_happened})
# {:exit_because, :another_bad_thing_happened}
Process.info(pid1, :status)
# nil
Process.info(pid2, :status)
# nil


# 정상적인 종료

pid1 = spawn(&LinkTest.loop/0)
# #PID<0.102.0>
pid2 = spawn(&LinkTest.loop/0)
# #PID<0.104.0>
send(pid1, {:link_to, pid2})
# {:link_to, #PID<0.104.0>}
send(pid2, {:exit_because, :normal})
# {:exit_because, :normal}
Process.info(pid2, :status)
# nil
Process.info(pid1, :status)
# {:status, :waiting}


# 시스템 프로세스

# Actors/links/links.ex
def loop_system do
  Process.flag(:trap_exit, true)
  loop
end


pid1 = spawn(&LinkTest.loop_system/0)
# #PID<0.110.0>
pid2 = spawn(&LinkTest.loop/0)
# #PID<0.112.0>
send(pid1, {:link_to, pid2})
# {:link_to, #PID<0.112.0>}
send(pid2, {:exit_because, :yet_another_bad_thing_happened})
# #PID<0.112.0> exited because yet_another_bad_thing_happened
# {:exit_because, :yet_another_bad_thing_happened}
Process.info(pid2, :status)
# nil
Process.info(pid1, :status)
# {:status, :waiting}
