# Weaving Threads

While working on the [Bowling Game Kata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata) I came across a statement which, upon a moment of reflection, nearly screamed at me through the screen that *there had to be a better way*:

```
1|(it "should give the bonus for scoring a spare"
2|    (should= 16 (score-game (concat (roll (roll (roll 5) 5) 3) roll-many 17 0))))
```

Sitting face to face with this monstrosity, I tried to imagine parsing this as someone not totally familiar with these functions... not only that but I tried to imagine what parsing it in 15 minutes would be like! Something had to change.

There are, of course a number of ways in which this might be addressed. I could use the `iterate` function to call `roll` over and over again in on itself, and that might work for the two calls to `(roll [...] 5)`, but what about when 3 is passed as parameter? It wouldn't fit the same pattern.

My next thought was to wrap all of the calls within some sort of `(let ...)` or `(do ...)`; this way I can at the very least increase readability by separating each call onto a different line. This, however, became cumbersome as (avoiding side effects) I had to send the return value of each call into the next function...

I was left stumped until I remembered a particular [Clojure koan](https://github.com/functional-koans/clojure-koans) (25, to be exact) which addressed this exact issue via a subtle syntactical stunt: the threading macro `->`. By wrapping the calls within a `(-> (...))` block, Clojure will craftily pass a starting value through each function in a sequence as if a needle through layers of fabric. As the value is passed to a function, the return value is then passed to the next, and so on until the expression is fully evaluated.

This allowed me to take the unreadable "run-on sentence" above and translate it to the much more readable

```
(it "should give the bonus for scoring a spare"
    (should= 16 (score-game (-> []
                                (roll 5)
                                (roll 5)
                                (roll 3)
                                (concat (roll-many 17 0))))))
```

Now, you may be thinking to yourself, "But don't `roll` and `concat` require two arguments as seen in the original example?" And you would not be mistaken. When using the threading (first) macro[^1], it is *implied* that the first argument of each call is the value of the expression evaluated on the line above.

Seeing as Clojure treats commas as whitespace, we might make this more clear (for the purposes of this explanation) like so:

```
(it "should give the bonus for scoring a spare"
    (should= 16 (score-game (-> []
                                (roll ,,, 5)
                                (roll ,,, 5)
                                (roll ,,, 3)
                                (concat ,,, (roll-many 17 0))))))
```

Where the `,,,` represents the place that the previous expression is inserted.

So `[]` is passed as if to say `(roll [] 5)`, the return value of which is passed as the first parameter of the next call and so on.

Our refactoring journey does not end here, though. There is still some blatant code duplication here on likes 3-4, so as the cherry on top let's factor those calls out to a function. This is especially appropriate as they serve the specific purpose of representing a spare, so it's worth denoting this as

```
(defn roll-spare [rolls]
    (take 2 (iterate roll [rolls 5])))

(it "should give the bonus for scoring a spare"
    (should= 16 (score-game (-> []
                                (roll-spare)
                                (roll ,,, 3)
                                (concat ,,, (roll-many 17 0))))))
```

Which is much more descriptive.

[^1]: There is also a so-called "thread last" macro (`->>`) which serves the same purpose but inserts the value of the previous expression as the *last* parameter of the next call instead of the first.