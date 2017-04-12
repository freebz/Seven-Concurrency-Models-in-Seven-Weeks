;; 3.4.6 함수 웹 서비스

;; FunctionalProgramming/TranscriptHandler/src/server/core.clj
(def snippets (repeatedly promise))


;; FunctionalProgramming/TranscriptHandler/src/server/core.clj
(defn accept-snippet [n text]
  (deliver (nth snippets n) text))


;; FunctionalProgramming/TranscriptHandler/src/server/core.clj
(future
  (doseq [snippet (map deref snippets)]
    (println snippet)))


;; FunctionalProgramming/TranscriptHandler/src/server/core.clj
(defroutes app-routes
  (PUT "/snippet/:n" [n :as {:keys [body]}]
       (accept-snippet (edn/read-string n) (slurp body))
       (response "OK")))

(defn -main [& args]
  (run-jetty (site app-routes) {:port 3000}))


$ curl -X put -d "Twas brilling, and the slithy toves" \
-H "Content-Type: text/plain" localhost:3000/snippet/0

$ curl -X put -d "All mimsy were the borogoves", \
-H "Content-Type: text/plain" localhost:3000/snippet/2

$ curl -X put -d "Did gyre and gimble in the wabe:" \
-H "Content-Type: text/plain" localhost:3000/snippet/1
