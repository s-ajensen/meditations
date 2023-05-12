---
title: "Transducers"
---

Working in Clojure, one almost immediately is confronted with the notion of a *reducing function*, i.e., a function which takes an accumulated result and an input, and generates an output from some combination of the two (usually to be fed back in as the accumulated result to another function call). A classic example of this is the reduction of a `seq` of numbers using the `+` operator:

```clojure
(reduce + '(1 2 3 4)) ; => 10
```

The above function call can be read another way as

```clojure
(+ (+ (+ 1 2) 3) 4)
```

Essentially taking pairs of values, starting at the beginning of the `seq` and adding them, and then taking that result and adding it to the next value and so on.

The idea of a `transducer` takes this idea and further generalizes it by allowing us to create compound reducing functions by transforming one reduction to another.

An example of this might be parsing numbers from strings, filtering the values, and then summing them:

```clojure
; Transducer that parses string to float and returns those < 100
(def xf (comp (Float/parseFloat) (filter #(> 100 %))))

; Invoke the transducer, applying it to the seq
(transduce xf + '("10.50" "500.12" "3.14" )) ; => 10.50 + 3.13 = 13.64
```