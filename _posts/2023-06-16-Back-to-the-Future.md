---
title: "Back to the Future"
---

In my last post, I showed how a promise could be constructed such that it performed an asynchronous task on another thread, and the program halted until it was performed. This particular use case for promises actually has a built-in implementation in the `future` method:

```clojure
(def f (future
  ; go fetch a large number of users from a database
))

(deref f) ; hangs until expression is delivered
```

With promises, we had to manually `deliver` the return value from the function to the symbol, in this case, the last value which is returned from  the call to `future` is automatically set to f, and the program will wait until such a delivery before dereferencing its value. Indeed, a nicer shorthand to what we did prior!