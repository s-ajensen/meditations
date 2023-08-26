---
title: "Handling Events"
---

One of the great advantages of using JavaScript on the web is its *asynchronous* nature, i.e., executing a js function will not 'block' other processes from running, it will execute them concurrently. As a side-effect, the handling of user input is performed based on triggering and responding to *events*.

Configuring the handling of these events involves telling a DOM element to 'listen' for a certain kind of thing to happen, executing some function as a result. We do this every time that we add an `onclick` attribute to a `<button />`, or `onchange` for `<select />` tags. This tells the browser to listen for an `onclick` event and trigger the elements which are listening for it to respond accordingly. These listeners are built into tags, but we can also add custom event listeners to be handled in any number of ways.

It was this situation I found myself in whilst trying to implement hotkeys for our in-house story estimation software, Poker. Users wanted to be able to use the keyboard to select different estimates, and this meant that I had to listen to those events when appropriate.

For the sake of keeping code organized, I didn't want to attach these event listeners to the root DOM element, I only wanted to attach them to the div in which they'd be used. To accomplish this, I converted the reagent component which was responsible for rendering the poker table from simply returning a reactive component using `[square brackets]` to a definition involving `reagent/create-class`. This allowed me to call the js function, `addListener`, for the `keydown` event when `:component-did-mount`. This way when the component is successfully added to the page (and only then), a function can be triggered.

This function—which takes the event as a parameter—could then be defined in my `hotkeys` namespace, which maps the `keyCode` attribute of the event to the appropriate action: moving left or right, or selecting an estimate.