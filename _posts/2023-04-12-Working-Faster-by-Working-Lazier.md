# Working *Faster* by Working *Lazier*

When we are programming, we often tend to bracket the implemenation details of data strutures such as arrays or vectors, imagining them as blocks of a given size contiguously allocated in memory. This mental model serves us well and, according to traditional storage techniques, isn't too far off from how these data are actually stored in memory.

This is why in languages like C, we have to tell the compiler what type of data we are storing in an array. For instance, when we define an array of 3, 32-bit integers as
```
int arr[3] = { 1, 2, 3 };
```
we allocate 3 * 32 = 96 bits of memory *and store the address of the first bit in `arr`*. When we wish to access data stored in any of these indices we might say `arr[1]` to access the second element, but this is really shorthand for `*(arr + 1)`[^1]. Likewise, to access the first element we would say `arr[0]`, which is shorthand for `*(arr + 0)`[^2].

This is a fantastic system, and conforms with how many of us have grown to understand and interact with our data, but it not perfect for every use case.

For instance, in many cases our data is not random but takes on some sort of pattern. If our code is to read "like well-written prose," then this pattern is to be elegantly described so an onlooker can understand what binds these values together at a glance. 

To accomplish this, we might define some sort of class that allocates values in a given range for us. We could even give the class' instance a descriptive variable name like `Range* evens = new(0, 10, 2)`. This may be sufficcient (though not necessarily preferable) for integer types, but suppose that we are generating or querying a large number of complex objects. To avoid a stack overflow we now need to store and track all of these objects on the heap, and depending on how complex our object hierarchy is, this may become burdensome. There has to be another way!

######Enter: **Lazy Loading**

In principle, lazy loading provides some sort of API which from the exterior appears to function in a fashion analagous to that above: we have some entity stored in memory and we access it via some identifier–but what happens under the hood is much more clever. Instead of generating each value and storing it in memory, we simply define an interface that calculates the value that *would* be there and return it to the user on the fly, without needlessly allocating data we may not even use.

This principle has been put into use in many languages, but to articulate this point, let us take as example a language that embraces lazy loading to the extreme due to its functional style: [Clojure](https://clojure.org/index).

If we wish to return to the above example of storing an array of integers, the language will allow us to do something similar via the expression `(def arr '(1 2 3))`, which is fine enough. But what if we were to wish to define an array of a much greater length, say, 100? It would be highly repititious to list out every number up to 100 in this way, so we are very fortunate that `Clojure.Core` defines a very convenient `range` function for us so we may simply say `(def arr (range 100))`, evaluating to a list of numbers from `0 - 99`.

But is this not simply the situation we described before where each of these numbers has now been allocated in memory and we are simply indexing them one at a time when we access them? All we did was make their instantiation more simple...

Or so it would seem! If we take a peek at the definition of `range` inside the decompiled `Clojure.Core` Java class file, we find an overloaded function, one parameter list of which seems to correspond with what we have provided: a single integer value:
```
(defn range
  ([end]
   (clojure.lang.Range/create end))
  ...)
```

If we further investigate this `clojure.lang.Range` Java class which is generated, we will observe that it does no such thing. As an implementor of  the `ISeq` interface, an instance of the [iterator pattern](https://en.wikipedia.org/wiki/Iterator_pattern) within Clojure, it simply stores a small portion of the actual range we have provided in what is referred to as a `Chunk` object (which has a default size of 32). When we make a query to the range, it iterates to that item using it's `next()` method and returns the object. If the entry we are looking for is outside the range of the generated chunk, it replaces the `Chunk` member with the next 32 members of the range and so on.

In this way, we not only are not storing more entries than we need to for an often very transient type, we also open ourselves up to possibility of having a range (and therefore any kind of iterable) which has *infinite* length. We can continue iterating by using `next()` to generate more and more chunks without having to worry about running out of memory. Indeed, looking at the docs for `range`:
```
"... When step is equal to 0, returns an infinite sequence of start."
```
Which simply continues to generate new chunks ad infinitum.

Looking into other similar functions in `Clojure.Core` we see very similar implementation. In the case of the highly-versatile `iterate` function, which takes as a parameter a function to apply to each member of a sequence, we store no direct reference to this sequence, *only a reference to the `next()` item that the function will be applied to*.

As a result of this, we only hold references to data which we are using at a given moment, generating as need be. It is a principle which has applications on all levels of a software project from memory stores to database queries, keeping load times down and memory allocations sparse.

[^1]: Read "*the value at the address 1 * 32 bits greater than the address stored in `arr`*."
[^2]: Read "*the value at the address 0 * 32 bits greater than the address stored in `arr`*" also known as "*the value at the address stored in `arr`*" (the value stored in `arr`).