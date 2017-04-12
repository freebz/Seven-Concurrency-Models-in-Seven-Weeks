;; 3.3.7 폴드를 이용한 빈도

;; FunctionalProgramming/Reducers/src/reducers/parallel_frequencies.clj
(defn parallel-frequencies [coll]
  (r/fold
   (partial merge-with +)
   (fn [counts x] (assoc counts x (inc (get counts x 0))))
   coll))


(take 10 (repeatedly #(rand-int 10)))
;; (3 9 7 3 0 1 0 4 8 6)


(def numbers (into [] (take 10000000 (repeatedly #(rand-int 10)))))
;; #'reducers.core/numbers


(require ['reducers.parallel-frequencies :refer :all])
;; nil
(time (frequencies numbers))
;; "Elapsed time: 1897.480546 msecs"
;; {0 999182, 1 1001955, 2 999451, 3 999849, 4 1000178, 5 998158, 6 1001782, 7 1000236, 8 999055, 9 1000154}
(time (parallel-frequencies numbers))
;; "Elapsed time: 8121.303715 msecs"
;; {0 999182, 1 1001955, 2 999451, 3 999849, 4 1000178, 5 998158, 6 1001782, 7 1000236, 8 999055, 9 1000154}
