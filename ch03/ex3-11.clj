;; 3.2.5 �Լ� ������� �ܾ� ����

;; �Լ����� ��

(def counts {"apple" 2 "orange" 1})
;; #'sum.core/counts
(get counts "apple" 0)
;; 2
(get counts "banana" 0)
;; 0
(assoc counts "banana" 1)
;; {"banana" 1, "orange" 1, "apple" 2}
(assoc counts "apple" 3)
;; {"orange" 1, "apple" 3}


;; ��

;; FunctionalProgramming/WordCount/src/wordcount/word_frequencies.clj

(defn word-frequencies [words]
  (reduce
   (fn [counts word] (assoc counts word (inc (get counts word 0))))
   {} words))


(word-frequencies ["one" "potato" "two" "potato" "three" "potato" "four"])
;; {"four" 1, "three" 1, "two" 1, "potato" 3, "one" 1}


(frequencies ["one" "potato" "two" "potato" "three" "potato" "four"])
;; {"one" 1, "potato" 3, "two" 1, "three" 1, "four" 1}



;; ���� ���õ� �߰����� �Լ���

(map inc [0 1 2 3 4 5])
;; (1 2 3 4 5 6)
(map (fn [x] (* 2 x)) [0 1 2 3 4 5])
;; (0 2 4 6 8 10)


(def multiply-by-2 (partial * 2))
;; #'user/multiply-by-2
(multiply-by-2 3)
;; 6
(map (partial * 2) [0 1 2 3 4 5])
;; (0 2 4 6 8 10)


(defn get-words [text] (re-seq #"\w+" text))
;; #'user/get-words
(get-words "one two three four")
;; ("one" "two" "three" "four")


(map get-words ["one two three" "four five six" "seven eight nine"])
;; (("one" "two" "three") ("four" "five" "six") ("seven" "eight" "nine"))


(mapcat get-words ["one two three" "four five six" "seven eight nine"])
;; ("one" "two" "three" "four" "five" "six" "seven" "eight" "nine")



;; ��� �ϳ��� �����ϱ�

;; FunctionalProgramming/WordCount/src/wordcount/core.clj
(defn count-words-sequential [pages]
  (frequencies (mapcat get-words pages)))
