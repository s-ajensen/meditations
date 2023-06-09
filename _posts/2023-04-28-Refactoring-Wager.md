---
title: "The Refactorer's Wager"
---

A fundamental step in the TDD process is the `refactoring` stage, where we look at the code which we wrote (which should be the smallest amount of code to make the test pass), and address instances of duplication, run-on functions, etc. During this stage, we will may come across instances such as the one below:

```clojure
(defn calc-tip [total percent] 
  (let [new-total (+ total (* total (/ percent 100)))]
    (print \$ (format "%.2f" new-total))))
```

The above function really does two things, it calculates the tip and it formats and prints it. As such, it has more than one responsibility and violates the Single Responsibility Principle.

It is in situations such as these where we find ourselves in what I refer to as the Refactorer's Wager (which might remind you of a similar one posed by a 17th century mathematician).

Essentially, if code can be extracted from a function and it needs to be refactored, then the code is now cleaner, whereas if it needs refactored and isn't extracted then the code stays dirty. If it didn't *necessarily* need to be refactored, or if there was some deliberation about whether or not it could be isolated and it is not, it's hard to say whether it should be until future use cases arise, but it does no real harm to extract it, as that function/class can be referenced in the place it was refactored from, and if it must be bound to the function calls around it then it can be structured within a strategy/facade pattern.

Therefore, when given the option to extract code and keep functions exceedingly short, I believe it is best to do so.