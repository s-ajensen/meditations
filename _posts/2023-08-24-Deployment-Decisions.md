---
title: "Deployment Decisions"
---

In a recent post of mine I described my process of determining which remote repository we would host our Clojure libraries on for ease of use (and ease of deployment, as a team). The decision I landed on was ultimately [Clojars](https://clojars.org/), the defacto standard for Clojure libraries and it was now time to implement this decision.

There are two basic steps when performing such a deployment: build the `.jar` file that will contain the library and push it to the appropriate repository. Looking at guides online, I came under the impression that this was a process that for much time had no standard practice. There are a number of libraries that I found which allowed developers to package their Clojure projects such as [depstar](https://github.com/seancorfield/depstar) or leiningen, but the former of these is deprecated and the latter is a platform which is incompatible with the structure of our projects.

Looking deeper into the deprecation of depstar, I found that it was because Clojure itself now provides official tooling for packaging jars using the [tools.build](https://clojure.org/guides/tools_build) library. In order to use it properly I simply had to add the library as a dependency of a new alias, `:build`

```clojure
:aliases
 {:build {:deps {io.github.clojure/tools.build {:git/tag "TAG" :git/sha "SHA"}}
          :ns-default build}}
```

You'll notice that there is a `:ns-default` key that specifies the location of the function we want to run from the command line. This is where we put our code for actually generating the `pom.xml` file that will make our project recognizable to the repository as well as generate our jar for us. To make use of it we just define a namespace, `build`, in our project root and put something like the following inside it:

```clojure
(ns build
  (:require [clojure.tools.build.api :as b]))

(def lib 'my/lib1)
(def version (format "1.2.%s" (b/git-count-revs nil)))
(def class-dir "target/classes")
(def basis (b/create-basis {:project "deps.edn"}))
(def jar-file (format "target/%s-%s.jar" (name lib) version))

(defn clean [_]
  (b/delete {:path "target"}))

(defn jar [_]
  (b/write-pom {:class-dir class-dir
                :lib lib
                :version version
                :basis basis
                :src-dirs ["src"]})
  (b/copy-dir {:src-dirs ["src" "resources"]
               :target-dir class-dir})
  (b/jar {:class-dir class-dir
          :jar-file jar-file}))
```

As you can see here, the `jar` function creates our `pom.xml` based on parameters defined above and uses it to create the jar (which can then be removed via the `clean` function).

Its usage is as simple as running `clj -T:build jar` or `clj -T:build clean`. Then, with the proper `~/.m2/settings.xml` credentials configured for Clojars, we can simply run `mvn deploy` and our code will be sent to the repositoy.