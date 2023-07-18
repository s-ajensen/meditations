---
title: "Dirty Components"
---

When working with React, it's worth bearing in mind that updates to a given document are being filtered through a virtualized version of the DOM which React uses to update changes on the fly. In doing so, React is able to use an observer to listen for changes in state which then trigger updates to the actual DOM. 

Using Reagent, with atoms, the changes are batches and updates in unison when the DOM is ready to be redrawn. This allows multiple atoms to update their respective components at the same time, and keeps changes from being rendered which would never have been seen in the first place (because their state was changed again before rendering could finish). When components are in this state, i.e., updated but not rendered, we call them "dirty."

In the browser, these dirty components are updated faster than most humans can notice, but what about our tests? Most of the time we don't have a simulated browser displaying the components we're testing, we simply tell reagent to render the current state and inspect the markup. 

Suppose that I wish to test that a component was updated based on some change to an entity that I define. Since state changed, the component is now in a "dirty" state and I need to tell reagent to re-render so that it is reflected in the generated markup. For this case, reagent has a handy function called `flush` which checks all the dirty components and re-renders these in particular.

In the context of our tests, we then slip into a pattern of 

1. Updating the state
2. `flush`ing the virtual DOM
3. testing based off of this updated version