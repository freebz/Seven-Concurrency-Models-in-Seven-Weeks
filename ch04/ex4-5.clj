;; 4.2.8 하이브리드 웹 서비스

;; 세션 관리

;; Clojure/TranscriptHandler/src/server/session.clj
(def last-session-id (atom 0))
(defn next-session-id []
  (swap! last-session-id inc))


(in-ns 'server.session)
;; #<Namespace server.session>
(next-session-id)
;; 1
(next-session-id)
;; 2
(next-session-id)
;; 3


(def sessions (atom {}))

(defn new-session [initial]
  (let [session-id (next-session-id)]
    (swap! sessions assoc session-id initial)
    session-id))

(defn get-session [id]
  (@sessions id))


;; 세션 만료

;; Clojure/TranscriptHandler/src/server/session.clj
(def sessions (atom {}))

(defn now []
  (System/currentTimeMillis))

(defn new-session [initial]
  (let [session-id (next-session-id)
        session (assoc initial :last-referenced (atom (now)))]
    (swap! sessions assoc session-id session)
    session-id))

(defn get-session [id]
  (let [session (@sessions id)]
    (reset! (:last-referenced session) (now))
    session))


;; Clojure/TranscriptHandler/src/server/session.clj
(defn session-expiry-time []
  (- (now) (* 10 60 1000)))
(defn expired? [session]
  (< @(:last-referenced session) (session-expiry-time)))

(defn sweep-sessions []
  (swap! sessions #(remove-vals % expired?)))
(def session-sweeper
  (schedule {:min (range 0 60 5)} sweep-sessions))


;; 모두 하나로

;; Clojure/TranscriptHandler/src/server/core.clj
(defn create-session []
  (let [snippets (repeatedly promise)
        translations (delay (map translate
                                 (strings->sentences (map deref snippets))))]
    (new-session {:snippets snippets :translations translations})))


;; Clojure/TranscriptHandler/src/server/core.clj
(defn accept-snippet [session n text]
  (deliver (nth (:snippets session) n) text))

(defn get-translation [session n]
  @(nth @(:translations session) n))


;; Clojure/TranscriptHandler/src/server/core.clj
(defroutes app-routes
  (POST "/session/create" []
        (response (str (create-session))))

  (context "/session/:session-id" [session-id]
           (let [session (get-session (edn/read-string session-id))]
             (routes
              (PUT "/snippet/:n" [n :as {:keys [body]}]
                   (accept-snippet session (edn/read-string n) (slurp body))
                   (response "OK"))

              (GET "/translation/:n" [n]
                   (response (get-translation session (edn/read-string n))))))))
