# Refactoring<sup>2</sup>

In a [previous post](https://s-ajensen.github.io/meditations/2023/04/14/Refactoring-to-Recursion.html), I extolled the virtues of Clojure's recursive approach to iteration and the massive benefit provided by having tail call optimization implicit in its looping structure. As I have continued to work with the language, however, I have discovered that my approach in that article—while valid—may not have been as idiomatic as hoped.

I would, therefore, like to take the opportunity here to further refactor the lessons that were learned by refactoring procedural iteration to recursion in a yet more-declarative fashion.

Seeing as [primes and their generation](https://s-ajensen.github.io/meditations/2023/04/24/Primes-and-Pythagoreans.html) have been on my mind recently, let's address 3 possible approaches to the Sieve of Eratosthenes, starting with a [procedural approach in Java](https://www.geeksforgeeks.org/java-program-for-sieve-of-eratosthenes/).

```java
boolean[] sieveOfEratosthenes(int n){
  boolean prime[] = new boolean[n+1];
  for(int i=0;i<=n;i++)
    prime[i] = true;
         
  for (int p = 2; p*p <= n; p++) {
  if(prime[p] == true) {
    for(int i = p*p; i <= n; i += p)
      prime[i] = false;
    }
  }
  return prime;
}
```

As we can see, the algorithm begins by allocating memory in which our possible primes will be stored, so we require as many memory allocations as numbers we are checking. We then iterate through these possible primes one by one (stopping at the square root of our max value as to not waste time where we know there are no primes) and "cross off" the multiples of each by setting their value to false and returning an array of booleans to represent that if `prime[i]` is true, then `i` is prime.

This approach is fine, but has a downside in that it not only requires us to specify a finite range of primes to search through, but we have to allocate memory for each of these possible primes each time we run the function. While this could be solved by, perhaps, caching the result of the sieve, but that just means *more* code for a problem which could be solved much more simply.

Following [Refactoring<sup>1</sup>](https://s-ajensen.github.io/meditations/2023/04/14/Refactoring-to-Recursion.html), this is where we would apply Clojure's `loop` function for a recursive solution like so:

```clojure
(defn find-primes [n]
  (loop [possible-primes (range 2 n) primes []]
    (if (empty? possible-primes)
      primes
      (let [prime (first possible-primes)]
        (recur
          (filter #(not (= 0 (mod % prime))) possible-primes)
          (conj primes prime))))))
```

While this approach solves the issue of having to store large arrays of (mostly unused) booleans, it still suffers from an upper limit to the number below which we are hunting for our primes. 

The above function answers the question of "what are all the prime numbers below n?" But what if I am asking the (frankly, more common) question of "what are the first n primes numbers?"

Well, Clojure has an answer to this as well (and it just so happens to be related to *[yet another](https://s-ajensen.github.io/meditations/2023/04/12/Working-Faster-by-Working-Lazier.html)* post of mine) by leveraging lazy sequences. Let's write a function that addresses all of the considerations we've mentioned up to this point. It will
1. Not unnecessarily allocate memory to store values that we will not read
2. Not Require us to give an upper limit to our query of primes
3. Cache the result of each calculation so we don't have to recompute them in future calls

Below, is such a function:
```clojure
(defn lazy-primes
  ([] (lazy-primes (iterate inc 2)))
  ([possible-primes]
   (let [found-prime (first possible-primes)]
     (cons found-prime
       (lazy-seq (lazy-primes (filter #(not= 0 (mod % found-prime))
                                (rest possible-primes))))))))
```

You will notice multiple parameter lists for our `lazy-primes` function, the first of which simply calls the latter. This allows us to lazily return a list of all the primes (up to the largest 64-bit integer) by providing no parameters.

The overloaded function body is where the real magic happens, though. Here, we pass in `iterate inc 2`, which returns a lazy list starting at 2 and incrementing infinitely (`2 3 4 5 6 7 8 ...`). According to the sieve algorithm, the first of these values is prime, so we return that value lazily followed by another call to our function, this time with all multiples of that discovered prime excluded from the seq.

Since we filtered out all multiples of 2, we know that the following value, 3, is also prime, so we return that value followed by another call and so on as many times as we have told our lazy sequence to iterate.

In practice, this allows us to make calls such as `(take 5 (lazy-primes))` which returns `(2 3 5 7 11)`. Not only is our implementation more succinct *and* efficient, but calling the function reads like what is actually happening. We are "taking the first 5 primes from a lazy sequence," which is much more expressive than the alternatives we discussed beforehand.
