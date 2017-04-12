;; 3.3 2일 차: 함수 병렬화

;; 3.3.1 한 번에 페이지 하나씩

(pmap #(frequencies (get-words %)) pages)


#(frequencies (get-words %))


(fn [page] (frequencies (get-words page)))


(def pages ["one potato two potato three potato four"
            "five potato six potato seven potato more"])
;; #'wordcount.core/pages
(pmap #(frequencies (get-words %)) pages)
;; ({"one" 1, "potato" 3, "two" 1, "three" 1, "four" 1}
;;  {"five" 1, "potato" 3, "six" 1, "seven" 1, "more" 1})


(def merge-counts (partial merge-with +))
;; #'wordcount.core/merge-counts
(merge-counts {:x 1 :y 2} {:y 1 :z 1})
;; {:z 1, :y 3, :x 1}


;; FunctionalProgramming/WordCount/src/wordcount/core.clj
(defn count-words-parallel [pages]
  (reduce (partial merge-with +)
          (pmap #(frequencies (get-words %)) pages)))
