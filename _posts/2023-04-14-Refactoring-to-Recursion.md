---
title: "Refactoring to Recursion"
---

While Clojure provides a wide variety of succinct, declarative iterators, there are yet times where the most elegant way to enumerate is a good, old fashioned loop. If you take a peek into the Clojure toolbox, however, you might be surprised to see that no built in loop functions fit the traditional, imperative structure that we're used to seeing in languages like Java or C. Instead, we reformulate our loops into a recursive structure; our bound conditions become base cases and instead of incrementing variables we evaluate recursive expressions to achieve the same effect.

This may seem cumbersome at first, but if we are to write our code in proper functional style (that is, without side effects), then what good would a loop do in the first place? Any meaningful code within the loop would *necessarily* change state, as these code structures do not posess a return value. 

To further express this point, let us take a common application of traditional loops and see how we might reformulate it in a recursive manner.

###### Incrementing a value n
```
int num = 0;
for (int i = 0; i < 10; i++) {
    num += 1;
}
```

```
(def n (loop [m 0]
  (if (= m 10)
    m
    (recur (inc m)))))
```
In the above example, we bind the symbol `n` to the value of the expression returned by the loop, inside of which we bind a symbol m to 0. On the second line we define our base case, the situation which our recursion is 'tending towards,' and acts as a de facto exit condition (when m = 10). If this base condition is met, return the value of m. If not, `recur`sively call the loop again, this time with a new binding for `m`, that is, `inc m` (`m + 1`).

The `recur` method is particularly interesting since it acts as an implementation of [tail call optimization](https://en.wikipedia.org/wiki/Tail_call). Since we know that the original function will simply be returning a value from that same function with different input, we don't need to allocate a new stack frame for each function call. Thus our stack frame goes from looking like 

```
(loop 0)
(loop (loop 0))
(loop (loop (loop 0)))
...
(loop (loop (loop (loop (loop (loop (loop (loop (loop (loop 0))))))))))
10
```

to looking more like 

```
(loop 0)
(loop 1)
(loop 2)
...
(loop 10)
10
```

which keeps our allocation for it constant.