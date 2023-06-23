---
title: "Casting Keywords"
---

One of my favorite features of Clojure is the ability to implicitly define keywords on the fly simply by using the `:` character. For instance, to define an identifier for the type of a game of tic tac toe, I can simply use the phrase `:pvp` somewhere, and I can suddenly use it as a dispatcher for a multimethod, key (or value) in a map, or many other applications. A problem arises, though, when we want to serialize these values into a format that's not EDN adjacent, like SQL. To work around this, we can easily convert our keywords to non-prefixed, string counterparts simply by saying 

```clojure
(name :some-keyword) ; => "some-keyword"
```

which can then be serialized. Whenever we want to get this value back (and its significance as a keyword), it's as easy as saying

```clojure
(keyword "some-keyword") ; => :some-keyword
```