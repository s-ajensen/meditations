# Why dosync?

While looking back at some of my [Clojure Koans](https://github.com/functional-koans/clojure-koans) (particularly, the 16th), I noticed something which my eyes seemed to have passed over the first time: a call to a function `dosync` when setting a ref. Looking at the documentation led me down a deep rabbit hole of identity in Clojure, which I'm still trying to fully wrap my head around, but what I was able to clearly make of the motivation behind it is as follows.

`Refs` in Clojure, serve the purpose of managing state which will need to be accessed from a number of threads. The canonical example of this is a bank transaction - if you have a balance of an account and multiple threads are attempting to make a transaction to it (i.e. increasing/decreasing the value), they will miscalculate the new balance if they access the balance at the same time (and thus predicate their calculations on the same value).

Imagine that I have \$10 in my account and two threads are trying to access it: one to charge \$7 to my account and another to pay me \$10. They both access the balance at the same time (thinking that I have \$10), but then finish their calculations at different times such that the first transaction sets my new balance to \$3, but immediately afterwards the second transaction sets it to \$15. 

To accomodate this, we may define the balance as a reference, and only access it within thread-safe contexts.

This is where `dosync` comes into play. By setting the values of references within a `dosync` call, the value of the reference will be locked while one thread is accessing it. If another thread attempts to set the value during this time, it will be forced to retry its operation until the `ref` is released.

Applying this principle to the previous example, while the \$7 is being charged to my account, the \$10 deposit is on hold. Then, once my balance is set to \$3, it may be processed to the correct amount: \$13.