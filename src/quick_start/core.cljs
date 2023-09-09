(ns quick-start.core
  (:require [goog.events :refer [listen]])
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

(let [button (.querySelector js/document "button")
      type EventType.CLICK]
  (listen button type (fn [] (let [number (->> (.querySelector js/document "input[type=number]")
                                               (.-value)
                                               (js/parseInt))
                                   msg (str "factorial " number " = " (fac number))
                                   p (.querySelector js/document "p")]
                               (set! (.-innerHTML p) msg)))))
