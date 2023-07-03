---
title: "Reification"
---

One of the great qualities Clojure posesses is its interoperability with Java. We can import and instantiate Java classes, use their methods; any code which we can write in Java, we can then execute in Clojure. But Clojure's structures don't totally line up with those of Java... there are no classes, no interfaces, or are there? 

The closest parallel which Clojure has to Java inheritance is the `defprotocol`/`deftype` flow, wherein we can create a contract to guarantee that a function can be called for a given type/record. Under the hood, this actually creates a Java interface, which it then implements in the defines type.

This is great for user-defined protocols (interfaces), but what if we want to implement an interface someone else created? To accomplish this, we can use the `reify` function.

When we `reify`, we return an implementation of an interface and one of its methods. This can then be stored in a function to allow us to pass around our new type.

Say that we wanted the ability to filter only files in the current path that are directories. We could call the `listFiles()` method of java.io.File, which accepts a java.io.FileFilter as an optional parameter. We can reify this type with our own to define how we want to filter the list of files:

```clojure
(.listFiles (java.io.File. ".")
  (reify
    java.io.FileFilter
    (accept [this f]
      (.isDirectory f))))
```

This implements the `accept()` method of `FileFilter` and returns the value.

Since Clojure protocols define interfaces under the hood, we can also reify these to implement the functions which they define:

```clojure
; from https://clojuredocs.org/clojure.core/reify
(defrecord Grape  [qty])

(defprotocol Fruit
  (subtotal [item]))

(extend-type Grape
  Fruit
  (subtotal [item]
    (* 178 (:qty item))))

(defn discounted [item]
  (reify Fruit
    (subtotal [_]
      (println "modifying subtotal with discount:")
      (int (* 0.75 (subtotal item))))))
```

As we can see, discounted defines a function which implements the `subtotal` protocol in a specific manner for a particular `item`.