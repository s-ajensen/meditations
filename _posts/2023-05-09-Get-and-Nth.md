---
title: "get and nth"
---

As I've continued to work in Clojure, one thing which has always eluded me was the different (yet similar) types of sequences and their corresponding querying functions. One such instance that I've addressed in the past is the subtle differences between lists and vectors—both of which have unique applications, and this is the distinction which I would like to address here.

It began while trying to decide how to extract a particular value out of a vector I had. In a language like C, I might think of my structure as an array and make a query to the value at a given index like so:

```c
int arr[5] = { 1 2 3 4 5 };
arr[1];     // returns 2
```

But in Clojure, there is no such syntax. Rather, there is a set of functions available for collecting such a value: `get` and `nth`, and they work quite similarly:

```clojure
(let [arr [ 1 2 3 4 5 ]]
  (get arr 1)   ; returns 2
  (nth arr 1))  ; also returns 2
```

Both of these functions even allow for optional parameters that supply a prebaked value when a given item is not found:

```clojure
(let [arr [ 1 2 3 4 5 ]]
  (get arr 6 "Nothing here!")   ; returns "Nothing here!"
  (nth arr 6 "Nothing here!"))  ; also returns "Nothing here!"
```

So then what is the difference? Is this some strange artifact of opposing parties in the Clojure design? Is this a mistake? Not at all...

The answer to this question came to me when querying a particular value from a map:

```clojure
(let [my-map {1 "one" 2 "two"}]
  (get my-map 1)    ; "one"
  (nth my-map 1))   ; UnsupportedOperationException
```

Of course! `get` is defined to collect items from associative structures—it maps a key to a value whereas `nth` returns a certain value in a given sequence. A map is associative, but not sequential, so we can only use `get` on it. Vectors, though, are both sequential and associative, so they both work. 

Both of these being the case, it would seem to follow that `nth` would work for lists but not `get`, as they are linked lists, sequential (and not associative).

Sure enough, if we try this

``` clojure
(let [my-list '( 1 2 3 4 5 )]
  (get my-list 1)   ; nil
  (nth my-list 1))  ; 2
```

We get nil for `get` and the expected value for `nth`.