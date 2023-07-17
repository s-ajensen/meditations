---
title: "Keys to the Kingdom"
---

In React, a given entity is tracked and updated on the fly by referring to it via a unique `key`. This allows the virtual dom to keep quick and handy access to items which may be contained in extremely long lists (or deep hierarchies).

In Reagent (as well as `JS` React code), it's therefore best practice to assign items in large, generated structures a unique id to help keep track of it. This can be done a number of ways, and each strategy has its benefits and disadvantages...

Firstly, we could accomplish this by using Clojure's `^` metadata operator. When defining an element like so

```clojure
[:li "I am the list element"]
```

We can inject a small key/value pair as a metadata field like so

```clojure
[:li ^{:key "some key"} "I am the list element"]
```

In the context of a generated hierarchy, we can

```clojure
(for [elem elements]
  ; simply make the element the key (if it is unique)
  ^{:key elem}
  ; correlate some attribute of the elements as the key
  ^{:key (str (:id elem) "-li")}
  ; or even just randomly generate one
  ^{:key (gen-key)}
  )
```