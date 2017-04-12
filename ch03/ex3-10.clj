(def numbers (into [] (range 0 10000000)))
;; #'sum.core/numbers
(time (sum numbers))
;; "Elapsed time: 1327.003474 msecs"
;; 49999995000000
(time (sum numbers))
;; "Elapsed time: 1301.249461 msecs"
;; 49999995000000
(time (parallel-sum numbers))
;; "Elapsed time: 901.00424 msecs"
;; 49999995000000
(time (parallel-sum numbers))
;; "Elapsed time: 986.777168 msecs"
;; 49999995000000
