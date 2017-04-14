;; 4.3.3 ����Ʈ���� Ʈ����� �޸�

(def my-ref (ref 0))
;; #'user/my-ref
@my-ref
;; 0


(ref-set my-ref 42)
;; IllegalStateException No transaction running

(alter my-ref inc)
;; IllegalStateException No transaction running


(dosync (ref-set my-ref 42))
;; 42
@my-ref
;; 42
(dosync (alter my-ref inc))
;; 43
@my-ref
;; 43


;; ���� ���� ref��

;; Clojure/Trasfer/src/transfer/core.clj
(defn transfer [from to amount]
  (dosync
   (alter from - amount)
   (alter to + amount)))


(def checking (ref 1000))
;; #'user/checking
(def savings (ref 2000))
;; #'user/savings
(transfer savings checking 100)
;; 1100
@checking
;; 1100
@savings
;; 1900


;; Ʈ����� ��õ��ϱ�

(def attempts (atom 0))
(def transfers (agent 0))

(defn transfer [from to amount]
  (dosync
   (swap! attempts inc) ; ���������� �̷��� �ϸ� �ȵȴ�.
   (send transfers inc)
   (alter from - amount)
   (alter to + amount)))


;; Clojure/Trasfer/src/transfer/core.clj
(def checking (ref 10000))
(def savings (ref 20000))

(defn stress-thread [from to iterations amount]
  (Thread. #(dotimes [_ iterations] (transfer from to amount))))

(defn -main [& args]
  (println "Before: Checking =" @checking " Savings =" @savings)
  (let [t1 (stress-thread checking savings 100 100)
        t2 (stress-thread savings checking 200 100)]
    (.start t1)
    (.start t2)
    (.join t1)
    (.join t2))
  (await transfers)
  (println "Attempts: " @attempts)
  (println "Transfers: " @transfers)
  (println "After: Checking =" @checking " Savings =" @savings))
