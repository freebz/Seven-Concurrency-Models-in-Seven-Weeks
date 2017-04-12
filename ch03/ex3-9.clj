;; reduce 함수에 빈 컬렉션을 전달하면 어떻게 되는가?

(reduce + numbers)

(sum [])
;; 0

(+ 1 2)
;; 3
(+ 1 2 3 4)
;; 10
(+ 42)
;; 42
(+)
;; 0

(*)
;; 1


;; FunctionalProgramming/Sum/src/sum/core.clj
(defn apply-sum [numbers]
  (apply + numbers))
