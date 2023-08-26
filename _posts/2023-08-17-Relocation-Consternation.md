---
title: "Relocation Consternation"
---

Recently, we were tasked with addressing a bug which came about *during* an internal IPM: a story was being moved from one iteration to another in Epic, our iteration planning software, and suddenly showed up in two iterations! This is never supposed to happen, so we began investigating. As it turns out, the problem arose out of a problem which I have talked about in the past: data normalization.

See, many `:story` entities can belong to a given `:iteration` entity, but their order is significant. If I fetch all entities for a given iteration simply by `:id`, I have no way of guaranteeing their order—let alone specifying it. Therefore, `:iteration` entities contain a stringified sequence of `:story` id's within them, which specifies their order. But this means that the relation between `:story` and `:iteration` has multiple sources of truth—a violation of the second normal form of our database which we were seeing the results of in the bug.

This was initially puzzling: is this an oversight in database design or intentional? To answer this question, we asked ourselves how we would go about implementing this requirement ourselves. Perhaps we could have tied the order in the sequence to the story itself. But this would mean that any time that a story was created, deleted, moved within an iteration, or moved from one iteraiton to another, the order would have to be recalculated for *all* stories associated with any iteration involved. This will produce sometimes tens or hundereds of database transactions every single time that a very small change is made. Likewise, a story can belong to an iteration and/or a milestone, the order of which is significant (but not necessarily the same) to both. This approach would simply not work. 

Given the alternative, the design decision to tie the order of stories to a given iteration makes a great deal of sense. You create multiple sources of truth, yes, but save drastically on performance and complexity of the code. Moving a story is a simple action; the code should reflect that. *There are always tradeoffs*.

Knowing this, we then had to identify our problem with respect to it.

Epic is an application designed to allow collaboration between team members seamlessly. To do this, it leverages websockets, which I've talked about in the past. When I move a story from one iteration to another, this change chould *immediately* be reflected on the others who are looking at the page. Therefore, when a story is moved from one iteration to another, a websocket call is dispatched to reassign the `:iteration` of that `:story`. But because of the numerous sources of truth for relating these entities, the story must also be removed from the `:stories` list of the iteration it came from and be added to that of the one it was moved to. However, when multiple people are moving a story at the same time, dropping it in different stories at slightly different times, the code which removes it from the list of `:stories` on the iteration will always remove it from the iteration it belonged to at the start of the drag *even though it technically belongs to another story*. This results in the story remaining in the list of two iterations, even though it technically only belongs to the one it was most recently dropped into.

If that was confusing, consider the following:

```
story1 belongs to iteration1; therefore
  - story1 stores a reference to iteration1 ("true" ownership)
  - iteration1 has a story list of [ story1 ]

I move story1 to iteration2; therefore
  - story1 redefines its reference to be iteration2 instead of iteration1
  - story1 is removed from iteration1's list, which now looks like [ ]
  - story1 is added to iteration2's list, which now looks like [ story1 ]
```

As you can see, the act of moving a story from one iteration to another involves three operations:
1. Change ref in the story from the old iteration to the new
2. Remove the story from the list of the iteration it started in
3. Add the story to the list of the iteration it's going to

Now take the following scenario, where the story is moved at the same time:

```
story1 belongs to iteration1; therefore
  - story1 stores a reference to iteration1 ("true" ownership)
  - iteration1 has a story list of [ story1 ]

I move story1 to iteration 2; therefore
  - story1 redefines its reference to be iteration2 instead of iteration1
  - story1 is removed from iteration1's list, which now looks like [ ]
  - story1 is added to iteration2's list, which now looks like [ story1 ]

Before this update is distributed, someone else moves story1 to iteration 3; therefore
  - story1 redefines its reference to be iteration 3 instead of iteration1
  - story1 is removed from iteration1's list (from which it has already been removed)
  - story1 is added to iteration3's list, which now looks like [ story1 ]
```

The end result of this is that `story1` truly belongs to `iteration3`, but since it was never removed from the list of `iteration2`—which determines how the UI renders the lists of stories—it shows as a member of both stories.

To solve this, we simply remove the story from the list of all iterations when it is moved to a new story instead of only removing it from the source iteration. This way, we guarantee that it only exists in the list of the target iteration.