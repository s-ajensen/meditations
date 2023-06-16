---
title: "And That's a Promise"
---

Promises in Clojure are a welcome abstraction to anyone who has had the misfortune of having to manage threads in a language like C, using mutex locks and semaphors to pass messages back and forth between threads, avoiding deadlocks, and the like. A prommise—so aptly named—is a symbol which represents a value which is being computed on a spawned thread, i.e., it is a *promise* that the value will be computed, even if it isn't yet.

If we define a promise and immediately try to dereference it

```clojure
(def p (promise))
(deref p) ; waiting for p to be "delivered"
```

The program will hang indefinitely. This is because dereferencing a promise halts evaluation on the current thread until the promised value has been computed. For a more lifelike example, take the following:

```clojure
(def users (promise))
(doto (Thread. (fn []
  ; go fetch a large number of users from a database and
  ; store in symbol 'result'
  (deliver users result)))
  .start)

(deref users)
```

Our program spawns a thread which performs some computationally-expensive operation and then stores it in `users`. The last line—where we dereference `users`—will hang until this promise is "delivered" to the symbol.