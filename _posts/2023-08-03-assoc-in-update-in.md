---
title: "assoc-in v. update-in"
---

As I continue to sharpen my Clojure skills, I have to periodically correct myself for errors which I repeatedly find myself making. One of these patterns which I've fallen into is forgetting that I can rely on `update-in` to change nested, associative structures instead of using `assoc-in` excessively, so I'm writing this as a reminder to myself.

While both fuctions do very similar things—changing the values of a nested, associative structure (maps, vecs, etc.)—there is a subtle difference. Whereas `assoc-in` simply swaps out one value for another, `update-in` calls a function on it and swaps the return value.

A pitfall I find myself tempted to make repeatedly is something like the following:

```clojure
(def my-map {:coll [1 2 3]})
(assoc-in my-map [:coll] (conj (:coll my-map) 4))
```

Here, I wish to add `4` to the `:coll` value inside `my-map`, and I accomplish my fetching the value and calling `conj` on it, returning the value that I get.

Instead, I ought to use `update-in`, which can take an anonymous function to do this very thing without needlessly fetching the value:

```clojure
(def my-map {:coll [1 2 3]})
(update-in my-map [:coll] #(conj % 4))
```