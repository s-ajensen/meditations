---
title: "Are You Mocking Me?"
---

Something which inevitably arises when unit testing is the need for `test double` entities which emulate the behavior of real ones. Indeed, if our tests are going to validate a "unit" of code, then there will inevitably be times where we need to bracket the behavior of other functions which we are not testing, yet are still involved in our system under test.

I ran into this recently while working on the unbeatable tic-tac-toe kata and needed to test the part of my code which determined which token the AI would take on `X` or `O`.

```clojure
(defn init-game []
  (if (zero? (rand-int 2))
    (vec (flatten `(\X ~(repeat 8 nil))))
    (vec (repeat 9 nil))))
```

As you can see, we take one of two `rand-int` numbers `(0 or 1)` and either play the first move by returning a new board with an `X` or an empty board, signifying that the AI will be playing as `O`.

How can we test this, though? Every time we run a test that ensures correct output, we have a 50/50 chance of the code returning a different value.

This is where the notion of stubs comes into play. A stub is essentially a canned answer to a function call, which we predefine. So for the test which ensures the correct return value of a game where the AI plays as `X`, we might prebake the return value of `rand-int` to 0. Likewise, we might prebake the value of 1 when we want to test a game where it plays as `O`.

In Clojure, that might look like this:

```clojure
(with-stubs)
(it "returns the first move on successful roll"
  (with-redefs [rand-int (stub :mock-rand {:return 0})]
    (should= (flatten `(\X ~(repeat 8 nil))) (init-game))
    (should-have-invoked :mock-rand)))
```

First, we flag speclj to enable stubs by calling `with-stubs` and then begin our test.

Within the test, we redefine `rand-int` to always return our dummy value of 0. This way, inside our `init-game` call this function will always return 0, and thus we can actually test the part of our code that we care about: that it returns a correctly formatted list.