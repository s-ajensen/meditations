---
title: "Nested Nestor"
---

By far one of the most useful structures that we have at out disposal in clojure is that of the `map`:

```clojure
(def hellenes {"Ulysses"    "Ὀδυσσεύς"
               "Nestor"     "Νέστωρ"
               "Achilles"   "Ἀχιλεύς"})
```

On the surface, a very simple structure for relating key-value pairs, but which can be widely extended for greater use. For instance, if we apply this notion of a key-value pair to itself, we can nest our values and arrive at much more complex structures:

```clojure
(def homeric-figures
  {:hellenes  {"Ulysses"    "Ὀδυσσεύς"
               "Nestor"     "Νέστωρ"
               "Achilles"   "Ἀχιλεύς"}
  {:trojans   {"Hector"     "Ἕκτωρ"
               "Paris"      "Πάρις"
               "Andromache" "Ἀνδρομάχη"}}})
```

Even going as far as to nest multiple times

```clojure
(def homeric-figures
  {:hellenes  {"Ulysses"    {:greek "Ὀδυσσεύς"
                             :desc "Got lost on his way home"}
               "Nestor"     {:greek "Νέστωρ"
                             :desc "Talks too much"}
               "Achilles"   {:greek "Ἀχιλεύς"
                             :desc "Should've worn boots"}}
  {:trojans   {"Hector"     {:greek "Ἕκτωρ"
                             :desc "Heir to the throne of Troy"}
               "Paris"      {:greek "Πάρις"
                             :desc "Is tempted by Aphrodite"}
               "Andromache" {:greek "Ἀνδρομάχη"
                             :desc "Is wife to Hector"}}}})
```

Which provides a very flexible format which can easily be parsed to JSON or relational database tables.