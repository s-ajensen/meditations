# Primes and Pythagoreans

While most know of the Pythagoreans for a particular, triangular theorem, their contributions to numerology, in fact, go much deeper. Specifically in the realm of prime numbers, a Pythagorean known as Eratosthenes of Cyrene developed a technique for their generation in the 3rd century (BC) which is still of importance to this day.

While recently working through problems on [Project Euler](https://projecteuler.net/about), I had the pleasure of working through this very algorithm which operates as such:

Let us take a small range of numbers, say, `2-20` and determine which primes live within this range.

We begin by iterating over this range starting at the beginning:
`2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20`

This, 2, is the first prime and we mark it as such

`primes: 2`

However, we then take all the multiples of two and remove them from our query, as we know that they are divisible by 2 and, thus, are not prime. This leaves us with:

`3 5 7 9 11 13 15 17 19`

The first of which, 3, we take as the next prime, removing its multiples from the query:

`primes: 2 3`
`5 7 11 13 17 19`

If we repeat this process withing the current range, we will find that none is a multiple of one another. Doing so, we will arrive at 
`2 3 5 7 11 13 17 19` as the list of primes less than 20. 

This process can be repeated to find the primes within any given range, and with lasy sequencing in Clojure, this can be done in a manner which is highly memory-efficient.

For instance, we might begin with a lazy range of integers starting from 2 as 

`(let [possible-primes (drop 2 (range))])`

which evaulates to 

`'(2 3 4 5 6 7 ...)`

We can then take 2 and add it to our list of primes, reiterating with a new range defined by `(filter (fn [x] (= 0 (mod x 2))) possible-primes)`.

Fully fleshed-out in code, it might look something like this:

```
(defn calc-primes [n]
  (loop [possible-primes (range 2 n) primes '()]
    (if (< n (first possible-primes))
      primes
      (recur 
        (filter #(= 0 (mod % (first possible-primes)) possible-primes))
        (conj primes (first possible-primes))))))
```
