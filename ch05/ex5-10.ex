# 5.3 2일 차: 에러 처리와 유연성

# 5.3.1 캐싱 액터

d = HashDict.new
# #HashDict<[]>
d1 = Dict.put(d, :a, "A value for a")
# #HashDict<[a: "A value for a"]>
d2 = Dict.put(d1, :b, "A value for b")
# #HashDict<[b: "A value for b", a: "A value for a"]>
d2[:a]
# "A value for a"


# Actors/cache/cache.ex
defmodule Cache do
  def loop(pages, size) do
    receive do
      {:put, url, page} ->
	new_pages = Dict.put(pages, url, page)
	new_size = size + byte_size(page)
	loop(new_pages, new_size)
      {:get, sender, ref, url} ->
	send(sender, {:ok, ref, pages[url]})
	loop(pages, size)
      {:size, sender, ref} ->
	send(sender, {:ok, ref, size})
	loop(pages, size)
      {:terminate} -> # Terminate request - don't recurse
    end
  end
end


# Actors/cache/cache.ex
def start_link do
  pid = spawn_link(__MODULE__, :loop, [HashDict.new, 0])
  Process.register(pid, :cache)
  pid
end


# Actors/cache/cache.ex
def put(url, page) do
  send(:cache, {:put, url, page})
end

def get(url) do
  ref = make_ref()
  send(:cache, {:get, self(), ref, url})
  receive do
    {:ok, ^ref, page} -> page
  end
end

def size do
  ref = make_ref()
  send(:cache, {:size, self(), ref})
  receive do
    {:ok, ^ref, s} -> s
  end
end

def terminate do
  send(:cache, {:terminate})
end


Cache.start_link
# #PID<0.89.0>
Cache.put("google.com", "Welcome to Google ...")
# {:put, "google.com", "Welcome to Google ..."}
Cache.get("google.com")
# "Welcome to Google ..."
Cache.size()
# 21


Cache.put("paulbutcher.com", nil)
# ** (EXIT from #PID<0.87.0>) an exception was raised:
#     ** (ArgumentError) argument error
#         :erlang.byte_size(nil)
#         cache.ex:42: Cache.loop/2
