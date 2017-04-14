;; CHAPTER 4 Ŭ���� ��� - ���̵�ƼƼ�� ���¿��� �и��ϱ�

;; 4.1 �� ������ ����

;; 4.2 1�� ��: ���ڿ� �������� �ڷᱸ��

;; 4.2.1 ����

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
