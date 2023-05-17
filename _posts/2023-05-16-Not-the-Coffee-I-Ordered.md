---
title: "Not the Coffee I Ordered"
---

As part of my implementation of Conway's Game of Life in Clojure, I turned to a very elegant little library called [Quil](http://quil.info/) to help me draw shapes on the screen using Clojure. By far the thing which struck me most about this library is how clean the implementation is, and how extensive and descriptive its functions are.

The starting example, drawing a radial spiral of points is as simple as

```clojure
(defn draw []
  (q/background 255)

  (q/with-translation [(/ (q/width) 2) (/ (q/height) 2)]
    (doseq [t (range 0 100 0.01)]
      (q/point (* t (q/sin t))
        (* t (q/cos t))))))

(defn -main
  [& args]
  (q/defsketch spiral
    :size [300 300]
    :draw draw))
```

Simple enough—or so I thought.

Upon evaluating the above code I ran into the following error:

```console
java.lang.NoClassDefFoundError: com/apple/eawt/QuitHandler...
```

Strange. After doing a [bit of research](https://github.com/quil/quil/issues/225), I found that Quil doesn't play well with Java versions past Java 8.

To remedy this, I went and installed [Java 8](https://github.com/quil/quil/issues/225), which was simple enough. [My IDE](https://www.jetbrains.com/idea/) is smart enough to allow me to change the Java version for execution within the UI, but what about leiningen? I need to run my specs using Speclj, and what if I want to test code in a `lein repl`?

To ameliorate this issue, I added a new field to the end of me `project.clj` file: `:java-cmd` to which I passed the install location of my JDK 8.

In my case, it looked like this:

```clojure
java-cmd "/Library/Java/JavaVirtualMachines/jdk-1.8.jdk/Contents/Home/bin/java"
```

And sure enough, evaluation presented me with the following window without any complaints:

![spiral](https://i.imgur.com/GxOYl0o.png)