---
title: Clojure Interfaces
---

As I've developed more in Clojure, I've come to think of the traditional, OO principles such as inheritance in a more-abstract way. DIP doesn't necessarily have to apply to interfaces, we can implement it using maps and protocols. LSP doesn't necessitate the ability to create abstract classes, it applies to overloaded functions as well. Ths list goes on...

But I recently found myself in a position where I *had* to pass some implementation of a Java interface to a method because of Java interop. What are my options given this? Well, there are a few, and they vary greatly in terms of performance and overall restrictiveness. We'll review them here:

## `proxy`
The `proxy` macro allows us to create a an anonymous class which we inherit from our desired interface and then immediately instantiate and has the following syntax: `(proxy [class/interface] [args] body)`. For an example, let's take the `FileFilter` example we talked about in my last post which filters out files which aren't a directory. In Java, we'd accomplish this in context like so using an inline class:

```java
new FileFilter() {
    @Override
    public boolean accept(File f) {
        return f.isDirectory();
    }
}
```

Something similar could be accomplished with the proxy like so:

```clojure
(proxy [FileFilter] []
  (accept [f]
    (.isDirectory f)))
```

Which we could embed within a function that lists files based on such a `FileFilter` like so:

```clojure
(defn list-dirs [root]
  (.listFiles (java.io.File. root)
    (proxy [FileFilter] []
      (accept [f]
        (.isDirectory f)))))
```

You'd do well to notice that this looks very simliar to our implementation using

## `reify`

```clojure
(defn list-dirs [root]
  (.listFiles (java.io.File. root)
    (reify FileFilter
      (accept [this f]
        (.isDirectory f)))))
```

Indeed, reify in the newer standard for doing what `proxy` has accomplished in the past and is almost always preferabe over it due to performance concerns with `proxy` wherein it unnecessarily overloads empty methods of the interface and dispatches based off of a `string > func` map instead of utilizing Java polymorphic interop based on type.

## `gen-class`
Another option we have at our disposal is the `gen-class` function which, when compiled, will generate a Java class based on the functions we define in a given namespace. To accomplish what we've done above, the following could be written:

```clojure
(gen-class
  :name "mypackage.DirectoryFilter"
  :implements [java.io.File]
  :state "state"
  :init "init"
  :prefix "dir-filter-")

(defn dir-filter-init []
  [[] (ref {})])

(defn dir-filter-accept [this]
  (let [state (.state this)] (.isDirectory state)))
```

This is by far the most verbose and restrictive of the three options, as well as the least-idiomatic from a Clojure perspective. We are essentially writing Java code in Clojure syntax defining constructors and all. I've used this technique in the past for compiling Clojure code to a `jar` file and—seeing as this will require us to define ahead of time compilation for our project just to use this class, it does not server my purpose at hand.