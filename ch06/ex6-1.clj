;; CHAPTER 6 ���� ���μ��� ���

;; 6.1 �ǻ������ ��� ���̴�

;; 6.2 1�� ��: ä�ΰ� �� ���

;; CSP/channels/src/channels/core.clj
(ns channels.core
  (:require [clojure.core.async :as async :refer :all
             :exclude [map into reduce merge partition partition-by take]]))


;; 6.2.1 ä��

(def c (chan))
;; #'channels.core/c

(thread (println "Read:" (<!! c) "from c"))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@52362021>
(>!! c "Hello thread")
;; Read: Hello thread from c
;; nil


;; ���۸�

(thread (>!! c "Hello") (println "Write completed"))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@e28da48>
(<!! c)
;; Write completed
;; "Hello"


(def bc (chan 5))
;; #'channels.core/bc
(>!! bc 0)
;; nil
(>!! bc 1)
;; nil
(close! bc)
;; nil
(<!! bc)
;; 0
(<!! bc)
;; 1
(<!! bc)
;; nil


;; ä�� �ݱ�

(>!! (chan) nil)
;; IllegalArgumentException Can't put nil on channel  clojure.core.async.impl.channels.ManyToManyChannel (channels.clj:53)


;; CSP/channels/src/channels/core.clj
(defn readall!! [ch]
  (loop [coll []]
    (if-let [x (<!! ch)]
      (recur (conj coll x))
      coll)))


;; CSP/channels/src/channels/core.clj
(defn writeall!! [ch coll]
  (doseq [x coll]
    (>!! ch x))
  (close! ch))


(def ch (chan 10))
;; #'channels.core/ch
(writeall!! ch (range 0 10))
;; nil
(readall!! ch)
;; [0 1 2 3 4 5 6 7 8 9]


(def ch (chan 10))
;; #'channels.core/ch
(onto-chan ch (range 0 10))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@2162a06a>
(<!! (async/into [] ch))
;; [0 1 2 3 4 5 6 7 8 9]


;; �� �� ���� ����

(def dc (chan (dropping-buffer 5)))
;; #'channels.core/dc
(onto-chan dc (range 0 10))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@32101ec>
(<!! (async/into [] dc))
;; [0 1 2 3 4]


(def sc (chan (sliding-buffer 5)))
;; #'channels.core/sc
(onto-chan sc (range 0 10))
;; #<ManyToManyChannel clojure.core.async.impl.channels.ManyToManyChannel@4ecd670>
(<!! (async/into [] sc))
;; [5 6 7 8 9]
