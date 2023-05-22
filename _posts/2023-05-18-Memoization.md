---
title: "Memoization"
---

One of the most fundamental concepts in computer programming is that of *caching*—where we take the result of a query we anticipate needing again in the future and storing it in a more readily-available place. A great analogy of this is studying in a library: it takes a long time to find a specific piece of information in a specific paragraph of a specific page of a specific book on a specific shelf. So instead of walking from your desk to the stacks each time you want some information, you go to the section that contains book on a certain topic and take a chunk of them back to your desk to be parsed through more quickly.

This is a particularly important concept in functional languages such as Clojure because of a lack of mutable state. Most of the data structures that we are handling only exist in a particular context and might have to be recalculated in another.

Clojure accomodates this issue with a brilliantly simple function: `memoize`.

`memoize` simply takes a call to a given funciton and—over the course of the runtime of a program—caches the input-output pairs in memory. This way, the values need not be recalculated a second time around, they can simply be collected from the cache!