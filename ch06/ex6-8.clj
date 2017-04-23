;; 6.4.3 사건 처리

;; CSP/Animation/resources/public/index.html
<html>
  <head>
    <title>Animation</title>
    <script src="/js/main.js" type="text/javascript"></script>
  </head>
  <body>
    <div id="canvas" width="100%" height="100%"></div>
  </body>
</html>


;; CSP/Animation/src-cljs/animation/core.cljs
(defn create-graphics [elem]
  (doto (graphics/createGraphics "100%" "100%")
    (.render elem)))


;; CSP/Animation/src-cljs/animation/core.cljs
(def stroke (graphics/Stroke. 1 "#ff0000"))

(defn shrinking-circle [graphcis x y]
  (go
    (let [circle (.drawCircle graphics x y 100 stroke nil)]
      (loop [r 100]
        (<! (timeout 25))
        (.setRadius circle r r)
        (when (> r 0)
          (recur (dec r))))
      (.dispose circle))))


;; CSP/Animation/src-cljs/animation/core.cljs
(defn get-events [elem event-type]
  (let [ch (chan)]
    (events/listen elem event-type
                   #(put! ch %))
    ch))


;; CSP/Animation/src-cljs/animation/core.cljs
(defn start[]
  (let [canvas (dom/getElement "canvas")
        graphics (create-graphics canvas)
        clicks (get-events canvas "click")]
    (go (while true
          (let [click (<! clicks)
                x (.-offsetX click)
                y (.-offsetY click)]
            (shrinking-circle graphics x y))))))
(set! (.-onload js/window) start)
