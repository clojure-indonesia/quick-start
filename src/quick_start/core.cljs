(ns quick-start.core
  (:require [goog.events :refer [listen]]
            [cljs.core.async :refer [<! >! chan put!]])
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.events EventType]))

(enable-console-print!)

(println "quick-start")

(defn fac
  [n]
  (loop [cnt n
         acc 1]
    (if (zero? cnt)
      acc
      (recur (dec cnt)
             (* acc cnt)))))

(defn event
  []
  (let [out (chan)
        button (.querySelector js/document "button")
        type EventType.CLICK]
    (listen button type (fn [] (put! out (->> (.querySelector js/document "input[type=number]")
                                              (.-value)))))
    out))

(defn view
  [in]
  (let [msg (cond
              (= in "") "Can't convert string '' to number, NaN"
              (neg? (js/parseInt in)) "Positive integer, please :)"
              :else (str "factorial " in " = " (fac (js/parseInt in))))
        p (.querySelector js/document "p")]
    (set! (.-innerHTML p) msg)))

(go (while true
      (view (<! (event)))))
