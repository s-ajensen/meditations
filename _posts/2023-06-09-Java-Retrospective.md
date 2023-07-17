---
title: java retrospective
---

Of course, one of the most-notorious complaints that people have about Java is the sheer amount of boilerplate that's involved in even simple tasks. Take a `Hello, World!` program even, we end up writing a ton of code just to print a string:
```java
public static void main(String[] args) {
  System.out.println("Hello, World!");
}
```
Returning to Java after probably 4 years since using it, I both resonate with and resent this complaint. Having been working in Clojure for the past few months, I've grown accustomed to being able to have a thought and to see it in code after just a moment or two. It's an intensely forgiving, flexible, and versatile language, and I don't find myself writing more than I mean to say. But a caveat of this is that âespecially as a more fresh functional programmerâis that sometimes *I should mean more with what code I write*.

Looking at Java code, it's an immediate knee-jerk reaction for me to recognize DI violations, or when an interface is being abused and should be broken up. This is not necessarily the case when I'm writing Clojure, and so my abstractions can end up being sloppier since the language is more forgiving.

This advantage of Java should be held in contrast with its verbosity, though. Indeed, I end up being much stricter about separating my concerns in Java (due in one sense to my past experience with it, and in another sense its tight structure), but looking back on the code for this http server I'm reminded of my biggest source of frustration with Java, that I have a great developer experience while writing it, separating concerns and writing interfaces, but a terrible experience while reading it after the fact. With proper naming practices, one can basically tell what a given module is doing, but as someone who likes to have a fleshed out mental map of the system they're looking at (as they're looking at it) I find myself needing to navigate into the source files of these modules and remember what they did as I go back to their context. Clojure simply fits so much more on the screen at a time.