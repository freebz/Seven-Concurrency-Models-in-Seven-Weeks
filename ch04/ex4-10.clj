;; 4.4.2 STM을 사용하지 않는 식사하는 철학자

;; Clojure/DiningPhilosphersAtom/src/philosophers/core.clj
(def philosophers (atom (into [] (repeat 5 :thinking))))


;; Clojure/DiningPhilosphersAtom/src/philosophers/core.clj
(defn philosopher-thread [philosopher]
  (Thread.
   #(let [left (mod (- philosopher 1) 5)
          right (mod (+ philosopher 1) 5)]
      (while true
        (think)
        (when (claim-chopsticks! philosopher left right)
          (eat)
          (release-chopsticks! philosopher))))))


;; Clojure/DiningPhilosphersAtom/src/philosophers/core.clj
(defn release-chopsticks! [philosopher]
  (swap! philosophers assoc philosopher :thinking))


(assoc [:a :a :a :a] 2 :b)
;; [:a :a :b :a]


;; Clojure/DiningPhilosphersAtom/src/philosophers/core.clj
(defn claim-chopsticks! [philosopher left right]
  (swap! philosophers
         (fn [ps]
           (if (and (= (ps left) :thinking) (= (ps right) :thinking))
             (assoc ps philosophers :eating)
             ps)))
  (= (@philosophers philosopher) :eating))
