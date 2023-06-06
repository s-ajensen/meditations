---
title: "Multimethods Again"
---

Up to this point, I've usually thought about multimethods as a way to dispatch on a given value of a parameter provided when the function is called like so:

```clojure
(defmulti log :type)

(defmethod log :sql [log-req]
...)
```

The above works by calling the log function based on the structure of the `log-req` parameter. In this case, it makes the assumption that you can predicate `:type` of `log-req`, evaluates that predicate, and then calls the `:sql` version of the function if the evaulation was equal to it.

Another, more general way of doing this is like so:

```clojure
(defmulti factor (fn [n] (mod n 2)))

(defmethod factor true [n]
  (/ n 2))
```

The above funciton will dispatch based on the truth value of whether the parameter we give it, `n`, is even or not. These are not the only ways to use multimethods, however.

We can actually totally separate the dispatch value from the parameter by not using it in the function at all:

```clojure
(defmulti log (fn [] (:mode (get-db-config))))

(defmethod log :sql [req]
...)

(defmethod log :postgres [req]
...)
```

You'll notice that in the above, we still dispatch based on a type of log we wish to make, but it is evaluated based on a function which is decoupled from the function at hand. `get-dbconfig` could define global config parameters for the entire runtime of the program, or it could dispatch in its own way.