;; 4.3 2�� ��: ������Ʈ�� ����Ʈ���� Ʈ����� �޸�

;; 4.3.1 ������Ʈ

(def my-agent (agent 0))
;; #'user/my-agent
@my-agent
;; 0


(send my-agent inc)
;; #object[clojure.lang.Agent 0x4e5675ee {:status :ready, :val 1}]
@my-agent
;; 1
(send my-agent + 2)
;; #object[clojure.lang.Agent 0x4e5675ee {:status :ready, :val 1}]
@my-agent
;; 3


;; ������Ʈ�� ������ �Ϸ�Ǳ⸦ ��ٸ���

(send my-agent inc)
;; #object[clojure.lang.Agent 0x4e5675ee {:status :ready, :val 3}]


(send my-agent + 2)
;; #object[clojure.lang.Agent 0x4e5675ee {:status :ready, :val 4}]


(def my-agent (agent 0))
;; #'user/my-agent
(send my-agent #((Thread/sleep 2000) (inc %)))
;; #object[clojure.lang.Agent 0x13b30bd4 {:status :ready, :val 0}]
@my-agent
;; 0
@my-agent
;; 1


(def my-agent (agent 0))
;; #'user/my-agent
(send my-agent #((Thread/sleep 2000) (inc %)))
;; #object[clojure.lang.Agent 0x2e92d527 {:status :ready, :val 0}]
(await my-agent)
;; nil
@my-agent
;; 1


;; ���� ó��

(def non-negative (agent 1 :validator (fn [new-val] (>= new-val 0))))
;; #'user/non-negative


(send non-negative dec)
;; #object[clojure.lang.Agent 0x60faa0e3 {:status :ready, :val 1}]
@non-negative
;; 0
(send non-negative dec)
;; #object[clojure.lang.Agent 0x60faa0e3 {:status :ready, :val 0}]
@non-negative
;; 0


(send non-negative inc)
;; IllegalStateException Invalid reference state  clojure.lang.ARef.validate (ARef.java:33)

@non-negative
;; 0


(agent-error non-negative)
#_
#error {
 :cause "Invalid reference state"
 :via
 [{:type java.lang.IllegalStateException
   :message "Invalid reference state"
   :at [clojure.lang.ARef validate "ARef.java" 33]}]
 :trace
 [[clojure.lang.ARef validate "ARef.java" 33]
  [clojure.lang.ARef validate "ARef.java" 46]
  [clojure.lang.Agent setState "Agent.java" 177]
  [clojure.lang.Agent$Action doRun "Agent.java" 115]
  [clojure.lang.Agent$Action run "Agent.java" 163]
  [java.util.concurrent.ThreadPoolExecutor runWorker "ThreadPoolExecutor.java" 1142]
  [java.util.concurrent.ThreadPoolExecutor$Worker run "ThreadPoolExecutor.java" 617]
  [java.lang.Thread run "Thread.java" 745]]}
(restart-agent non-negative 0)
;; 0
(agent-error non-negative)
;; nil
(send non-negative inc)
;; #object[clojure.lang.Agent 0x60faa0e3 {:status :ready, :val 0}]
@non-negative
;; 1
