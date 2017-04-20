# 5.2.4 프로세스 연결하기

# Actors/hello_actors/hello_actors2.exs
defmodule Talker do
  def loop do
    receive do
      {:greet, name} -> IO.puts("Hello #{name}")
      {:praise, name} -> IO.puts("#{name}, you're amazing")
      {:celebrate, name, age} -> IO.puts("Here's to another #{age} years, #{name}")
      {:shutdown} -> exit(:normal)
    end
    loop
  end
end


# Actors/hello_actors/hello_actors2.exs
Process.flag(:trap_exit, true)
pid = spawn_link(&Talker.loop/0)


# Actors/hello_actors/hello_actors2.exs
send(pid, {:great, "Huey"})
send(pid, {:praise, "Dewey"})
send(pid, {:celebrate, "Louie", 16})
send(pid, {:shutdown})

receive do
  {:EXIT, ^pid, reason} -> IO.puts("Talker has exited (#{reason})")
end
