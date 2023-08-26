---
title: "Anyone Got the Time?"
---

Inevitably, while working with entities for which their lifespan is significant, you will end up needing to keep track of when certain things happen (usually to keep track of when something was created/updated). When testing, we want the values of entities we create to be under our control, and the one thing which no one can control (no matter how much we may like to) is the passage of time.

Therefore, I find it often useful to to stub out time so that it's consistent between tests. Using the Clean Coders [c3kit](https://github.com/cleancoders/c3kit), there is a funciton which exists to grab an instance of time both in Java and JavaScript (depending on which target you're compiling to). To hold this value constant, it's sometimes nice to stub it out to its current value before running your tests like so:

```clojure
(redefs-around [time/now (stub :now (:return (time/now)))])
```

This sets the value of the `:now` stub to the current value at the start of each test and holds it constant, alleviating the need to stub it to a manufactured value which may not have the correct format for the environment you're in.