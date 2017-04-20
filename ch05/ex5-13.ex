# 5.3.4 타임아웃

# Actors/cache/cache2.ex
def get(url) do
  ref = make_ref()
  send(:cache, {:get, self(), ref, url})
  receive do
    {:ok, ^ref, page} -> page
    after 1000 -> nil
  end
end


# 5.3.5 에러-커널 패턴


# 5.3.6 크래시하게 내버려 두어라!

def all_upper?(s) do
  String.upcase(s) == s
end


defmodule Upper do
  def all_upper?(s) do
    cond do
      nil?(s) -> false
      true -> String.upcase(s) == s
    end
  end
end
