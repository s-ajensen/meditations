(ns sample-project.move
  (:require [sample-project.util :as util]))

(defn move
  ([n t board]
   (if (nil? (nth board n))
     (assoc board n t)
     (throw (ex-info
              (str "tile " n "is already occupied!")
              {:data (str board)})))))

(defn cur-token [board]
  (let [x (count (filter #(= \X %) board))
        y (count (filter #(= \O %) board))]
    (if (= x y) \X \O)))

(defn next-token [board]
  (if (= (cur-token board) \X) \O \X))

(defn open-moves [board]
  (->> board
    (map-indexed vector)
    (filter #(= (second %) nil))
    (map first)))

(defn reverse-diag [board]
  (flatten (reverse (partition (util/length board) board))))

(defn winnable-lines [board]
  (let [length (util/length board)]
    (let [rows (partition length board)
          cols (map #(take-nth length %) (take length (iterate rest board)))
          diag (list (take-nth (inc length) board) (take-nth (inc length) (reverse-diag board)))]
      (concat rows cols diag))))

(defn win? [board]
  (->> (winnable-lines board)
    (map #(partition-by identity %))
    (filter #(= 1 (count %)))
    (map #(flatten %))
    (some #(not (every? nil? %)))))

(defn tie? [board]
  (and (not (win? board)) (empty? (filter nil? board))))

(defn game-over? [board]
  (or (win? board) (empty? (filter nil? board))))

(defn winner [board]
  (cond
    (tie? board) :tie
    (not (win? board)) nil
    :else (next-token board)))

(declare best-move)

(defn- prioritize [board depth]
  (println depth)
  (cond
    (win? board) (- 10 depth)
    (tie? board) 0
    (= 3 depth) 0
    :else (let [best (best-move board)]
            (* -1 (prioritize
                    (move best (cur-token board) board)
                    (inc depth))))))

(def prioritize (memoize prioritize))

(defn max-move [moves]
  (->> moves
    (first)
    (first)))

(defn possible-moves [board]
  (->> (open-moves board)
    (map #(move % (cur-token board) board))))

(defn sort-moves [board]
  (->> (possible-moves board)
    (map #(prioritize % 0))
    (zipmap (open-moves board))
    (sort-by second >)))

(defn best-move [board]
  (max-move (sort-moves board)))

(defmulti next-move
  (fn [difficulty board] difficulty))

(defmethod next-move :default [_ board]
  (move (best-move board) (cur-token board) board))

(defmethod next-move :easy [_ board]
  (let [chosen-move (->> (sort-moves board)
                      (last)
                      (first))]
    (move chosen-move (cur-token board) board)))

(defmethod next-move :med [_ board]
  (let [chosen-move (->> (sort-moves board)
                      (cycle)
                      (second)
                      (first))]
    (move chosen-move (cur-token board) board)))
