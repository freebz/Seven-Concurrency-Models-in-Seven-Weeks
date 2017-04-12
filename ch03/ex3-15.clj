;; 3.3.3 Ãà¼ÒÀÚ

(map (partial * 2) [1 2 3 4])
;; (2 4 6 8)


(require '[clojure.core.reducers :as r])
;; nil
(r/map (partial * 2) [1 2 3 4])
;; #<reducers$folder$reify__1748 clojure.core.reducers$folder$reify__1748@29fc486d>


(reduce conj [] (r/map (partial * 2) [1 2 3 4]))
;; [2 4 6 8]


(into [] (r/map (partial * 2) [1 2 3 4]))
;; [2 4 6 8]


(into [] (r/map (partial + 1) (r/filter even? [1 2 3 4])))
;; [3 5]
