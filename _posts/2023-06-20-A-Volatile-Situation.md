---
title: "A Volatile Situation"
---

In my [last post](https://s-ajensen.github.io/meditations/2023/06/19/The-Library-Example.html), I talked briefly discussed the memory hierarchy which computers use to efficiently process data. In this post, I'd like to expand on this subject and talk more about the implications of this at the runtime of our programs.

When we have data which is frequently used by a program—take the sentry variable of a while loop—it will be cached *very aggressively*. For instance:

```java
boolean keepGoing = true;
while (keepGoing) {
    ...
}
```

In the above example, our `keepGoing` variable is likely stored by the computer in one of the high caches (L1-L3) or maybe even a CPU register. This makes sense, of course. If we are continuing to access a piece of data, we want it to be readily available in a fast access (high cost) part of memory.

But what are the implications of this in a multi-threaded environment? Indeed, a caveat of the caching hierarchy mentioned in the last post is that the L3 cache and above are localized to a particular CPU. Let's take the following example, which I have adapted from [a very insightful video on the JVM](https://www.youtube.com/watch?v=EFkpmFt61Jo&t=1220s):

```java
final class Example extends Thread {
  public boolean cancelled = false;

  @override
  public void run() {
    while (!cancelled) {
      Thread.sleep(10);
    }
    System.out.println("done!");
  }
}
```

The above class, when instantiated (and `.start`ed), will spawn a thread which sleeps until the shared variable,`cancelled`, is set to true—at which point is prints `done!`.

If we were to use it like so:

```java
Thread example = new Example();
example.start();

Thread.sleep(100);
example.cancelled = true;
```

We would expect the first two lines to spawn that thread, sleep for 100ms, and then print `done!`... but on many systems the above *will never exit*. Why?

Well, if the spawned thread is being processed on a different CPU (which on modern, multi-core systems is highly likely) then as a side effect of being accessed so frequently (every 10ms) it likely lives in a register (or at the very least in a cache) which is only visible to that particular CPU. When we set `cancelled` to `true` in the main thread, that value is never being access because the thread performing `run()` is using its own, cached version. From this we can see, **for memory to be shared between threads, it must be stored in a palce accessible to all of them**.

In Java, we can do this by defining our `cancelled` variable with the `@volatile` modifier which forces it to be stored in memory which is not CPU-specific (e.g. RAM). This means that it will be slightly slower to access, but it will be thread-safe:

```java
final class Example extends Thread {
  @volatile
  public boolean cancelled = false;
  ...
}
```

Clojure also provides a mechanism for defining volatile data (which, of course is inherently mutable). By defining a symbol like so:

```clojure
(def cancelled? (volatile false))
```

We create a `volatile` Java variable under the hood which can be swapped from multiple threads.