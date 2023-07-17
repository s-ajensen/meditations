---
title: "Associative Destructuring"
---

In Clojure, we can pull items out of a seq with ease via sequential destructuring:

```clojure
(def my-vec [:a :b :c])
; instead of 
(let [f (first my-vec)
      s (second my-vec)
      t (third my-vec)]
  ...)

; we can say
(let [[f s t] my-vec])
; to easily give names to the values in the vec
```

But this can also be done to maps via `associative destructuring`. This way, instead of having to manually pull individual items out of a map like so

```clojure
(def fruits {:blueberry   :sweet
             :lemon       :sour
             :cantelloupe :tasteless})

(let [b (:blueberry fruits)
      l (:lemon fruits)
      c (:canelloupe fruits)]
  ...)
```

We can simply say

```clojure
(let [{b :blueberry
       l :lemon
       c :cantelloupe} fruits]
  ...)
```

and achieve an identical effect.