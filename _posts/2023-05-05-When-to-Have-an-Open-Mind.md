---
title: "When to Have an Open mind"
---

While further studying the principles of the Open/Closed Principle, I was reminded of a friendly example I used in a [previous post](https://s-ajensen.github.io/meditations/2023/05/01/Back-to-Our-Use-Cases.html) to discuss polymorphic dispatch.

If we look at our final code

```clojure
(defprotocol Shape
  (area []))

(deftype Rect [length breadth]
  Shape
  (area [] (* length breadth)))

(deftype Square [size]
  Shape
  (area [] (* size size)))
```

We will see that our `Shape` protocol is incredibly flexible and ready to be extended. Whereas if we had simple defined an overloaded function and been bound to one use case per function overload, here we are able to continue to define this `area` predicate of any number of future types as we see fit (even if they have the same number of arguments).

This should indicate to use that the following code is following closely to the Open/Closed Principle, since we have almost no temptation to go back and change the code which already exists as new use cases come about, but rather are incentivised to add *new* code to accomodate them.
