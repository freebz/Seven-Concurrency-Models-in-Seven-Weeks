;; 4.2.5 재시도

;; 4.2.6 확인자

(def non-negative (atom 0 :validator #(>= % 0)))
;; #'user/non-negative
(reset! non-negative 42)
;; 42
(reset! non-negative -1)
;; IllegalStateException Invalid reference state


;; 4.2.7 감시자

(def a (atom 0))
;; #'user/a
(add-watch a :print #(println "Changed from " %3 " to " %4))
;; #object[clojure.lang.Atom 0x250db28c {:status :ready, :val 0}]
(swap! a + 2)
;; Changed from  0  to  2
;; 2
