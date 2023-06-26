(ns speclj.running
  (:require [clojure.string :as str]
            [speclj.components :as components]
            [speclj.config :refer [active-reporters]]
            [speclj.platform :refer [current-time pending? secs-since]]
            [speclj.reporting :refer [report-description* report-run]]
            [speclj.results :refer [error-result fail-result pass-result pending-result]]
            [speclj.tags :refer [pass-tag-filter? tag-sets-for tags-for]]))

(defn focusable? [component]
  (and (some? component)
       (or (components/is-description? component)
           (components/is-characteristic? component))))

(defn focused? [component]
  @(.-is-focused? component))

(defn has-focus? [component]
  (and (components/is-description? component)
       @(.-has-focus? component)))

(defn focus-mode? [component]
  (or (focused? component)
      (has-focus? component)
      (when-let [parent @(.-parent component)]
        (recur parent))))

(defn can-run? [component]
  (or (focused? component)
      (has-focus? component)
      (not (focus-mode? component))))

(defn all-children [component]
  (if (components/is-description? component)
    (concat @(.-characteristics component) @(.-children component))
    []))

(defn focus! [component]
  (reset! (.-is-focused? component) true))

(defn focus-characteristics! [component]
  (focus! component)
  (doall (map focus! @(.-characteristics component))))

(defn focus-children! [component]
  (focus! component)
  (doall (map focus-children! @(.-children component))))

(defn enable-focus-mode! [component]
  (when-let [parent @(.-parent component)]
    (reset! (.-has-focus? parent) true)
    (recur parent)))

(defn track-focused-descriptions! [descriptions]
  (doseq [component descriptions]
    (when (focused? component)
      (enable-focus-mode! component)
      (focus-children! component)
      (focus-characteristics! component))))

(defn track-focused-characteristics! [characteristics]
  (doseq [characteristic characteristics
          :when (focused? characteristic)]
    (enable-focus-mode! characteristic)))

(defn scan-for-focus! [description]
  (let [all (->> (tree-seq some? all-children description))]
    (track-focused-descriptions! (filter components/is-description? all))
    (track-focused-characteristics! (filter components/is-characteristic? all))
    description))

(defn filter-focused [descriptions]
  (doseq [description descriptions] (scan-for-focus! description))
  (or (seq (filter focus-mode? descriptions)) descriptions))

(defn- eval-components [components]
  (doseq [component components] ((.-body component))))

(defn nested-fns [base fns]
  (if (seq fns)
    (partial (first fns) (nested-fns base (rest fns)))
    base))

(defn- eval-characteristic [befores body afters]
  (eval-components befores)
  (try
    (body)
    (finally
      (eval-components afters))))

(defn- reset-withs [withs]
  (doseq [with withs] (components/reset-with with)))

(defn- collect-components [getter description]
  (loop [description description components []]
    (if description
      (recur @(.-parent description) (concat (getter description) components))
      components)))

(defn- report-result [result-constructor characteristic start-time reporters failure]
  (let [present-args (filter identity [characteristic (secs-since start-time) failure])
        result       (apply result-constructor present-args)]
    (report-run result reporters)
    result))

(defn- do-characteristic [characteristic reporters]
  (let [description           @(.-parent characteristic)
        befores               (collect-components #(deref (.-befores %)) description)
        afters                (collect-components #(deref (.-afters %)) description)
        core-body             (.-body characteristic)
        before-and-after-body (fn [] (eval-characteristic befores core-body afters))
        arounds               (collect-components #(deref (.-arounds %)) description)
        full-body             (nested-fns before-and-after-body (map #(.-body %) arounds))
        withs                 (collect-components #(deref (.-withs %)) description)
        start-time            (current-time)]
    (try
      (do
        (full-body)
        (report-result pass-result characteristic start-time reporters nil))
      (catch #?(:clj java.lang.Throwable :cljs :default) e
        (if (pending? e)
          (report-result pending-result characteristic start-time reporters e)
          (report-result fail-result characteristic start-time reporters e)))
      (finally
        (reset-withs withs)))))                             ;MDM - Possible clojure bug.  Inlining reset-withs results in compile error

(defn- do-characteristics [characteristics reporters]
  (doall
    (for [characteristic characteristics :when (can-run? characteristic)]
      (do-characteristic characteristic reporters))))

(declare do-description)

(defn- do-child-contexts [context results reporters]
  (loop [results  results
         children @(.-children context)]
    (if (seq children)
      (recur (concat results (do-description (first children) reporters)) (rest children))
      (do
        (eval-components @(.-after-alls context))
        results))))

(defn- results-for-context [context reporters]
  (if (pass-tag-filter? (tags-for context))
    (do-characteristics @(.-characteristics context) reporters)
    []))

#?(:clj
   (defn- with-withs-bound [description body]
     (let [withs         (concat @(.-withs description) @(.-with-alls description))
           ns            (the-ns (symbol (.-ns description)))
           with-mappings (reduce #(assoc %1 (ns-resolve ns (.-name %2)) %2) {} withs)]
       (with-bindings* with-mappings body)))

   :cljs
   (defn- with-withs-bound [description body]
     (let [withs        (concat @(.-withs description) @(.-with-alls description))
           ns           (str/replace (.-ns description) "-" "_")
           var-names    (map #(str ns "." (name (.-name %))) withs)
           unique-names (map #(str ns "." (name (.-unique-name %))) withs)]
       (doseq [[n un] (partition 2 (interleave var-names unique-names))]
         (let [code (str n " = " un ";")]
           (js* "eval(~{})" code)))
       (try
         (body)
         (finally
           (doseq [[n] var-names]
             (let [code (str n " = null;")]
               (js* "eval(~{})" code))))))))

(defn- nested-results-for-context [description reporters]
  (let [results (results-for-context description reporters)]
    (do-child-contexts description results reporters)))

(defn- with-around-alls [description run-characteristics-fn]
  ((nested-fns run-characteristics-fn
               (map #(.-body %) @(.-around-alls description)))))

(defn do-description [description reporters]
  (when (can-run? description)
    (let [tag-sets (tag-sets-for description)]
      (when (some pass-tag-filter? tag-sets)
        (report-description* reporters description)
        (with-withs-bound description
                          (fn []
                            (eval-components @(.-before-alls description))

                            (try
                              (with-around-alls
                                description
                                (partial nested-results-for-context description reporters))

                              (finally
                                (reset-withs @(.-with-alls description))))))))))

(defn process-compile-error [runner e]
  (let [error-result (error-result e)]
    (swap! (.-results runner) conj error-result)
    (report-run error-result (active-reporters))))

(defprotocol Runner
  (run-directories [this directories reporters])
  (submit-description [this description])
  (run-description [this description reporters])
  (run-and-report [this reporters]))

