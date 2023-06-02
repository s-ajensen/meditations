---
title: "There and Back Again"
---

There is a pattern which I have found while working through the TDD flow in Clojure which crops up in nearly every project that I start. It always starts off the same—I'm writing some code and notice some duplication and so I refactor; maybe I write a function that parameterizes some part of the existent functionality. After a few more tests, this case often becomes *even more* general and there comes a need to, say, define a `defmulti` to dispatch on different types. After yet more tests, though, there comes a point at which this structure stabilizes—however—it also becomes apparent that none of these `defmethod` calls are necessary, the existent function structure can be more-simply represented with a map—so refactor again.

What I inevitably end up with is a more or less complex map structure defined at the beginning of my file which roughly correlates to the control flow that the functions used to take. I then have a number of helper functions defined later on which walk this map and take action based on it.

Being implemented this way, it becomes trivial to add a new case as it simply involves adding a new record to the map. It's one of the ways that I've noticed TDD making my code more refined despite giving an initial impression of over-complication. It is somewhat like a mathematical proof which starts becoming strange and esoteric only to collapse in on itself in glorious fashion to a very beautiful and concise solution, or going on a grand journey and arriving home finally able to appreciate it.