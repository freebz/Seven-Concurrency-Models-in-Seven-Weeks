;; 6.2.3 채널에서의 동작

;; 채널에서 맵 수행하기

;; CSP/channels/src/channels/core.clj
(defn map-chan [f from]
  (let [to (chan)]
    (go-loop []
      (when-let [x (<! from)]
        (>! to (f x))
        (recur))
      (close! to))
    to))


(def ch (chan 10))
;; #'channels.core/ch
(def mapped (map-chan (partial * 2) ch))
;; #'channels.core/mapped
(onto-chan ch (range 0 10))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@5c557422>
(<!! (async/into [] mapped))
;; [0 2 4 6 8 10 12 14 16 18]


(def ch (to-chan (range 0 10)))
;; #'channels.core/ch
(<!! (async/into [] (map< (partial * 2) (filter< even? ch))))
;; [0 4 8 12 16]


;; 동시적인 에라토스테네스의 체

;; CSP/Sieve/src/sieve/core.clj
(defn factor? [x y]
  (zero? (mod y x)))

(defn get-primes [limit]
  (let [primes (chan)
        numbers (to-chan (range 2 limit))]
    (go-loop [ch numbers]
      (when-let [prime (<! ch)]
        (>! primes prime)
        (recur (remove< (partial factor? prime) ch)))
      (close! primes))
    primes))


;; CSP/Sieve/src/sieve/core.clj
(defn -main [limit]
  (let [primes (get-primes (edn/read-string limit))]
    (loop []
      (when-let [prime (<!! primes)]
        (println prime)
        (recur)))))
