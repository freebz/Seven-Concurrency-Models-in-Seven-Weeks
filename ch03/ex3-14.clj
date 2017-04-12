;; 3.3.2 ������ ���� ��ġ

;; FunctionalProgramming/WordCount/src/wordcount/core.clj
(defn count-words [pages]
  (reduce (partial merge-with +)
          (pmap count-words-sequential (partition-all 100 pages))))


(partition-all 4 [1 2 3 4 5 6 7 8 9 10])
;; ((1 2 3 4) (5 6 7 8) (9 10))
