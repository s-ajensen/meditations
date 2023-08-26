---
title: "Collapsing Diffs"
---

As part of the review of the diff implementation that I did for the acceptance criteria of stories in Epic, the case in which a large amount of unchanged text is left in both the prior and current strings was brought up. For instance, if there are 100 lines of text and only the 100th was changed, do we really care about seeing the unchanged 99 lines? Probably not...

The resultant markup we get from the diff generator provides us with a sequence containing a number of options:
1. Plain text for unchanged words
2. `[:mark.addition "some addition"]` for additions 
3. `[:mark.deletion "some deletion"]` for deletions

For a string with many unchanged words, we will have many contiguous items in the diff of the first type, which we wish to collapse into some token to indicate no change, e.g. `...`

To accomplish this, I created a function, which the end result will be passed to, that filters out all contiguous regions of plain text with length greater than 10 words like so:

First, we need to partition our data into meaningful chunks instead of simply a list of markup tags. If a section of this markup is a modification of some sort then it will contain a vector as seen in the second and third options mentioned above, so we can just partition each section by whether or not it contains either of these

```clojure
(defn tag? [x]
  (or (= :mark.addition (first %)) (= :mark.deletion (first %))))

(let [groups (partition-by tag? tags)]
  ...)
```

Then, we need to determine if each of these groupings is for modified or unchanged items. If the collection only contains strings then it is unchanged, otherwise it's a modification. So lets take each unchanged section, see if its length is greater than 10, and replace it with `...` if so:

```clojure
(defn tag? [x]
  (or (= :mark.addition (first %)) (= :mark.deletion (first %))))
(defn is-unchanged? [coll]
  (empty? (filter #(not (string? %)) coll)))

(->> (partition-by tag? tags)
  (map #(if (and (is-unchanged? %) (>= (count %) 10)) ["... "] %))
  (apply concat))
```

Which seems to do the job!