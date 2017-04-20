# 5.2.9 잠시 소개 - 1급 함수

Enum.map([1, 2, 3, 4], fn(x) -> x * 2 end)
# [2, 4, 6, 8]


Enum.map([1, 2, 3, 4], &(&1 * 2))
# [2, 4, 6, 8]
Enum.reduce([1, 2, 3, 4], 0, &(&1 + &2))
# 10


double = &(&1 * 2)
# #Function<6.52032458/1 in :erl_eval.expr/5>
double.(3)
# 6


twice = fn(fun) -> fn(x) -> fun.(fun.(x)) end end
# #Function<6.52032458/1 in :erl_eval.expr/5>
twice.(double).(3)
# 12
