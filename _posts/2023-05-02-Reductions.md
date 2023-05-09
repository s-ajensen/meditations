---
title: "Reductions"
---

As I continue to familiarize myself with Clojure, my expectations for what is possible continue to grow—always a great experience when learning something new. The place where this happens the most is, by far, when iterating over a sequence in a particular way. 

Coming from a more prodecural/object-oriented background, learning how to break my mind out of the traditional `for` loop model has taken time. Luckily, Clojure has myriad ways to accomplish this, depending on the use case.

As has been discussed in [previous posts](https://s-ajensen.github.io/meditations/2023/04/14/Refactoring-to-Recursion.html), the closest structure that Clojure has to traditional loop structures involve a recursive approach. For instance, to sum values in a range, we might do the following:

```clojure
((loop [s (range 10) m 0]
  (if (nil? (next s))
    m
    (recur (next s) (+ (first s) m)))))
```

Which works fine, but it can be done in a much simpler fashion by using the `reduce` function, which applies a function (in this case `+`) to pairs of values in our seq until it runs out of values:

```clojure
(reduce + (range 10))
```

By using `reduce` to aggregate the values we've decreased our code from 4 lines to 1. Indeed, any instance in which we need to `loop` over a seq but only need to keep track of one aggregate (in this case `m`), then we can do so by using `reduce`.