---
title: "What's on the Menu?"
---

Recently, while implementing an unbeatable tic-tac-toe algorithm, I ran into the issue of needing a flexible UI. Doing TDD, this had to begin with a test, though... but how can I unit test that the UI is displaying properly? Simply checking that the output string to the console is expected aside, I sought out to test that the relationships between the menus functioned correctly. After all, invoking commands is the true meat and potatoes of the UI in the first place.

We need to be able to accept user input and transfer the current state of the program accordingly, so I started off with my first test:

```clojure
(it "prompts the user again after no input"
    (should-be-a GameModeMenu (next-state (GameModeMenu.) nil)))
```

Here, we check that if the GameModeMenu receives bad input (`nil`), it stays in the same state. Fair enough, now we can define a type `GameModeMenu` and implement some `next-state` function that simply returns this state:

```clojure
(deftype GameModeMenu
  (next-state [] (GameModeMenu.)))
```

Green light—perfect.

Now we need to make it so that our GameModeMenu can delegate control to any one of our game types we have defined so let's write the following test:

```clojure
(it "delegates the competition type based on user input"
  (should-be-a PvPGame (next-state (GameModeMenu.) 1)))
```

With the above test, we ensure that if `1` is passed to our GameModeMenu (the first menu item), we transfer control to our PvP gametype. We can make this pass with the following:

```clojure
(deftype GameModeMenu
  (next-state [x]
    (cond
      (= 1 x)   (PvpGame.)
      :else     (GameModeMenu.))))
```

And the same can be said of other menu types:

```clojure
(it "delegates the competition type based on user input"
  (should-be-a PvPGame (next-state (GameModeMenu.) 1))
  (should-be-a ComputerPlayerMenu (next-state (GameModeMenu.) 2))
  (should-be-a AiGame (next-state (GameModeMenu.) 3))
  )
```

Which can be accomodated by the following:

```clojure
(deftype GameModeMenu
  (next-state [x]
    (cond
      (= 1 x)   (PvpGame.)
      (= 2 x)   (ComputerPlayerMenu.)
      (= 3 x)   (AiGame.)
      :else     (GameModeMenu.))))
```

We now have an extremely flexible model for menu state transfer, and each of the subsequent menu types can be defined thusly:

```clojure
(defprotocol MenuLink
  (next-state [this x]))
```

Not only this, but it becomes trivial to manage the event loop of both the menus and the games as each call to `next-state` ought to return either another menu link or a `nil` state to indicate exit. We simply render the current state, get user input, pass it as a parameter to `next-state` and repeat, exiting if we have the appropriate condition:

```clojure
(defn game-loop [state]
  (if (nil? state)
    (print "Game over!")
    (do
      (println (render state))
      (game-loop (next-state state (read-line))))))
```