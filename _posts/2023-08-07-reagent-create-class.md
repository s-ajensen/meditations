---
title: "Reagent create-class"
---

As I described in a recent post, the simplest way to create a reagent component is to simply define a func that returns some hiccup and call it using `[square brackets]`. This will tell reagent that any ratoms consumed/declared in its scope to trigger redraws of that portion of the DOM when changed. But ReactJs provides much more functionality than this natively. For instance, it's often necessary to trigger functions when the component mounts or changes, such as fetching data from an API that is local to that component, or resizing a component on an update.

To accomplish this in reagent, we can call the `reagent/create-class` function which exposes these react triggers to us on the Clojure-side.

Take the example just given of resizing a component when it's updated. To create a component that *react*s in this way, we can do it like so:

```clojure
(reagent/create-class 
  {:component-did-mount  resize-fn
   :component-did-update resize-fn
   :reagent-render       (fn [] [:hiccup-here])})
```

You'll notice that in defining our component this way, the markup which we would have simply returned from the function gets passed as the `:reagent-render` attribute in the map we pass, as well as the mount/update functions we wish to specify. This way, there are a number of tools which we can use for use cases of increasing complexity:

1. Need to return markup?
then create a fn that returns hiccup
2. Need to return markup reactive to ratom changes?
then create a fn that returns hiccup and scoped some ratom (be sure to call it with `[]`)
3. Need to return some markup with above attributes, that also calls functions when mounting and updating?
then call `reagent/create-class` with appropriate map parameters