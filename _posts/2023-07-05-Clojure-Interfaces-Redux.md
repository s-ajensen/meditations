---
title: "Clojure Interfaces Redux"
---

In my recent posts on the subject of Java interoperability ([here](https://s-ajensen.github.io/meditations/2023/06/30/Reification.html) and [here](https://s-ajensen.github.io/meditations/2023/07/03/Clojure-Interfaces.html)), I described some of the techniques that can be used to allow Clojure to extend types from Java using functions such as `reify` and `gen-class`. While these may get the job done, I overlooked perhaps the most natural teqhnique which I'd like to discuss here.

I've discussed in the past how we can emulate Java-like polymorphism using the `deftype` function, but it goes deeper than I previously implied.

In Clojure we can define a `protocol` which creates a Java interface under the hood to create a contract that guarantees that a type implements a given method:

```clojure
(defprotocol Drawable
  (draw []))
```

With this defined we can then implement a concrete implementor like so:

```clojure
(deftype Square [size]
  Drawable
  (draw []
    (rect 0 0 size size)))
```

In this case, we define a `Square` type which takes in a size and (presuming `rect` is some UI function we call for side effects) draws a rectangle of that size.

What I failed to realize when writing *[Back to Our Use Cases](https://s-ajensen.github.io/meditations/2023/05/01/Back-to-Our-Use-Cases.html)* is that since `defprotocol` is creating an interface under the hood, `deftype` is really a general use function for implementing any Java interface.

Relating this back to the problem of creating a `FileFilter`, we could define a type to accomplish what we did with `reify` in the past like so:

```clojure
(deftype DirectoryFilter []
  FileFilter
  (accept [f]
    (.isDirectory f)))
```

This created an implementor of `FileFilter` called `DirectoryFilter` which we can pass around anywhere a `FileFilter` is welcome.

Going back to the `list-dirs` example from the last article, we could implement it similarly like so:

```clojure
(defn list-dirs [root]
  (.listFiles (java.io.File. root) (DirectoryFilter.)))
```

A much more portable and performant alternative to using `reify` (and certainly so for `proxy`).