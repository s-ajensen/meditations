---
title: "Going With the Flow"
---

Recently, while working on my tic tac toe game, I came to the realization that I had over-engineered a fundamental part of my design—the console UI. Indeed, my initial test read something like the following:

```clojure
(it "prompts the user again after no input"
  (should-be-a MainMenu (next-state (MainMenu.) nil)))
```

Embedded in this test is the assumption that there needed to exist some type, MainMenu which should control part of the flow. Also, probably assumed, is some sort of protocol which defines `next-state`.

Coming from an OO background, this seemed an intuitive—even necessary—place to begin, but as time went on, I found the overhead to make even small changes to these `Menu` types increasingly painful.

The reason is that I was writing my test in accordance with a preconcieved design which I had come up with before writing the test. Before a single keystroke was pressed, I envisioned a system wherein the main control loop could recursively call `next-state` on one of many subtypes of `Menu`, linking them together. I had written my test for this design, not for the use case of displaying content to the user.

I would have been much better off simply starting from a much simpler premise, such as asking whether some `render` function returns the correct value:

```clojure
(it "prompts the user with initial menu options"
  (should-contain "1) New Game" (render :main)))
```

A much simpler and less-presumptuous test, indeed, and one which leads to a much simpler abstraction, a `defmulti render` for different menus than this protocol/type business. 