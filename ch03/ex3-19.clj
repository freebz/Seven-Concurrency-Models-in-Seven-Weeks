;; 3.4 3�� ��: �Լ� ���ü�

;; 3.4.1 ������ ����, �ٸ� �� ����

(reduce + (map (partial * 2) (range 10000)))
(reduce + (doall (map (partial * 2) (range 10000))))
(reduce + (pmap (partial * 2) (range 10000)))
(reduce + (r/map (partial * 2) (range 10000)))
(r/fold + (r/map (partial * 2) (into [] (range 10000))))


;; 3.4.2 ���� ����

(+ 1 (+ 2 3))
(+ 1 5)

(+ (+ 1 2) (+ 3 4)) -> (+ (+ 1 2) 7) -> (+ 3 7) -> 10
(+ (+ 1 2) (+ 3 4)) -> (+ 3 (+ 3 4)) -> (+ 3 7) -> 10


;; 3.4.3 �������帧

;; 3.4.4 ǻó

(def sum (future (+ 1 2 3 4 5)))
;; #'reducers.core/sum
sum
;; #<core$future_call$reify__6267@560b7820: 15>


(deref sum)
;; 15
@sum
;; 15


(let [a (future (+ 1 2))
      b (future (+ 3 4))]
  (+ @a @b))
;; 10


;; 3.4.5 ����̽�

(def meaning-of-life (promise))
;; #'reducers.core/meaning-of-life
(future (println "The meaning of life is:" @meaning-of-life))
;; #<core$future_call$reify__6267@7622e629: :pending>
(deliver meaning-of-life 42)
;; The meaning of life is: 42
;; #<core$promise$reify__6310@2c06e409: 42>
