;; 4.4 3일 차: 자세히

;; 4.4.1 STM을 이용한 식사하는 철학자

;; Clojure/DiningPhilosphersSTM/src/philosophers/core.clj
(def philosophers (into [] (repeatedly 5 #(ref :thinking))))


;; Clojure/DiningPhilosphersSTM/src/philosophers/core.clj
(defn think []
  (Thread/sleep (rand 1000)))

(defn eat []
  (Thread/sleep (rand 1000)))


(defn philosopher-thread [n]
  (Thread.
   #(let [philosopher (philosophers n)
          left (philosophers (mod (- n 1) 5))
          right (philosophers (mod (+ n 1) 5))]
      (while true
        (think)
        (when (claim-chopsticks philosopher left right)
          (eat)
          (release-chopsticks philosopher))))))

(defn -main [& args]
  (let [threads (map philosopher-thread (range 5))]
    (doseq [thread threads] (.start thread))
    (doseq [thread threads] (.join thread))))


;; Clojure/DiningPhilosphersSTM/src/philosophers/core.clj
(defn release-chopsticks [philosopher]
  (dosync (ref-set philosopher :thinking)))


;; 첫 번째 시도

(defn claim-chopsticks [philosopher left right]
  (dosync
   (when (and (= @left :thinking) (= @right :thinking))
     (ref-set philosopher :eating))))


;; 값이 변하지 않음을 보장하기

;; Clojure/DiningPhilosphersSTM/src/philosophers/core.clj
(defn claim-chopsticks [philosopher left right]
  (dosync
   (when (and (= (ensure left) :thinking) (= (ensure right) :thinking))
     (ref-set philosopher :eating))))
