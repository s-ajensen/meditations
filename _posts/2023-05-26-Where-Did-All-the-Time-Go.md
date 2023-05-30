---
title: "Where Did All the Time Go?"
---

A common use case–especially in programs that operate over a network or with a database—is the need to calculate the current time. I, personally, ran into this recently while working with a database that needed to fetch the most recent move made in a game of tic tac toe.

While Clojrue certainly is a full-fledged language with all the bells and whistles that most other languages (or at the very lease, Java) have to offer, getting and modifying the time proved to be somewhat esoteric.

There are a number of libraries that will perform these tasks, but wanting to keep my project as slim as possible, I opted to use the built-in `java.util.Date` class, which was as simple as 

```clojure
(defn now [] (.getTime (Date.)))
```

The above instantiates the `Date` class and calls the `.getTime` method of it.

This is great because this type has all sorts of functions to format and redefine the saved time, and since we set it to a variable, `now`, it will stay the same across the execution of the program...

But what if we wanted to change this value? I ran into this while needing to spoof the time for tests as well as for when an old game is being resumed.

Without using atoms and the like, Clojure doesn't have mutable state, so how can I redefine this symbol? Well, being a Java object under the hood, a `Date` will actually allow us to mutate its state by calling the `setTime` method like so

```clojure
(.setTime now 0)
=> nil
```

You will notice that the call to `setTime` has no return value, but if we evaluate `now`, we'll see that it's been set to the "beginning of time"
```clojure
(.toString now)
=> "January 1st, 1970 at 00:00:00 UTC"
```