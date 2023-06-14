---
title: Having Fun(ctions)
---

The [Quil](http://quil.info/) UI library for Clojure defined a flow that many such frameworks do:
1. Set up the state of the program
2. Draw this state
3. Update this state (processing user input)
4. Repeat

Traditionally, this state was managed by the user and one would have to update some sort atomic variable in the update function to see results much liek this:

```clojure
(def state (atom 0))
(defn setup [] (swap! state 10))
(defn update [] (swap! state inc))
```

With the new `fun-mode` (short for *funcitonal* mode), though, we can treat this flow in a much more idiomatic way by passing state *through* the update function, calling it recursively like so:

```clojure
(defn setup [] {:dots 10})
(defn update [state] (assoc :dots (inc :dots state)))
```

Defining the `update` function this way, a Quil sketch will recursively call `update`, feeding the return value back into itself each refresh (and to the draw method) before repeating.