---
title: "You Spin Me Round (Like a Spinner)"
---

Being as JavaScript is executed asynchronously in the web browser, it is often that we need to wait for one process to finish before displaying the result. Perhaps the most common use case for this is when we are fetching something from the database and need to await the response from the server over the network. When this occurrs, we could simply leave our users with blank content, wondering what in the world is happening, but this is bad UX. Instead, it's preferable to indicate in some way that we are waiting one something, and that the thing they requested will be there soon, usually via some kind of spinner

![spinner](https://powerusers.microsoft.com/t5/image/serverpage/image-id/118082i204C32E01666789C/image-size/large/is-moderation-mode/true?v=v2&px=999)

But how do we know when to display this spinner, and how to we take it away once our data has loaded? A pattern I frequently find myself using in reagent is to define such functionality within a component that defines a ratom assigned to the payload of some request. The ratom will be nil until the network request returns our data, at which point reagent will redraw the component. Therefore, we can simply introduce a condition to render the spinner animation when the ratom returns `nil` and the intended content once it's populated:

```clojure
(defn hydrated-component [content]
  (if (nil? @content)
    [display-spinner]
    [display-content @content]))
```