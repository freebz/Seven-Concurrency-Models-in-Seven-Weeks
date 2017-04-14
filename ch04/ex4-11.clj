;; 4.4.3 원자인가 STM인가?

;; 4.4.4 직접 만든 동시성

;; Clojure/DiningPhilosphersAtom2/src/philosophers/core.clj
(defn claim-chopsticks! [philosopher left right]
  (swap-when! philosophers
    #(and (= (%1 left) :thinking) (= (%1 right) :thinking))
    assoc philosopher :eating))


;; Clojure/DiningPhilosphersAtom2/src/philosophers/core.clj
(defn swap-when!
  "If (pred current-value-of-atom) is true, atomically swaps the value
  of the atom to become (apply f current-value-of-atom args). Note that
  both pred and f may be called multiple times and thus should be free
  of side effects. Returns the value that was swapped in if the
  predicate was true, nil otherwise."
  [a pred f & args]
  (loop []
    (let [old @a]
      (if (pred old)
        (let [new (apply f old args)]
          (if (compare-and-set! a old new)
            new
            (recur)))
        nil))))


(apply + 1 2 [3 4 5])
;; 15
(+ 1 2 3 4 5)
;; 15
