---
title: "Reducing Requirements"
---

In Clojure, when we want to use some code that lives in another namespace, we can do the following quite simply:

```clojure
(ns my.ns
  (require [clojure.string :refer :all]))
```

This brings all the code from `clojure.string` into the `my.ns` namespace as a reference. This allows us to use the code within as if it were defined in this very file, and makes sense if we are using many functions defined within `clojure.string`. If we only want to use a few, we can import specific functions like so:

```clojure
(ns my.ns
  (require [clojure.string :refer [split]]))
```

Which will only import the the `split` function. Or we could say

```clojure
(ns my.ns
  (require [clojure.string :as s]))
```

Which imports `clojure.string` with a signifier, `s`, which we can use whenever we want to use one of its functions.

A somewhat loquacious problem arises, though, when we are importing a number of functions from the same parent package. Take the following for example:

```clojure
(ns my.ns
  (require
    [clojure.string :refer :all]
    [clojure.set :refer :all]
    [clojure.data :refer :all]
    [clojure.pprint :refer :all]
))
```

We end up having to specify the `clojure` super namespace over and over again. To ameliorate this, we can prefix our requirements like so

```clojure
(ns my.ns
  (require `(clojure string set data pprint)))
```

A much more readable and efficient alternative.