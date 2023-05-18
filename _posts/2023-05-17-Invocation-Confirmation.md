---
title: "Invocation Confirmation"
---

In a [previous post](https://s-ajensen.github.io/meditations/2023/05/08/Are-You-Mocking-Me.html), I discussed the advantages of stubbing functions to return prebaked values in Clojure. Since then—having explored the Speclj library a bit more—I've learned a few new tricks to flesh out my tests.

The need for more-developed specs arose out of the implementation of Conway's Game of Life in Clojure using a graphics library called [Quil](http://quil.info/), which has a function `rect`, which I wanted to use to draw my cells.

The simplest case that I could think of was to ensure that this function is being called for each sell in my grid in the first place. But I don't want the actual implementations of this function to muddy the water of my tests—I care about whether my code does what it's supposed to, not Quil's!

To get around this, I wrote the following test

```clojure
(describe "Conway's Game of Life UI"
  (with-stubs)
  (with empty (empty-grid 5 5))

  (it "draws a rectangle for every cell in the grid"
    (with-redefs [q/rect (stub :mock-rect {:return :cell})]
      (draw-grid @empty)
      (should-have-invoked :mock-rect {:times 25}))))
```

As you can see, I mock the rect function to simply return a keyword, `cell`, as a dummy value. I can then call my `(draw-grid)` function (which ostensibly will draw the grid but, of course, hasn't been implemented yet) and check that it called `rect` for every cell with the `should-have-invoked` function.

This is great, but it—at most–would cause me to call the `rect` function for every cell in my grid. It does not, however, specify anything about the parameters which I need to pass to it, so my implementation to satisfy this test is necessarily vague:

```clojure
(defn draw-grid [grid]
  (doseq [cell grid]
    (q/rect 0 0 0 0)))
```

I need to now make sure that this function is actually receiving good input—at this points it's simply drawing 25 invisible squares.

To achieve this, I can use an even more-developed version of the `should-have-invoked` function, which will verify that it was called with specific parameters.

To start, I know that I want to draw a `rect` for each cell in my grid, so I'm going to need to pass the coordinates of each cell to this function, along with the size. To aid in this endeavor, I define a helper function called `for-cell`, which simply takes in a `grid` and some function `f`, applying the function to each cell based on its position:

```clojure
(defn for-cell [grid f]
  (let [rows      (count grid)
        cols      (get-width grid)]
    (for [x (range rows) y (range cols)]
      (f grid x y))))
```

I can then define a function `get-coords`, which I can pass to this function to fetch the coordinates of each cell:

```clojure
(defn get-coords [grid x y] [x y])
```

This allows me to now write my test which will ensure that these values are all passed to the `rect` function properly:

```clojure
(it "positions each cell with respect to its coordinate"
    (with-redefs [q/rect (stub :mock-rect { :return :cell })]
      (draw-grid @empty)
      (should-have-invoked :mock-rect { :with (for-cell @empty get-coords) } )))
```

Again, we mock `rect`, but this time we test that it was invoked with a set of inputs: the coordinates of all of our points. This will ensure that our code not only has to draw a cell for each point, but draw it in the correct position.