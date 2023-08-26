---
title: "The Great Migration"
---

As a software system evolves, the shape of its code—and therefore the data structures it uses—inevitably changes. When such a change takes place, we find ourselves needing to look back at places where such structures were used in the past to ensure that a new, removed, or modified field does not introduce bugs. Take the following example.

Suppose that I have some code that draws a circle representing a planet:

```clojure
(def planet {:radius 5})

(draw-planet [{:keys radius}]
  (ellipse 0 0 radius radius))

(draw-planet planet)
```

But I want to introduce a new field that represents the orbial radius. To keep these from being confused I want to change the `radius` field to be `size` and introduce a new one called `orbit-radius`. If I change my data structure to be

```clojure
(def planet {:size 5 :orbit-radius 10})
```

I now need to go change my function to be 

```clojure
(draw-planet [{:keys size orbit-radius}]
  (let [x ... 
        y ...)])
        (ellipse x y size size))
```

As to not introduce a breaking change.

When we are dealing with entities that exist soley as domain objects, this works well enough as we only have to change application code. But what if we have a bunch of these `planet` entities stored in a database somewhere? We now have to change the shape of each of these entities to accomodate the new code as well.

This kind of change is known as a database migration, and is a problem that I ran into when I needed to add some new functionality to the `project` entity in our iteration planning app.

I had changed our client-side code to allow the user to add a `watcher` to a project, to receive email notifications about changes when they occur, and had even gone and hooked this up on the server backend to send the email when certain conditions are met. It worked fine on my local machine, where I was creating `project` records with the `watcher` field set, but in production, any attempt to call this code would result in null pointer exceptions since the existing projects were not updated in the db.

To accomodate this, I wrote a function which would be called before any deployment which adds a `watcher` field to every `project` in the db with a `nil` value. The value could then be optionally updated if the user wanted to take advantage of the new functionality.