---
title: "What is Life?"
---

While looking back on my implementation of [Conway's Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life), I realized a number of apparent limitations with my implementation. In this article, I would like to draw attention to them as well as possible solutions to them.

For one, the implementation depended upon an explicit, finite number of possible spaces in which cells may subsist. As downside of this approach is, of course, that we are limited in the number of cells that we can operate with. However, another—more subtle—disadvantage is that it means that we must treat the edges of the board as ever-dead cells for the calculation of our next state.

The implementation of this special case can be solved by simply storing a `seq` of the alive cells and calculating neighbors with respect to the other members.

How, then, might we calculate neighbors? After all, the original implementation drew a circle of sorts around a given point and determined how many cells in that circle were alive. But with our state being a `seq` of live cells instead of a lattice, how are we do perform such a feat?

Well, we can simply calculate the distance between the given point and the prospective neighbor in the list. At the furthest, a neighbor will be $\sqrt{1^2 + 1^2} = \sqrt{2} \approx 1.5$ (which is less than the shortest distance to a cell that is *not* a neighbor: 2), so we can iterate over the `seq` returning those points whose distance is < 1.5.