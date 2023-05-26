---
title: "Destructuring"
---

By far one of my favorite features of Clojure as a LISP is its ability to implicitly split up `seqs` into different symbols. I first ran into this while calculating the distance between two points and since have yet to escape finding new ways to continue to use it.

It works like so:

```clojure
(defn calc-distance [cell1 cell2]
  (let [[x1 y1] cell1 [x2 y2] cell2]
    (... distance formula))
```

While the specifics of the distance formula aren't important for the topic at hand (though if you have a penchant for Pythagoreans, go [here](https://s-ajensen.github.io/meditations/2023/04/24/Primes-and-Pythagoreans.html)), you'll notice that I have two points, `cell1` and `cell2`. I would love an idiomatic way to talk about the components of these points without having to constantly refer to them as `(first cell1)` for `x` and `(last cell1)` for y. Instead, I introduce a `let` block where I simply deconstruct `cell1` into its components by assigning it to a list, and the first two items of the `seq` get projected onto those symbols.