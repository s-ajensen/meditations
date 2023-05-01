---
title: "Thy Laziness Runneth Over"
---

Recently, while working on the [7th Euler problem](https://projecteuler.net/problem=7), I was struck by an error which I didn't expect to run across in the given context—indeed, I had specifically designed my code to avoid the error...

```
(defn lazy-primes
  ([] (lazy-primes (iterate inc 2)))
  ([possible-primes]
   (let [found-prime (first possible-primes)
         filtered    (filter #(not= 0 (mod % found-prime)) possible-primes)]
     (cons found-prime (lazy-seq (lazy-primes filtered))))))

(last (take 4000 lazy-primes))
```
...
```
StackOverflowError (!)
```

But how did this happen? Based on previous posts, one would be led to believe that by utilizing `lazy-seq`, we defer computation of items in a seq to when they are needed *and* utilize tail call optimization to ensure that we're not allocating stack frames on top of each other. This seems to be precisely the opposite of what is happening here.

To make the issue at hand more clear, I went to Clojure's implementaion of `filter` (simplified):
```
(defn filter
  ([pred coll]
   (lazy-seq
     (when-let [s (seq coll)]
       (let [f (first s) r (rest s)]
         (if (pred f)
           ( cons f(filter pred r))
           (filter pred r)))))))
```

As we can see, we return a lazy-seq which is defined by recursively evaluating a predicate on the nth value of the sequence we are trying to take. If the predicate returns true, we return the value in the sequence, otherwise simply moving on to the next value.

Nothing about this is immediately alarming, but for the same reason it is largely unhelpful. Let's take a yet deeper look and investigate how lazy-seq evaulates its values.

The source code for these functions is a bit verbose to simply paste into this article, but the fundamental take-away from sifting through it is that as the lazy-seq iterates through the possible values, it evaulates the code in the body of the function call to get the next value.

Again, this makes sense, but doesn't make clear where our overflow is coming from until we remember the context in which we are calling it. Even though lazy-primes can utilize tail recursion with respect to its own calls, with each of them, it is passing a filtered version of the lazy-seq it was given to the next call. Even if we defer the evaluation of the nth value of this sequence, when it eventually *is* realized, it returns a value determined by `filtering` n times, which will effectively evaluate to predicating 
```filter #(not= 0 (mod % 2) (filter #(not= 0 (mod % 3)) ... (filter #(not= 0 (mod % n)))))```
of the nth value: the source of our stack overflow.