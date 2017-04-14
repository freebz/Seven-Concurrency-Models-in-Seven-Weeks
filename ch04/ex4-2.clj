;; 4.2.2 ���� ���¸� �̿��ϴ� ��Ƽ������ �� ����

;; Clojure/TournamentServer/src/server/core.clj
(def players (atom ()))

(defn list-players []
  (response (json/encode @players)))

(defn create-player [player-name]
  (swap! players conj player-name)
  (status (response "") 201))

(defroutes app-routes
  (GET "/players" [] (list-players))
  (PUT "/players/:player-name" [player-name] (create-player player-name)))
(defn -main [& args]
  (run-jetty (site app-routes) {:port 3000}))


$ curl localhost:3000/players
[]

$ curl -X put localhost:3000/players/john
$ curl localhost:3000/players
["john"]

$ curl -X put localhost:3000/players/paul
$ curl -X put localhost:3000/players/george
$ curl -X put localhost:3000/players/ringo
$ curl localhost:3000/players
["ringo","george","paul","john"]

