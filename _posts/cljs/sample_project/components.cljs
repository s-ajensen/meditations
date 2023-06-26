(ns sample-project.components
  (:require [reagent.core :as r]
            [sample-project.move :as move]
            [sample-project.util :as util]
            [sample-project.game :as game]))

(defonce state (r/atom {:state (util/new-game) :difficulty :hard :mode :pvp :size :3x3}))

(defn update-state! [_, key, val]
  (swap! state assoc key val))

(def difficulties [:easy :medium :hard])
(def modes [:pvp :pvc :cvp])
(def sizes [:3x3 :4x4])

(defn check [attrs opt]
  (if (some #{opt} (vals @state))
    (assoc attrs :checked "checked")
    attrs))

(defn radio-menu [id opts]
  [:fieldset {:id id}
   [:label id]
   [:br]
   (apply concat
     (for [opt opts]
       [[:input (-> {:type :radio :value opt :name id
                  :on-change #(update-state! % id opt)}
                  (check opt))]
        (name opt)]))])

(defn new-game []
  (update-state! nil :state (game/build-game @state)))

(defn options-bar []
  [:div {:id :options}
   (radio-menu :difficulty difficulties)
   (radio-menu :mode modes)
   (radio-menu :size sizes)
   [:button {:on-click #(new-game)} "New Game"]])

(defn progress-game [selection]
  (update-state! nil :state (game/progress-game @state selection)))

(defn board-cell [cell]
  [:button {:id (:idx cell)
            :on-click #(progress-game (:idx cell))}
   (if (nil? (:val cell)) "-" (:val cell))])

(defn board-row [cells]
  [:tr
   (for [cell cells]
     (board-cell cell))])

(defn idx-board [board]
  (map-indexed (fn [idx val] {:idx idx :val val}) board))

(defn game-board []
  (let [board (idx-board (:state @state))
        rows (partition (util/length board) board)]
    [:div
     [:table
      (for [row rows]
        (board-row row))]
     (if (move/game-over? (:state @state)) [:h2 "Game over!"])]))

(defn main []
  (println @state)
  [:div {:id :container}
   (options-bar)
   (game-board)])