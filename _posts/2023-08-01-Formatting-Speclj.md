---
title: "Formatting Speclj"
---

In my previous post, I described the format of a standard JUnit XML test export file. The reason that I had to do this research in the first place was as a result of our team needing to be able to export the specs from our Clojure test framework, Speclj, to this format for consumption by CircleCI, a popular CI/CD platform (as well as any other platform which understands Junit XML, of which there are many). In implementing this formatter, my task then became atriculating the results of our specs in this "Javaish" structure.

See, the structure of the JUnit XML format is predicated upon an OO paradigm which assumes that each test exists as a method of a test class, which correspond 1-1 with the `<testcase>` and `<testsuite>` tags, respectively. In our Clojure tests, though, this is not the case. Every test is a function, and every group of tests is, itself, a function.

For instance, instead of creating such a test class and giving it methods for each characteristic, we would call a function, `describe`, with a function parameter `it` to describe the test:

```clojure
(describe "The test suite"
  (it "the test"))
```

This appears to be analagous enough. In this case, why not simply make calls to `describe` correspond to a `<testsuite>` tag and calls to `it` correspond to a `<testcase>` one? This would be appropriate if not for the fact that `Speclj` allows us to group our tests with an arbitrary number of layers of specificity. For instance, we may have a call to `describe` within another `describe` call, to designate a section of tests which are grouped together in terms of functionality. Likewise, there are other grouping mechanisms such as `context` which do the same thing.

I, therefore, had to decide which function calls would be considered "first class citizens," i.e., what would be considered a `<testsuite>` and what would be consideres a `<testcase>`. One option would be to make *all* `describe` calls which contain individual characteristics produce a `<testsuite>` tag. In a project with many layers this would result in a great number of `<testsuite>` tags being generated which, in principle, isn't too much of an issue, except for the fact that we lose the organizational advantage they provide since they are all on the same "level" of the XML hierarchy. In this case

```clojure
(describe "describe 1"
  (it "characteristic 1")
  
  (describe "describe 2"
    (it "characteristic 2")))
```

`describe 1` and `describe 2` would produce XML tags like so

```xml
<testsuites>
  <testsuite name="describe 1">
    ...
  </testsuite>
  <testsuite name="describe 2">
    ...
  </testsuite>
</testsuites>
```

and the hierarchical structure is lost. This is a problem because the relationship of nested contexts tells the story of what the test is doing. It's common to see something like the following

```clojure
(describe "Websocket endpoint"
  (describe "handles valid input"
    (it "with single param"
      ...)
    (it "with multiple params"
      ...)))
```

where the description of the context, e.g., "with a single param", is only meaningful when read as a sentence produced by its context within its parent `describe` calls: "Websocket endpoint handles valid input with single param."

To maintain this structure, I decided that *only top level* `describe` calls would qualify as a `<testsuite>`, whereas lower level ones would simply be appended to the name of their sub-characteristics. This produces an XML file like so

```xml
<testsuites>
  <testsuite name="Websocket endpoint">
    <testcase name="handles valid input with single param"></testcase>
    <testcase name="handles valid input with multiple params"></testcase>
  </testsuite>
</testsuites>
```

which introduces some duplication in the naming scheme of the test cases, but maintains the meaningfulness of the Speclj structure whilst conforming to the requirements of the JUnit XML spec.