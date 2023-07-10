---
title: Selecting Keys
---

While developing in Clojure, a language which relies heavily on hash map data structures, I found myself reqeuently needing to sift through a map for pairs with a certain key (if they exist). Traditionally, I'd do this like the following:

```clojure
(def my-map {:val1 :key1, :val2 :key2})
(def keys-i-want [:val1])

(-> (keys my-map)
  (filter (some #(= %) keys-i-want)))
```

Which returns to me the keys that were present in the map, which I can then use to collect the respective values of.

As it turns out, a friendlier version of this filter I created exists in `clojure.core`, already! By using the `select-keys` function, we can pass it a vec of keys which we want to search for and a sort of "subset" of the original map specified by these keys will be returned to us. Addressing the above example:

```clojure
(select-keys {:val1 :key1, :val2 :key2} [:val1]) ; => {:val1 :key1}
```