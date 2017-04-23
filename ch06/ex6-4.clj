;; 6.3 2일 차: 여러 개의 채널과 IO

;; 6.3.1 여러 채널 다루기

(def ch1 (chan))
;; #'channels.core/ch1
(def ch2 (chan))
;; #'channels.core/ch2
(go-loop []
  (alt!
    ch1 ([x] (println "Read" x "from channel 1"))
    ch2 ([x] (println "Twice" x "is" (* x 2))))
  (recur))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@62121e44>
(>!! ch1 "foo")
;; Read foo from channel 1
;; nil
(>!! ch2 21)
;; Twice 21 is 42
;; nil


;; 타임아웃

(time (<!! (timeout 10000)))
;; "Elapsed time: 10014.420689 msecs"
;; nil


(def ch (chan))
;; #'channels.core/ch
(let [t (timeout 10000)]
  (go (alt!
        ch ([x] (println "Read" x "from channel"))
        t (println "Timed out"))))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@261700bf>
;; channels.core=>
;; Timed out


;; 구체화 타임아웃

;; CSP/SieveTimeout/src/sieve/core.clj
(defn get-primes []
  (let [primes (chan)
        numbers (to-chan (iterate inc 2))]
    (go-loop [ch numbers]
      (when-let [prime (<! ch)]
        (>! primes prime)
        (recur (remove< (partial factor? prime) ch)))
      (close! primes))
    primes))


;; CSP/SieveTimeout/src/sieve/core.clj
(defn -main [seconds]
  (let [primes (get-primes)
        limit (timeout (* (edn/read-string seconds) 1000))]
    (loop []
      (alt!! :priority true
             limit nil
             primes ([prime] (println prime) (recur))))))
