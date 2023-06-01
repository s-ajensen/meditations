---
title: "Taking Command"
---

From the moment that I first was introduced to design patterns, by far one of the most-compelling to me was the command pattern. For those unfamiliar, the command pattern encapsulates a request or an action within an object. These objects are instances of types which inherit from some sort of abstract `Command` class that defines an abstract `execute` method. By encapsulating the behavior in this way, we allow different behaviors to be dispatched polymorphically and in a manner decoupled both from their sender to receiver and also from their internal implementation to the context in which they are called.

This was so compelling to me because it allows us to escape dreaded `if/else` chains that span entire screen's length:

```c++
if (a) {
  // protocol a
} else if (b) {
  // protocol b
} else if (c) {
  // protocol c
} // ... ad infinitum

// becomes
auto cmd =  cmdFactory.getCmd(...)
cmd->execute();
```

Of course, in this case our `cmdFactory` has to produce an appropriate command for us, but this can be accomplished via maps and builders without the need for burdensome `if/else` blocks.

In Clojure, a super-basic implementation of the command pattern might look something like this:

```clojure
(defn execute [cmd & args]
  (apply cmd args))
```

On the surface level, this might not look like much... why would we not simply call `cmd` with its `args` to garner the same effect? Well, in the previous C++ example we utilized the command pattern to allow for polymorphic dispatch of actions. With this foundation in Clojure, we can extend it to allow us to further decouple the specific implementation details of a function from the context in which they are called.

For the sake of example, let's generalize a bit:

```clojure
(defmulti execute (fn [x] x))

(defmethod execute :with-log [_ f args]
  (let [result (apply f args)]
    (log! result)
    result))

(defmethod execute :with-delay [_ f args]
  (delay (apply f args) 100))
```

In each of these cases, we can easily inject code to be executed around a given function without polluting the internal logic of `f` *or* the invoker of the command. 