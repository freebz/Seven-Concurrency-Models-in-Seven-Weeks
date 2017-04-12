;; 3.3.4 축소자의 내부

(defprotocol CollReduce
  (coll-reduce [coll f] [coll f init]))


(coll-reduce coll f)


coll.collReduce(f);


;; FunctionalProgramming/Reducers/src/reducers/core.clj
(defn my-reduce
  ([f coll] (coll-reduce coll f))
  ([f init coll] (coll-reduce coll f init)))


(my-reduce + [1 2 3 4])
;; 10
(my-reduce + 10 [1 2 3 4])
;; 20


;; FunctionalProgramming/Reducers/src/reducers/core.clj
(defn make-reducer [reducible transformf]
  (reify
    CollReduce
    (coll-reduce [_ f1]
      (coll-reduce reducible (transformf f1) (f1)))
    (coll-reduce [_ f1 init]
      (coll-reduce reducible (transformf f1) init))))

(defn my-map [mapf reducible]
  (make-reducer reducible
                (fn [reducef]
                  (fn [acc v]
                    (reducef acc (mapf v))))))


(fn [reducef]
  (fn [acc v]
    (reducef acc (mapf v))))


(into [] (my-map (partial * 2) [1 2 3 4]))
;; [2 4 6 8]
(into [] (my-map (partial + 1) [1 2 3 4]))
;; [2 3 4 5]


(into [] (my-map (partial * 2) (my-map (partial + 1) [1 2 3 4])))
;; [4 6 8 10]
