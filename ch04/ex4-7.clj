;; 4.3.2 인메모리 로그

;; Clojure/Logger/src/logger/core.clj
(def log-entries (agent []))

(defn log [entry]
  (send log-entries conj [(now) entry]))


(log "Something happened")
;; #<Agent@37a13a1f: [[1492058528109 "Something happened"]]>
(log "Something else happened")
;; #<Agent@37a13a1f: [[1492058528109 "Something happened"]]>
@log-entries
;; [[1492058528109 "Something happened"] [1492058556281 "Something else happened"]]
