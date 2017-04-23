;; 6.2.2 고 블록

;; 블로킹에 수반되는 문제

;; 제어의 역전

;; 주차하기

(def ch (chan))
;; #'channels.core/ch
(go
  (let [x (<! ch)
        y (<! ch)]
    (println "Sum:" (+ x y))))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@1f28b714>
(>!! ch 3)
;; nil
(>!! ch 4)
;; nil
;; Sum: 7


;; 고 블록은 값싸다

(<!! (go (+ 3 4)))
;; 7


;; CSP/channels/src/channels/core.clj
(defn go-add [x y]
  (<!! (nth (iterate #(go (inc (<! %))) (go x)) y)))


(time (go-add 10 10))
;; "Elapsed time: 9.09666 msecs"
;; 20
(time (go-add 10 1000))
;; "Elapsed time: 98.795453 msecs"
;; 1010
(time (go-add 10 100000))
;; "Elapsed time: 925.735631 msecs"
;; 100010
