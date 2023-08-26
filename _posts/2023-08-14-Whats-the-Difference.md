---
title: "What's the Difference?"
---

As developers, one of the tools which we (hopefully) use on a daily basis is Git. One of the great advantages of using such a version control system is being able to walk through the changes in our codebase one by one and see how one state differs from another via commit history. One of the great features of using GitHub with Git, is being able to see a file-by-file diff of changes like the example below:

![diff](https://www.matthewsetter.com/images/posts/github-diff.png)

As you can see, additions are marked in green, deletions in red, and the replacement of one block with another is a combination of these. One of the user requests we had in our story boarding application, Epic, was to implement a similar functionality for acceptance criteria. To do this, I would have to calculate the diff between two strings, which consists of a number of changes either additions, deletions, or replacements and then rebuild the original string taking these into account.

(Not so) handily, `clojure.data` has a diff function built in which provides this functionality. Given so lists, it compares each and returns a list of items that are (1) only in the first string (2) only in the second string and (3) in both. This was somewhat useful, but failed to account for the case in which some text was shifted left or right in the list of chars effectively. Likewise, the length of all three resultant lists were different, and did not correspond to one another without having to align them so I went looking at third party libraries.

There were a number of options which I found, namely [differ](https://github.com/robinheghan/differ), [diff-cljs](https://github.com/wagjo/diff-cljs), and the option I eventually went with, [editscript](https://github.com/juji-io/editscript).

A great account of the differences between these libraries in terms of performance and granularity can be found [here](https://juji.io/blog/comparing-clojure-diff-libraries/), but seeing as the size of the acceptance criteria are not usually very large, this was a secondary concern to their usability and accuracy.

The reason that I ended up going with editscript was twofold, the most important of which was its usability. The output of the editscript diff is a vec of "changes" in the order in which they were found. The format of these was very minimal: `[[:+ 0 "some"] [:+ 1 "addition"] [:r 10 "replacement"]]`, which made it easy to iterate through these with a multimethod dispatching on the first value of the seq. Although that was my primary concern, it also performed very highly on (self reported) benchmarks, and never broke a sweat even with tests I gave it with very long strings.