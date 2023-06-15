---
title: "Why the Delay?"
---

Properly abiding by the paradigm of functional programming, we often say that we want our funcitons to be free from side effects whenever possible. As a side effect, we may end up calculating the same value multiple times to avoid mutating state. When the computational complexity of such a function is small, we can afford to do without without too much worry:

```clojure
(defn short-calculation [] 
  (take 10 (iterate inc 1))) ;=> (1 2 3 ... 10)
```

When we need to perform this short calculation, we can afford to call it multiple places throughout our program without too much of a performance hit. But what if our calculation takes a long time? For instance

```clojure
(defn long-calculation []
  ; calculate the possible moves of a tic tac toe game, for instance
)
```

This function, when called hundreds—maybe thousands—of times during the runtime of our program will create massive performance problems. Under normal circumstances, we would address this problem by calculating it once and storing it in a symbol which can be referred to multiple times. Often, though, proper scoping makes this difficult.

To address this, we can use a powerful Clojure construct called a `delay`:

```clojure
(def long-calculation []
  (delay (;the long calculation)
))
```

By wrapping the body of the function like so, Clojure will only call the function is `long-calculation` is dereferenced and store the value for us. This way, if we dereference it a second, third, or hundredth time it will not need to be recalculated!