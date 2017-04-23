;; 6.3.2 비동기적인 폴링

;; 폴링 함수

;; CSP/Polling/src/polling/core.clj
(defn poll-fn [interval action]
  (let [seconds (* interval 1000)]
    (go (while true
          (action)
          (<! (timeout seconds))))))


(poll-fn 10 #(println "Polling at:" (System/currentTimeMillis)))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@765ad740>
;; sieve.core=>
;; Polling at: 1492821099881
;; Polling at: 1492821109898
;; Polling at: 1492821119912
;; Polling at: 1492821129928
;; Polling at: 1492821139944
;; ...


(def ch (to-chan (iterate inc 0)))
;; #'polling.core/ch
(poll-fn 10 #(println "Read:" (<! ch)))
;; Exception in thread "async-dispatch-2" java.lang.AssertionError: Assert failed: <! used not in (go ...) block
;; nil


;; 폴링 매크로

;; CSP/Polling/src/polling/core.clj
(defmacro poll [interval & body]
  `(let [seconds# (* ~interval 1000)]
     (go (while true
           (do ~@body)
           (<! (timeout seconds#))))))


(poll 10
      (println "Polling at:" (System/currentTimeMillis))
      (println (<! ch)))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@6f7d9691>
;; polling.core=>
;; Polling at: 1492830634476
;; 0
;; Polling at: 1492830644492
;; 1
;; Polling at: 1492830654507
;; 2
;; Polling at: 1492830664522
;; 3
;; Polling at: 1492830674537
;; 4
;; ...


(macroexpand-1
 '(poll 10
        (pirntln "Polling at:" (System/currentTimeMillis))
        (println (<! ch))))
;; (clojure.core/let [seconds__3171__auto__ (clojure.core/* 10 1000)]
;;   (clojure.core.async/go
;;     (clojure.core/while true
;;       (do
;;         (pirntln "Polling at:" (System/currentTimeMillis))
;;         (println (<! ch)))
;;       (clojure.core.async/<! (clojure.core.async/timeout seconds__3171__auto__)))))
