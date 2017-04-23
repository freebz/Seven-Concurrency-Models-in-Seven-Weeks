;; 6.3.3 비동기적인 IO

;; 콜백에서 채널로

(require '[org.httpkit.client :as http])
;; nil
(defn handle-response [response]
  (let [url (get-in response [:opts :url])
        status (:status response)]
    (println "Fetched:" url "with status:" status)))
;; #'wordcount.core/handle-response
(http/get "http://paulbutcher.com/" handle-response)
;; #<core$promise$reify__6310@134b9b92: :pending>
;; wordcount.core=>
;; Fetched: https://paulbutcher.com/ with status: 200


;; CSP/WordCount/src/wordcount/http.clj
(defn http-get [url]
  (let [ch (chan)]
    (http/get url (fn [response]
                    (if (= 200 (:status response))
                      (put! ch response)
                      (do (print-error response) (close! ch)))))
    ch))


;; 폴링 피드

;; CSP/WordCount/src/wordcount/feed.clj
(def poll-interval 60)

; Simple-minded feed-polling function
; WARNING: Don't use in production (use conditional get instead)

(defn poll-feed [url]
  (let [ch (chan)]
    (poll poll-interval
          (when-let [response (<! (http-get url))]
            (let [feed (parse-feed (:body response))]
              (onto-chan ch (get-links feed) false))))
    ch))


(ns wordcount.feed)
;; nil
(def feed (poll-feed "http://www.cbsnews.com/feeds/rss/main.rss"))
;; #'wordcount.feed/feed
(loop []
  (when-let [url (<!! feed)]
    (println url)
    (recur)))
;; http://www.cbsnews.com/news/rubio-denies-setting-up-mar-a-lago-secret-meeting-with-trump-former-colombian-presidents/
;; http://www.cbsnews.com/news/rubio-denies-setting-up-mar-a-lago-secret-meeting-with-trump-former-colombian-presidents/
;; http://www.cbsnews.com/news/rubio-denies-setting-up-mar-a-lago-secret-meeting-with-trump-former-colombian-presidents/
;; http://www.cbsnews.com/news/private-meetings-at-trumps-mar-a-lago-raise-questions-about-access/
;; ...


;; 고유한 링크

;; CSP/WordCount/src/wordcount/feed.clj
(defn new-links [url]
  (let [in (poll-feed url)
        out (chan)]
    (go-loop [links #{}]
      (let [link (<! in)]
        (if (contains? links link)
          (recur links)
          (do
            (>! out link)
            (recur (conj links link))))))
    out))


;; 단어 세기

;; CSP/WordCount/src/wordcount/core.clj
(defn get-counts [urls]
  (let [counts (chan)]
    (go (while true
          (let [url (<! urls)]
            (when-let [response (<! (http-get url))]
              (let [c (count (get-words (:body response)))]
                (>! counts [url c]))))))
    counts))


;; 모두 하나로 묶기

;; CSP/WordCount/src/wordcount/core.clj
(defn -main [feeds-file]
  (with-open [rdr (io/reader feeds-file)]
    (let [feed-urls (line-seq rdr)
          article-urls (doall (map new-links feed-urls))
          article-counts (doall (map get-counts article-urls))
          counts (async/merge article-counts)]
      (while true
        (println (<!! counts))))))
