;; 6.4.4 콜백 길들이기

;; 6.4.5 우리는 마법사를 보러 간다네

;; CSP/Wizard/resources/public/index.html
<form id="wizard" action="/wizard" method="post">
  <fieldset class="step" id="step1">
    <legend>Step 1</legend>
    <label>First Name:</label><input type="text" name="firstname" />
    <label>Last Name:</label><input type="text" name="lastname" />
  </fieldset>

  <fieldset class="step" id="step2">
    <legend>Step 2</legend>
    <label>Date of Birth:</label><input type="date" name="dob" />
    <label>Homepage:</label><input type="url" name="url" />
  </fieldset>

  <fieldset class="step" id="step3">
    <legend>Step 3</legend>
    <label>Password:</label><input type="password" name="pass1" />
    <label>Confirm Password:</label><input type="password" name="pass2" />
  </fieldset>
  <input type="button" id="next" value="Next" />
</form>


;; CSP/Wizard/resources/public/style.css
;; label { display:block; width:8em; clear:left; float:left;
;; 	 text-align:right; margin-right: 3pt; }
;; input { display:block; }
;; .step { display:none; }


;; CSP/Wizard/src-cljs/wazard/core.cljs
(defn show [elem]
  (set! (.. elem -style -display) "block"))

(defn hide [elem]
  (set! (.. elem -style -display) "none"))

(defn set-value [elem value]
  (set! (.-value elem) value))


(set! (.. elem -style -display) "block")
;; => elem.style.display = "block";


;; CSP/Wizard/src-cljs/wizard/core.cljs
(defn start []
  (go
    (let [wizard (dom/getElement "wizard")
          step1 (dom/getElement "step1")
          step2 (dom/getElement "step2")
          step3 (dom/getElement "step3")
          next-button (dom/getElement "next")
          next-clicks (get-events next-button "click")]
      (show step1)
      (<! next-clicks)
      (hide step1)
      (show step2)
      (<! next-clicks)
      (set-value next-button "Finish")
      (hide step2)
      (show step3)
      (<! next-clicks)
      (.submit wizard))))

(set! (.-onload js/window) start)
