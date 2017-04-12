;; 3.2.2 클로저에 대한 초스피드 안내

(max 3 5)
;; 5

(+ 1 (* 2 3))
;; 7

(def meaning-of-life 42)
;; #'user/meaning-of-life
meaning-of-life
;; 42

(if (< meaning-of-life 0) "negative" "non-negative")
;; "non-negative"

(def droids ["Huey" "Dewey" "Louie"])
;; #'user/droids
(count droids)
;; 3
(droids 0)
;; "Huey"
z(droids 2)
;; "Louie"

(defn percentage [x p] (* x (/ p 100.0)))
;; #'user/percentage
(percentage 200 10)
;; 20.0
