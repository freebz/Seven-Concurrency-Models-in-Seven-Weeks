;; 3.3.5 분할과 정복

;; 3.3.6 Fold 지원하기

(defprotocol CollFold
  (coll-fold [coll n combinef reducef]))


;; FunctionalProgramming/Reducers/src/reducers/core.clj
(defn my-fold
  ([reducef coll]
   (my-fold reducef reducef coll))
  ([combinef reducef coll]
   (my-fold 512 combinef reducef coll))
  ([n combine reducef coll]
   (coll-fold coll n combinef reducef)))


;; FunctionalProgramming/Reducers/src/reducers/core.clj
(defn make-reducer [reducible transformf]
  (reify
    CollFold
    (coll-fold [_ n combinef reducef]
      (coll-fold reducible n combinef (transformf reducef)))

    CollReduce
    (coll-reduce [_ f1]
      (coll-reduce reducible (transformf f1) (f1)))
    (coll-reduce [_ f1 init]
      (coll-reduce reducible (transformf f1) init))))


(def v (into [] (range 10000)))
;; #'reducers.core/v
(my-fold + v)
;; 49995000
(my-fold + (my-map (partial * 2) v))
;; 99990000
