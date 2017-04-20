# 5.4 3�� ��: �л�

# 5.4.1 OTP

# �Լ��� ���� ��ġ

# Actors/patterns/patterns.ex
defmodule Patterns do
  def foo({x, y}) do
    IO.puts("Get a pair, first element #{x}, second #{y}")
  end
end


Patterns.foo({:a, 42})
# Got a pair, first element a, second 42
# :ok


Patterns.foo("something else")
# ** (FunctionClauseError) no function clause matching in Patterns.foo/1
#     patterns.ex:3: Patterns.foo("something else")


# Actors/patterns/patterns.ex
def foo({x, y, z}) do
  IO.puts("Got a triple: #{x}, #{y}, #{z}")
end


Patterns.foo({:a, 42, "yahoo"})
# Got a triple: a, 42, yahoo
# :ok
Patterns.foo({:x, :y})
# Got a pair, first element x, second y
# :ok


# GenServer�� �̿��� ĳ�ø� �ٽ� �����ϱ�

# Actors/cache/cache3.ex
defmodule Cache do
  use GenServer.Behaviour
  def handle_cast({:put, url, page}, {pages, size}) do
    new_pages = Dict.put(pages, url, page)
    new_size = size + byte_size(page)
    {:noreply, {new_pages, new_size}}
  end

  def handle_call({:get, url}, _from, {pages, size}) do
    {:reply, pages[url], {pages, size}}
  end

  def handle_call({:size}, _from, {pages, size}) do
    {:reply, size, {pages, size}}
  end
end


# Actors/cache/cache3.ex
def start_link do
  :gen_server.start_link({:local, :cache}, __MODULE__, {HashDict.new, 0}, [])
end

def put(url, page) do
  :gen_server.cast(:cache, {:put, url, page})
end

def get(url) do
  :gen_server.call(:cache, {:get, url})
end

def size do
  :gen_server.call(:cache, {:size})
end


# OTP ������

# Actors/cache/cache3.ex
defmodule CacheSupervisor do
  def init(_args) do
    workers = [worker(Cache, [])]
    supervise(workers, strategy: :one_for_one)
  end
end


# Actors/cache/cache3.ex
def start_link do
  :supervisor.start_link(__MODULE__, [])
end
