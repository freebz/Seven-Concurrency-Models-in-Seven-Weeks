# CHAPTER 5 액터

# 5.1 객체보다 더욱 객체 지향적인

# 5.2 1일 차: 메시지와 메일박스

# 5.2.1 첫 번째 액터

{:foo, "this", 42}


# Actors/hello_actors/hello_actors.exs
defmodule Talker do
  def loop do
    receive do
      {:greet, name} -> IO.puts("Hello #{name}")
      {:praise, name} -> IO.puts("#{name}, you're amazing")
      {:celebrate, name, age} -> IO.puts("Here's to another #{age} years, #{name}")
    end
    loop
  end
end


# Actors/hello_actors/hello_actors.exs
pid = spawn(&Talker.loop/0)
send(pid, {:great, "Huey"})
send(pid, {:praise, "Dewey"})
send(pid, {:celebrate, "Louie", 16})
sleep(1000)
