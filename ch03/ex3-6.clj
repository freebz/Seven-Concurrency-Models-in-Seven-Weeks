;; FunctionalProgramming/Sum/src/sum/core.clj

(defn reduce-sum [numbers]
  (reduce (fn [acc x] (+ acc x)) 0 numbers))
