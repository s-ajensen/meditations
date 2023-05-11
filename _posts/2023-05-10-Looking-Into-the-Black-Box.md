---
title: "Looking Into the Black Box"
---

While TDD should keep us from constantly having to fire up a debugger to observe our code running, it's sometimes nice to be able to "peek inside" our running code to see how it's behaving. Being a functional language, Clojure doesn't make this as easy as, say, C would:

```clojure
(->> my-list
  (map some-func)
  (filter another-func)
  (print)               
  (map again))          ; => ()
```

If we simply insert a print statement, our return value gets mangled... so how can we watch what the result of this filter is?

To solve this little problem of mine, I have a general purpose function that I'll usually sneak into my projects to help with this:

```clojure
(defn pr [x]
  "Print and return"
  (print x)
  x)
```

a function which takes an input value, prints it, and then immediately returns it. This way, when I call `pr` in the block up above, the `seq` from above gets passed through seamlessly.