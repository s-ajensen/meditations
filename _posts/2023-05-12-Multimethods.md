---
title: "Multimethods"
---

While recently researching how the Liskov Substitution Principle can be formulated within a functional programming paradigm, I looked a bit deeper into `multimethods` in Clojure. The premise of these methods is essentially that we may have a function with a single signature that polymorphically dispatches different implementations based on a given key:

```clojure
(defmulti greet (fn [language] language))

(defmethod greet :english [_]
  (str "Hello!"))

(defmethod greet :greek [_]
  (str "Γεια!"))
```

This allows us to iterate over sequences, calling each implementation seamlessly:

```clojure
(def friends { { :name "John"       :language :english }
               { :name "Σταύρος"    :language :greek} })

(for [f friends] (str (f :name) " says " (f :language))) ;=> ("John says Hello!" "Σταύρος says Γεια!")
```

Which outputs

```clojure
"Hello!"
"Γεια!"
```
