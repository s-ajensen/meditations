(ns sample-project.core-spec
  (:require-macros [speclj.core :refer [describe it should= should-contain with-stubs stub should-not-contain]])
  (:require [speclj.core]
            [reagent.core :as r]
            [sample-project.components :as components]
            [sample-project.util :as util]))

(defn contains-like? [coll target]
  (clojure.set/subset? (clojure.set target) (clojure.set coll)))

(defn get-by-type [coll target]
  (let [tags (filter sequential? coll)]
        (apply concat (filter #(= target (first %)) tags)
          (for [tag tags]
            (get-by-type tag target)))))

(describe "state changer"
  (it "updates game state"
    (components/update-state! nil :some-key :some-val)
    (should= :some-val (:some-key @components/state))))

(describe "radio menu component"
  (it "labels section"
    (let [menu (components/radio-menu :set-id [])]
      (should-contain [:label :set-id] menu)
      (should-contain [:br] menu)))

  (it "sets value and name for option"
    (let [menu (components/radio-menu :set-id [:opt1])]
      (should-contain :fieldset menu)
      (should-contain {:id :set-id} menu)
      (should-contain "opt1" (last menu))
      (should-contain :input (first (last menu))))))

(describe "options-bar component"
  (describe "difficulty section"
    (with-stubs)

    (it "creates radio menu for game modes"
      (with-redefs [components/radio-menu (stub :mock-radio-menu {:return "game mode menu"})]
        (should-contain "game mode menu" (components/options-bar))))

    (it "creates radio menu for difficulty"
      (with-redefs [components/radio-menu (stub :mock-radio-menu {:return "difficulty menu"})]
        (should-contain "difficulty menu" (components/options-bar))))

    (it "creates radio menu for game size"
      (with-redefs [components/radio-menu (stub :mock-radio-menu {:return "size menu"})]
        (should-contain "size menu" (components/options-bar)))))

  (describe "new game button"
    ))

(describe "game board component"
  (it "indexes each position on board"
    (should= [{:idx 0 :val nil} {:idx 1 :val nil}
              {:idx 2 :val nil} {:idx 3 :val nil}]
      (components/idx-board [nil nil nil nil])))

  (it "creates buttons with appropriate id for index"
    (swap! components/state assoc :state (util/new-game))
    (let [buttons (get-by-type (components/game-board) :button)]
      (should= [0 1 2 3 4 5 6 7 8]
        (map #(:id (second %)) buttons))))

  (it "progresses game state"
    (swap! components/state assoc :state (util/new-game))
    (components/progress-game 0)
    (should= [\X nil nil nil nil nil nil nil nil]
      (:state @components/state)))

  (it "sets on-click event for button click"
    (let [buttons (get-by-type (components/game-board) :button)]
      (should-not-contain nil (map #(:on-click (second %)) buttons))))

  (it "displays game over message when appropriate"
    (let [headers (get-by-type (components/game-board) :h2)]
      (should= [] headers))
    (swap! components/state assoc :state [\X \O nil \X \O nil \X nil nil])
    (let [headers (get-by-type (components/game-board) :h2)]
      (should= [[:h2 "Game over!"]] headers))))