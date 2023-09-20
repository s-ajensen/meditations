---
title: "Private Property"
---

Coming from the OO world, the notion of 'private functions' was something I was familiar with: an organizational tool that ensures that symbols are localized to a particular namespace. If my namespace is expected to be consumed in some context and I need to break out the internal logic without exposing it, I may write the function that contains that logic in a private function. It's not shipped as a function to be used as part of my API, but it is still needed by those functions which *are* provided by it.

In Clojure, this can be accomplished simply by the `defn-` macro, which will localize a given function to the ns it's defined in:

```clojure
(ns my.namespace)

; only accessible within my.namespace
(defn- my-func []
  (prn "do something"))
```

But there are exceptional cases where we may want to use these functions outside of this context. After all, one of the great advantages of the Clojure runtime is that if there is a live application which needs maintenance, it's often as simple as firing up a repl and interfacing with it live. To do the things you need to in this scenario, you will likely end up using your functions in ways which you hadn't originally intended...

Simply trying to call a private function from another ns will result in an `IllegalStateException`, but we can bind a var to evaluate to the value of the symbol by writing `((var my.namespace/my-func) args)` or—using the var reader macro—`(#'my.namespace/my-func args)`. This takes advantage of a sort of trick wherein the compiler will evaluate the var to the literal value of what it finds at `my.namespace/my-func`, which effectively allows us to use it in the current namespace—very useful when using internal library funcs in a repl!