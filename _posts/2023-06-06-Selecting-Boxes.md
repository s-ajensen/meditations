---
title: "Selecting Boxes"
---

While working on the GUI for my tic tac toe game, I realized one of the most fundamental features of a UI which most of us usually take for granted: selecting things. While designing my box/button abstraction, I needed to make sure that I could correspond mouse click events to elements on the page. 

To do this, I thought about the minimal characteristics of a button:

- Has a center position
- Has height and width
- Contains some text

If I know the location of the mouse click, I can iterate through my boxes and calculate whether or not the click occurred within the bounrary defined by it by comparing the coordinates of the click with the positional elements of the box like so:

```clojure
(defn get-selected [buttons]
  (if (q/mouse-pressed?)
    (let [x (q/mouse-x) y (q/mouse-y)]
      (-> (filter #(and
                 (< (- (btn-x %) (btn-w %)) x (+ (btn-x %) (btn-w %)))
                 (< (- (btn-y %) (btn-h %)) y (+ (btn-y %) (btn-h %)))) buttons)
        first))))
```

As you can see, the function returns the first elements it finds for which the mouse click position is within its horizontal and vertical bounds.