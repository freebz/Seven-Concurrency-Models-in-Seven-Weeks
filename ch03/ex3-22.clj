;; 문장의 번역

;; FunctionalProgramming/TranscriptHandler2/src/server/core.clj
(def translator "http://localhost:3001/translate")

(defn translate [text]
  (future
    (:body (client/post translator {:body text}))))


;; FunctionalProgramming/TranscriptHandler2/src/server/core.clj
(def translations
  (delay
   (map translate (strings->sentences (map deref snippets)))))
