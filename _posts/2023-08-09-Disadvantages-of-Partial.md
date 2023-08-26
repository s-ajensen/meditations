---
title: "The Disadvantages of partial"
---

Being a functional language, one of the cornerstones of Clojure is the ability to use higher-order functions, i.e., functions which define or consume other functions as parameters. For instance, I can define a function `exec` which consumes and calls a function parameter `f` like so:

```clojure
(defn exec [f args]
  (f args))
```

There are many ways in which higher-order functions can be used, and Clojure is nice enough to define common use cases for us. For instance, the `comp` function takes in a list of functions and calls each in sequence, taking in the return value from the previous call as a parameter to the next:

```clojure
(comp inc inc inc) ; returns func that increments 3x
```

Another widely used function that fits into this category is the `partial` function, which returns a function with some parameters of its first parameter filled from the get-go:

```clojure
(partial + 3)
```

The `+` function accepts 2 or more parameters. By calling partial with `+` and `3`, we get a function that calls `+` with the first parameter already set to 3; in essence, it return a function that increments the value we give it by 3.

Since we, as programmers, love to reuse code, it may then be tempting to take these composed/partial functions and assign them to some symbol like so:

```clojure
(def inc-3 (partial + 3))
(inc-3 4) ; => returns 7
```

But this tends to be an abuse of the function. See, when navigating through a project, IDE tools like Cursive rely on the definition of functions to tell use how they ought to be used via parameter lists. For instance, if I were to define a function using `defn` to do the same thing:

```clojure
(defn inc-3 [n]
  "Increments by 3"
  (+ 3 n))
```

then intellisense can recognize the `inc-3` symbol as taking in a single parameter and will display its docstring, `"Increments by 3"`. Using partial, both of these advantages are lost.

For this reason, such functions are best when delegated to the context in which they are going to be called, i.e., the parameter list of the higher-order function which will be consuming them like so:

```clojure
(map (partial + 3) [1 2 3 4])
```

In the above example, `map` requires me to give a function which it will then call on each member of the following vector. By using partial, I create a quick, disposable function which makes sense within this context, the definition of which makes less sense out of context (by `def`ing `inc-3` in some other scope).