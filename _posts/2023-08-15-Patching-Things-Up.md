---
title: "Patching Things Up"
---

As mentioned in my previous post, the first step of creating a usable diff is the generation of a sequence of the changes that a string underwent like so:

```clojure
[[:+ 1 "addition"] [:r 10 "replacement"]]
```

This sequence in and of itself isn't very useful to us, though; we need to now generate a new string which will combine the old and the new, showing in one place what changed. We can do this by establishing a few rules:

1. Unchanged text will look as it did before
2. Additions will be in-place and have a green highlight
3. Deletions will be in-place and have a red highlight
4. Modifications will be shown as a deletion of the old and an addition of the new

The process for generating this composite will be as such:

We need to generate HTML tags for each case. Case `1` will simply generate a `<p>` tag with the text contained, whereas `2-4` will generate a `<mark>` with a `color` style set appropriately. Iterating through the original string word by word, we need to identify which of these cases we are encountering. To do this, we can cross reference the index of the word we're looking at with the sequence of changes. If there is a change at this index, record it. Otherwise just generate a `<p>` with the word at that position.

This system will work in some cases, but is imperfect for those in which a contiguous stream of words were all changed. This is because when the diffing algorithm runs, it removes words from the string it is processing, so a deletion like the following:

```
0    1  2   3         4
this is the origional string
this is
```

does not produce a sequence of changes like
```
[[:- 2] [:- 3] [:- 4]]
```

as we may expect. It actually will produce the following
```
[[:- 2] [:- 2] [:- 2]]
```

as if the rest of the string were being shifted to the left to account for the word that was removed. Likewise, for a similar addition, all subsequent words are shifted to the right

To accomodate this, we must modify the string as we process it to keep the indexes aligned. When we come across a deletion, we must actually remove this word from the string we are processing, and when we add a word we must add a word in its place to offset the rest of the string.