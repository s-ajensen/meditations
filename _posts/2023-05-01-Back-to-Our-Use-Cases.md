---
title: "Back to Our Use Cases"
---

One of the fundamental mechanisms of object-oriented design is that of polymorphism: the ability of a type to act in the stead of another—more general—type. When designing systems, the customary approach to implementing this kind of behavior is to approach the problem as a kind of philosopher asking ourselves questions such as, "what is the *essence* of this *kind* of thing I am designing?" or "what degrees of generalization can I impose on this concrete type?"

Trying to model our rationalizations of the natural world in our code makes intuitive sense, but approaching our software in this fashion can often lead us away from our use cases and into a kind of idealized realm where we end up having to make compromises in our design to accomodate the translation of our ideas to their digital counterparts.

A classic example of this rears its ugly head in examples as simple as calculating the area of a simple shapes.

Say that we needed to create a library that calculates the area of circles, squares, and rectangles. To accomplish this we may wish to impose the hierarchy we know from geometry class into our code by designating our `Square` class as a more particular kind of `Rectangle`. But in order to do so, we end up with the following connundrum:

```
class Rectangle {
    float length;
    float breadth;

    float CalcArea() {
        return length * breadth;
    }
}

class Square : Rectangle {
    float CalcArea() {
        return // What do we do here?
    }
}
```

By formulating our `Square` class as a *kind* of rectangle, we imply that it has a length and breadth, which is technically true, but *by definition* we need these values to be the same. To accomodate this, do we enforce restrictions on the ability set the `length` or `breadth` members? Do we hide one but expose the other? Regardless of our approach, **we have created a much more complex problem than our use case demand because we tried to impose the hierarchy found in nature in our code.** 

This is the great temptation in OO design, to see our class hierarchies as having 1-to-1 correspondence to nature. **We have forgotten that the important features of types are not their members, but rather their methods.**

For this reason, we would be better off returning to our use case: calculating the area of some kind of shape, and isolating it via ISP. Thus our hierarchy might look something like this:

```
interface Shape {
    float CalcArea();
}

class Rectangle : Shape {
    float length;
    float breadth;

    float CalcArea() {
        return length * breadth;
    }
}

class Square : Shape {
    float size;

    float CalcArea() {
        return size * size;
    }
}
```

By designing our hierarchy for our use case—instead of envisioning ourselves as some demiurge, recreating the natural world—we only wrote as much code as we needed for the problem at hand, and have left ourselves open to further implementation of `Shape` in the future (opening O/C principle).

The extraction of the `Shape` interface here is fundamental, and speaks to our prior point: that the defining characteristics of a type are the operations that can be performed on it, not the members it contains. This is effective because inheritance, by definition, distributes the the constraints of one type to its subtypes—even when inappropriate. By decoupling the requirement to `CalcArea()` from the material conditions which would allow us do so, we break this constraint and our code is much cleaner and more-extensible.

This is the beauty of polymorphism in Clojure: the language separates these concerns for us via the `defprotocol` and `deftype` features where `protocols` allow us to define clusters of operations and `types` allow us to define structures which may be acted upon *by* these operations.

If we wanted to write an implementation similar to the above in Clojure, it might look something like this:

```
(defprotocol Shape
  (area []))

(deftype Rect [length breadth]
  Shape
  (area [] (* length breadth)))

(deftype Square [size]
  Shape
  (area [] (* size size)))
```

Which can then be polymorphically called on each type:

```
(let [shapes [(Rect. 2 3) (Square. 5)]]
  (do
    (area (first shapes))       ; => 6
    (area (last shapes))        ; => 25
    (for [s shapes] (area s)))) ; => (6 25)
```

Not only does the Clojure example contain less code, at no point were we tempted to create some vast hierarchy of shapes. We wrote no more code than we need to, and have an extensible protocol which we can implement for other types in the future.