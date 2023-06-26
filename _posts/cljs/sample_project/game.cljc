(ns sample-project.game
  (:require [sample-project.move :as move]
            [sample-project.util :as util]))

(defn build-board [state]
  (get {:3x3 (util/new-game)
        :4x4 (util/new-game (repeat 16 nil))}
    (:size state)))

(defn build-game [state]
  (let [board (build-board state)
        mode  (:mode state)]
    (if (or (= :cvp mode) (= :cvc mode))
      (move/move 0 \X board)
      board)))

(defmulti progress-game :mode)

(defmethod progress-game :pvp [state selection]
  (let [board (:state state)]
    (move/move selection (move/cur-token board) board)))

(defn progress-ai [state selection]
  (let [board (:state state)]
    (->> (move/move selection (move/cur-token board) board)
      (move/next-move (:difficulty state)))))

(defmethod progress-game :pvc [state selection]
  (progress-ai state selection))

(defmethod progress-game :cvp [state selection]
  (progress-ai state selection))

