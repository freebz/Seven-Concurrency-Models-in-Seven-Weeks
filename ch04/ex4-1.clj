;; CHAPTER 4 클로저 방식 - 아이덴티티를 상태에서 분리하기

;; 4.1 두 세계의 장점

;; 4.2 1일 차: 원자와 영속적인 자료구조

;; 4.2.1 원자

(def my-atom (atom 42))
;; #'user/my-atom
(deref my-atom)
;; 42
@my-atom
;; 42


(swap! my-atom inc)
;; 43
@my-atom
;; 43


(swap! my-atom + 2)
;; 45


(reset! my-atom 0)
;; 0
@my-atom
;; 0


(def session (atom {}))
;; #'user/session
(swap! session assoc :username "paul")
;; {:username "paul"}
(swap! session assoc :session-id 1234)
;; {:username "paul", :session-id 1234}
