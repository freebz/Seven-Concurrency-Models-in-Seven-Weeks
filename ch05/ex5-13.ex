# 5.3.4 Ÿ�Ӿƿ�

# Actors/cache/cache2.ex
def get(url) do
  ref = make_ref()
  send(:cache, {:get, self(), ref, url})
  receive do
    {:ok, ^ref, page} -> page
    after 1000 -> nil
  end
end


# 5.3.5 ����-Ŀ�� ����


# 5.3.6 ũ�����ϰ� ������ �ξ��!

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
