---
title: "The Head With No Body"
---

At the tail end of the development of my HTTP server, I ran into an issue while testing my POST request handler: there was no request body! I went back and forth for hours between the Chrome network tab and my `RequestReader` class that I had written, and no matter how much Chrome assured me that the request did, indeed, have a body there was none to be found. The `BufferedReader` which read in bytes from the client never saw anything...

Upon further investigation of my tests, I found that the reader loop I had written for my `GET` requests (which worked like a charm) stopped reading once it ran into a double carriage return (`\r\n\r\n`âtwo newlines), which signified the end of the request header. What I soon realized was that as a side effect of this, the reader stopped taking in bytes once it finished the header and closed the stream, leaving the body to be thrown away!

Okay, I told myself, I'll keep reading until I get `null` from the stream. That way I can get both the header and the body... but what I soon realized was that a `BufferedReader` based on the `InputStream` of a socket will not return `null` until the socket is closed. But how do I know to close the socket if I don't know that I'm done reading? I found myself in a particularly nasty catch-22.

But then I began investigating the contents of the request a bit deeper... there was a sneaky little header I found called `Content-Length` which signified the length of the body of the request in bytes. What I could do is read line by line until I get to this header, read in the length (in bytes), and then read until I reach a double carriage return (the end of the header). Then, I can read *exactly* the `Content-Length` worth of bytes from the stream to get the content and append that to my request message.

Sure enough, after doing this the request body was fed through the input stream character by character and I was able to successfully process `POST` requests!