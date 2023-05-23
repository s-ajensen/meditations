---
title: "Without Strings?"
---

One of the recent pitfalls that I ran into recently was testing a block of code which needed to display content to the user via the console, something like this:

```clojure
(defn print-state [state]
  (println (as-string state)))
```

My string formatting was all taken care of within the `as-string` function, but if we are doing true TDD, then there needs to be a test which prompts us to actually display our content to the user. 

One possible solution to this might be to simply stub `println`, ensuring that it was invoked with the string that we intened to print, but there's actually a way we can accomplish the task at hand without having to redefine any functions: `with-out-str` ("with output string", not "without string").

Very conveniently, Clojure comes pre-packaged with a function which will route `out` (which is currently pointed to our console), to a Java StringWriter object, which we get to read from with the call.

Knowing this, it's as simple as saying

```clojure
(it "prints the state to the user"
  (should= expected (with-out-str (print-state state))))
```

and our test does what we need it to.