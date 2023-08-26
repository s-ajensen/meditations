---
title: "Just a Small Hiccup"
---

Recently, while working on a complex Reagent component, I was frustrated to observe that my view was not updating when changes in state were made to a ratom which was in its scope, something like this:

```clojure
(defn my-component [some-state]
  [:p @some-state]
  [:button
    {:on-click #(reset! some-state "something else")}])

(defn other-component []
  (let [some-state (reagent/atom "something")]
    (my-component some-state)))
```

As can be seen, I define a funciton which takes in some ratom and allows us to interact with it via a button. Upon clicking this button, I expected that the ratom's value would be reset, which would then trigger a redraw of the component with the new value. This was not the case. The component was, indeed, being drawn initially with value of "something," so I knew that it wasn't an issue of being called or not. But when the button was clicked there was no change. Printing the value of the ratom from the parent component, I could even see that the ratom was changed. I was completely befuddled.

After much trial and error (and even deferring to the advice of a coworker), it was realized that the instantiation of the component was incorrect. In Reagent, a component is a function which renders some markup in the browser. When this function depends on a ratom that changes, it redraws the component. However, in order to be registered as a component (and not simply a function which returns markup), it must be enclosed in square brackets.

In the end, the fix was as simple as changing the component initialization to be

```clojure
(defn other-component []
  (let [some-state (reagent/atom "something")]
    [my-component some-state]))
```
instead of
```clojure
(defn other-component []
  (let [some-state (reagent/atom "something")]
    (my-component some-state)))
```