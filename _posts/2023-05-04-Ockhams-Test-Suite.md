---
title: "Ockham's Test Suite"
---

One of the foundational principles of Test-Driven Development is that your code grows incrementally, and thus has every nook and cranny tested by your test suite. This degree of code coverage is, indeed, important but in my eyes, the true advantage of this incremental approach lies in the fact that it forces the code to evolve to fit the 'mold' that the use cases shape. While this implies that the code will include the functionality, if the tests truly are comprehensive, *then they will also ensure that the code **does nothing more than** the required functionality for the use cases.*

This is an important distinction, because it demonstrates what it really means for a test suite to be fully comprehensive: that it not only ensures that the code meets the given requirements, but also does not include unexpected behaviors.

I ran into this recently while working through the roman numeral kata. It was my second time going through the problem, and was at a point where my code could correctly parse repeating tokens such as `III` to 3, or `XX` to 20, but now needed to make the jump to be able to recognize that `IV` means 4 and not 6 (as it would read each individual token and count it as `one` followed by `five`).

In classic TDD fashion, I asked myself, "What is the smalled about of code that I can add to pass the test case?" and I imagined what it would take to make this pass while still keeping my previous parsing code passing.

I ended up devising a scheme to check if the following token in the sequence was greater than or less than the given token. If it was greater I indicate that the current token should be subtracted, if not I indicate that it should be added.

```
(def digits {\I 1 \V 5 \X 10 \L 50 \C 100 \D 500 \M 1000})

(defn subtotal-coefficient [first second]
  (if (> second first) -1 1))

(defn as-arabic [n]
  (->> (vec n)
    (map #(digits %))
    (reduce #(+ (* (subtotal-coefficient %1 %2) %1) %2))))
```

But this now made it so that the parser could not distinguish between a smaller token adjacent to two larger ones. For instance, it read `MCM` (1900) as 2100, since it associated the `C` with the prior `M`.

Okay, back to the drawing board. Let's remedy this by starting at the end and going backwards, reversing the comparison logic. That way we're sure to pair the `C` with the `M` correctly.

```
(def digits {\I 1 \V 5 \X 10 \L 50 \C 100 \D 500 \M 1000})

(defn subtotal-coefficient [first second]
  (if (>= second first) 1 -1))

(defn as-arabic [n]
  (->> (reverse (vec n))
    (map #(digits %))
    (reduce #(+ (* (subtotal-coefficient %1 %2) %2) %1))))
```

Okay great, now the `MCM` passes, but now tests from the very beginning are failing! It's reading `III` as 1... why is that? Well, it reduces `II` down to 2, but now 2 is greater than 1 so it sets the coefficient to -1 and subtracts. This won't do.

So back to the drawing board I went. I realized that to remedy this issue, I could preemtively consolidate identical, consecutive characters like so

```
(def digits {\I 1 \V 5 \X 10 \L 50 \C 100 \D 500 \M 1000})

(defn subtotal-coefficient [first second]
  (if (>= second first) 1 -1))

(defn as-arabic [n]
  (->> (reverse (vec n))
    (map #(digits %))
    (partition-by identity)
    (map #(reduce + %))
    (reduce #(+ (* (subtotal-coefficient %1 %2) %2) %1))))
```

Now it combines `III` into 3 beforehand, and this value is still less than any token it may come across adjacent to it. This hack seemed to work, and the rest of the tests that I came up with continued to pass, but it felt wrong.

In order to arrive at this code, I had to think many steps in advance, and much more generally than was required for the specific use case of parsing `IV` correctly. Despite my extensive test suite, I did not feel confident that there wasn't unexpected behavior lying just below the surface.

I returned to the problem the next day and started totally from scratch. This time, I really emphasized, "*What is the **smallest amount of code** that I can add to make this test pass?*" and then it hit me. The smallest amount of code to correctly parse `IV` is to simply parse `IV` as 4! There are relatively few cases where a subtractive notation is used in Roman numerals (`IX`, `XL`, `CM` being a few). So I simply added these tokens to my map of digits parse it token by token. If it comes across `IV` it reads it as 4, nothing more and nothing less.
