;; 3.2.4 ����� �ʰ� ���� �� �ִ� ���ļ�

;; FunctionalProgramming/Sum/src/sum/core.clj

(ns sum.core
  (:require [clojure.core.reducers :as r]))

(defn parallel-sum [numbers]
  (r/fold + numbers))
