;; reduce �Լ��� �� �÷����� �����ϸ� ��� �Ǵ°�?

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
