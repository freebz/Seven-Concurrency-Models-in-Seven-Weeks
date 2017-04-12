;; 3.2.4 어렵지 않게 만들 수 있는 병렬성

;; FunctionalProgramming/Sum/src/sum/core.clj

(ns sum.core
  (:require [clojure.core.reducers :as r]))

(defn parallel-sum [numbers]
  (r/fold + numbers))
