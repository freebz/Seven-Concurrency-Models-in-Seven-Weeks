# 5.2.2 ���Ϲڽ��� ť��

# 5.2.3 �޽��� ���޹ޱ�

# Actors/hello_actors/hello_actors.exs
def loop do
  receive do
    {:great, name} -> IO.puts("Hello #{name}")
    {:praise, name} -> IO.puts("#{name}, you're amazing")
    {:celebrate, name, age} -> IO.puts("Here's to another #{age} years, #{name}")
  end
  loop
end
