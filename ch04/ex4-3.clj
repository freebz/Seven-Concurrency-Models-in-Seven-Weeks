;; 4.2.3 영속적인 자료구조

(def mapv1 {:name "paul" :age 45})
;; #'user/mapv1
(def mapv2 (assoc mapv1 :sex :male))
;; #'user/mapv2
mapv1
;; {:age 45, :name "paul"}
mapv2
;; {:age 45, :name "paul", :sex :male}


(def listv1 (list 1 2 3))
;; #'user/listv1
listv1
;; (1 2 3)


(def listv2 (cons 4 listv1))
;; #'user/listv2
listv2
;; (4 1 2 3)


(def listv3 (cons 5 (rest listv1)))
;; #'user/listv3
listv3
;; (5 2 3)


(def listv1 (list 1 2 3 4))
;; #'user/listv1
(def listv2 (take 2 listv1))
;; #'user/listv2
listv2
;; (1 2)
