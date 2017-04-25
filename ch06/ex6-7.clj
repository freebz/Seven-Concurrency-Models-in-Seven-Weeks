;; 6.4 3�� ��: Ŭ���̾�Ʈ ������ CSP

;; 6.4.1 ���ü��̶� ������ ���´�

;; 6.4.2 ���, Ŭ������ũ��Ʈ

;; see CSP/HelloClojureScript/resources/public/index.html
<html>
  <head>
    <title>Hello ClojureScript</title>
    <script src="/js/main.js" type="text/javascript"></script>
  </head>
  <body>
    <div id="content">
    </div>
  </body>
</html>


;; CSP/HelloClojureScript/src-cljs/hello_clojurescript/core.cljs
(ns hello-clojurescript.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.dom :as dom]
            [cljs.core.async :refer [<! timeout]]))

(defn output [elem message]
  (dom/append elem message (dom/createDom "br")))
(defn start []
  (let [content (dom/getElement "content")]
    (go
      (while true
        (<! (timeout 1000))
        (output content "Hello from task 1")))
    (go
      (while true
        (<! (timeout 1500))
        (output content "Hello from task 2")))))

(set! (.-onload js/window) start)


;; Hello from task 1
;; Hello from task 2
;; Hello from task 1
;; Hello from task 2
;; Hello from task 1
;; Hello from task 1
;; Hello from task 2
