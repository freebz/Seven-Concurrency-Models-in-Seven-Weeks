# 5.4.2 ���

# ��� �����ϱ�

Node.self
# :nonode@nohost
Node.list
# []


Node.connect(:"node2@10.99.1.92")
# true
Node.list
# [:"node2@10.99.1.92"]


Node.list
# [:"node1@10.99.1.50"]


# ���� ����

whoami = fn() -> IO.puts(Node.self) end
# #Function<20.52032458/0 in :erl_eval.expr/5>
Node.spawn(:"node2@10.99.1.92", whoami)
# #PID<8242.50.0>
# node2@10.99.1.92


# ���� �޽���

pid = spawn(Counter, :loop, [42])
# #PID<0.86.0>
:global.register_name(:counter, pid)
# :yes


Node.connect(:"node2@10.99.1.92")
# true
pid = :global.whereis_name(:counter)
# #PID<0.86.0>
send(pid, {:next})
# {:next}
send(pid, {:next})
# {:next}


# Current count: 42
# Current coutn: 43
