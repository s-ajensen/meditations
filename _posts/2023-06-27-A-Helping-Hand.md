---
title: "A Helping Hand"
---

While testing the generation of my reagent components for tic tac toe, I ran into a particularly difficult problem. Being sometimes an extremely deep tree, to check whether a particular tag existed in the hierarchy oftentimes looked something like this:

```clojure
(should= :button (-> (radio-menu) second last first))
```

Which is unfavorable for a number of reasons. Firstly, it's simply hard to read. As someone who may be unfamiliar with this code, I have no idea why the first of the last of the second value of the return value of `radio-menu` is so special. It is left completely unexmplained. Secondly, if the structure of the hierarchy changes *at all*, then I have to go back and rewrite my test. The above would effectively test

```clojure
[:div
  [:div
    [:h1 "label"]
    [:button "Submit"]]]
```

but breaks as soon as we make a slight change to

```clojure
[:div
  [:div 
    [:h1 "label"]
    [:button "Submit"]
    [:something-else "..."]]]
```

Not only this, but to test multiple tags, we end up with a large amount of very fragile code duplication.

To address this problem, I wrote myself a small helper function called `get-by-type`, which looks like the following:

```clojure

(defn get-by-type [coll target]
  (let [tags (filter sequential? coll)]
    (apply concat (filter #(= target (first %)) tags)
      (for [tag tags]
        (get-by-type tag target)))))
```

As the name suggests, it starts at some root tag, filters out the children which don't have the desired tag name, and concatenate it with the result of calling the same function again on each of the `sequential` children of the root node. 

Doing so allows me to search even very large hierarchies of components and retrieve specific amounts of data for my tests.