;; FunctionalProgramming/Sum/src/sum/core.clj

(defn recursive-sum [numbers]
  (if (empty? numbers)
    0
    (+ (first numbers) (recursive-sum (rest numbers)))))
