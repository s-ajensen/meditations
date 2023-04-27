# A Vector of Thoughts

While familiarizing myself with Clojure, it's been fascinating to see how far LISP syntax can go and just how powerful the notion of the evaluation of list expressions can be. But I would be remiss if in exalting the power of the list, I overlooked the rightful place of the vector, another fundamental type in Clojure—albeit one with many different properties.

It's for this reason that I want to here take the opportunity to create a `vector` of the properties of vectors which I can refer back to (and continue to add to) whenever I'm deliberating upon whether to use a vec or a list.

```
(def vectors [
    "index their elements in log32N hops (much faster than lists)"
    "can be indexed by using the 'get' keyword:  (get [:a :b :c] 1) => :b"
    "retrieve their count in constant — O(1) — time"
    "define the parameters for all functions"
    "are comparable to 'stack' data structures"
    "should therefore be operated on by peek and pop, instead of last and dissoc"
    "are not seqs, but are sequential"
    "can therefore be called by seq functions such as map or filter"
])
```
