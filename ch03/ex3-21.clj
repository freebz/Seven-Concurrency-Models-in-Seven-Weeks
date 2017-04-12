;; ¹®Àå

;; FunctionalProgramming/TranscriptHandler2/src/server/sentences.clj
(defn sentence-split [text]
  (map trim (re-seq #"[^\.!\?:;]+[\.!\?:;]*" text)))


(sentence-split "This is a sentence. Is this?! A fragment")
;; ("This is a sentence." "Is this?!" "A fragment")


;; FunctionalProgramming/TranscriptHandler2/src/server/sentences.clj
(defn is-sentence? [text]
  (re-matches #"^.*[\.!\?:;]$" text))

(is-sentence? "This is a sentence.")
;; "This is a sentence."
(is-sentence? "A sentence doesn't end with a comma,")
;; nil


;; FunctionalProgramming/TranscriptHandler2/src/server/sentences.clj
(defn sentence-join [x y]
  (if (is-sentence? x) y (str x " " y)))

(defn strings->sentences [strings]
  (filter is-sentence?
          (reductions sentence-join
                      (mapcat sentence-split strings))))


(reduce + [1 2 3 4])
;; 10
(reductions + [1 2 3 4])
;; (1 3 6 10)


(sentence-join "A complete sentence." "Start of another")
;; "Start of another"
(sentence-join "This is" "a sentence.")
;; "This is a sentence."


(def fragments ["A" "sentence." "And another." "Last" "sentence."])
;; #'server.core/fragments
(reductions sentence-join fragments)
;; ("A" "A sentence." "And another." "Last" "Last sentence.")


(filter is-sentence? (reductions sentence-join fragments))
;; ("A sentence." "And another." "Last sentence.")
