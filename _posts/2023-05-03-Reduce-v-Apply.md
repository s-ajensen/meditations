---
title: "Reduce v. Apply"
---

While diving deeper into the workings of using `reduce` to elegantly boil down sequences, I was perplexed by the similarity between it and the `apply` function.

Indeed, if we take a modified version of the example from my [last post](https://s-ajensen.github.io/meditations/2023/04/14/Reductions.html) and replace `reduce` with `apply`, we get the same thing:

```
(reduce + '(1 2 3))   ; => 6
(apply + '(1 2 3))    ; => 6
```

Are these two functions equivalent then? Let's investigate by expanding the expressions:

```
(reduce + '(1 2 3))   =>   (+ (+ 1 2) 3)
(apply + '(1 2 3))    =>   (+ 1 2 3)
```

As we can see, `reduce` recursively calls the given function (in this case, `+`) on each pair of items in our sequence, whereas `apply` simply evaluates to a new list with the function as the first argument. The only reason that they evaluate to the same value in this instance is a result of the `+` function being overloaded to accept `& more` arguments. If we look at the implementation of this overload, we will see that it actually performs this operation by using `reduce`!

```
(defn +
  ...
  ([x y & more]
     (reduce1 + (+ x y) more)))
```

So in cases where a function is defined to accept variable number of arguments as a sequence, we can see that they will behave similarly. If not... well, then you're likely to get a compiler error.