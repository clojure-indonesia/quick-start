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
      click EventType.CLICK]
  (listen button click (fn []
                         (let [number (->> (.querySelector js/document "input[type=number]")
                                           (.-value))
                               msg (cond
                                     (= number "") "Can't convert string '' to number, NaN"
                                     (neg? (js/parseInt number)) "Positive integer, please :)"
                                     :else (str "factorial " number " = " (fac (js/parseInt number))))
                               p (.querySelector js/document "p")]
                           (set! (.-innerHTML p) msg)))))
