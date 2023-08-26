---
title: "CircleCI Integration"
---

As my journey into exporting Speclj results to JUnit XML continued, I finally found myself in a position where I needed to make the generated XML consumable by CircleCI, the platform we use to run specs for some of our projects. Until this point, the XML had simply been spat out to `stdout`, and so I needed to tell CircleCi where to find the contents.

Luckily, CircleCI prodives a standard method for reading in tests. In the `config.yml` file for a given build, there is a symbol, `store_test_results`, which can specify a file which will be consumed by the CircleCI platform and formatted in their UI for users. I did this simply by specifying 

```yml
- store_test_results:
  path: ./spec_results.xml
```

in my `build` step.

But then came the problem: I designed the XML generator to spit the contents to `stdout` so that it could be consumable by both `clj` and `cljs` targets (cljs compiles to js, which can't output files, but *can* output to `stdout`). Without having to back and change any of my code, I simply changed by test runner command to send the contents of `stdout` to the file I specified previously like so:

```yml
- run: clojure -M:test:spec -f junit-xml-reporter >> ./spec_results.xml
```

and CircleCI picked up on it automatically and gave a perfectly-formatted report of the specs that were run.