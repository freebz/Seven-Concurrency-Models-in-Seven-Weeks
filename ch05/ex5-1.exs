# CHAPTER 5 ����

# 5.1 ��ü���� ���� ��ü ��������

# 5.2 1�� ��: �޽����� ���Ϲڽ�

# 5.2.1 ù ��° ����

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
