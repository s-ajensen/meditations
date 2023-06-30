---
title: "Claim Your Inheritance"
---

Inheritance is by far one of the most extensively used OOP principles, and for good reason. It allows us to create hierarchies and take advantage of polymorphic behavior by defining "is a" relationships between classes. This allows us to take a grouping of objects and treat them all as members of a classification of things, the behavior of which we can predict because of their shared inheritance.

However, there is a temptation when using inheritance to us it as a way to inexpensively add functionality to a class. Think about it; when one class inherits from another, it takes in all of the (protected/private) fields and methods into itself and can use them at its own discretion. As a result of this, if I have two classes which need to implement similar functionality, I *could* simply make them inherit from the same supertype which implements that functionality:

```java
class Page {
    String buildBoilerplate() {
        return "<DOCTYPE! html><html>..."
    }
}

class SomePage extends Page { }
class OtherPage extends Page { }
```

As you can see, by extending `Page`, its subtypes can take advantage of this shared code. But this decision is not without its costs...

We can inherit from numerous interfaces in Java, but can only do so from *one* class. This makes inheriting from a type more-concrete than an interface a decision which should be made with a great deal of care. When we inherit, we take in the shared implementation details of the super type—yes—but in doing so we lock ourselves in to *being that type forever*, and we cannot inherit from another class later down the line if we want to continue to pull in functionality from other classes. Not only that, but both your superclass and your subclass are now harder to change because of the hard dependency between them.

This problem becomes particularly tricky because we have the tendency to want to design our class hierarchies around categorical hierarchies found in nature. For instance `Animal` could be a superclass of `Cat`. But this smells of "architecting," and often times those "natural" hierarchical relationships won't be amenable to our use cases.

Say that we wanted to add the ability to save `SomePage` from the previous example to the disk, but didn't need the same functionality for `OtherPage`. We have a class elsewhere in our system that implements writing a `String` to the disk, `FileWriter`. We can't inherit from it since we already inherit from `Page`, but that's fine because it doesn't make sense to inherit from it, *we're just borrowing code from it.*

But then the question arises, we were just "borrowing code" from `Page` as well, but because of our preconcieved notion of how things ought to be classified, we locked ourselves into an inheritance relationship which could have easily been solved by composition.

Indeed, the relationships we have established here are a classic violation of DIP, as we are depending on a concrete class. When confronted with these situations we're much better off composing with some abstractions which can be super to the class we want to borrow code from. This way we break strong dependencies, and don't lock ourselves into decisions we can't easily take back.