---
title: Functional Flyweights
---

The flyweight is an incredibly useful pattern which we can use as a way to ensure that we are not storing more memory than we need to. The traditional strategy when implementing it is to take note of data which is common to a pool of objects, and extract it to some sort of data store, simply referring to this object instead of duplicating it over and over again in each object.

But when it comes to implementing such a pattern in an OO sense, we end up needing to create factories (which appear to create new objects, but really just refer to the cached ones) for our flyweights and pass these factories to where we wish to instantiate our objects. The overhead is much greater than the alternative in Clojure:

If I wanted to cache a given value in Clojure, all that I need to do is the following 

```clojure
(memoize (func-that-returns-flyweight))
```

Now, anytime that I call the function which returns the flyweight object, it simply returns the cached value instead of evaluating (and possibly storing) the entire verion form scratch.