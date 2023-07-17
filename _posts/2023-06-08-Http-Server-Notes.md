---
title: "http server notes"
---

http server
Need to write code (tests) to correspond to use cases.
Use cases for http server (story) are
 - /hello returns "hello world!" type welcome screen
 - /<path> should return index.html if present, otherwise dir structure  
 - specify MIME type (Content-Type header in resp)  
 - /guess returns guessing game page (this will prompt development of POST methods  
 - /ping sleeps for 1 second then responds with current time (this will necessitate threading)

If we are writings tests for the use cases (and not some preconcieved architecture) then our first test should probably create an instance of the server and try to get a response.

This test will first fail because the classes to start the server doesn't exist.
We will create these classes
Then the test will fail because it doesn't receive any response
This will require us to go create a socket handler on the server side and give the /hello response

Gina says I shouldn't have to run my server in another environment for my tests to pass... let's break this apart.
Question: What is the simplest way to have Java process run like a service?  
Surely it's more complicated than while (true)
Answer: not that far off... while ((userInput = stdin.readLine()) != null) { }
Answer (amended): spawn a thread that listens for new connections while volatile variable is true

Threading logic:
HttpServerBuilder binds socket and returns new HttpServer
server.start() should spawn a new thread that listens for new connections
server.stop() should interrupt this thread and close the socket connection
Note: server.stop() closes the socket that was bound at server creation. This should probably be refactored so it can be restarted. Also, this means that HttpServer probably doesnât need a ref to ServerSocket, just to ConnectionListener...  

Ok let's rethink this...
Http server needs to 
 - listen on a socket for a connection    
 - according to dependency injection, server should not create this listener    
 - therefore we pass a factory to server and call method to retrieve listener (this also makes testing easier)  
 - read the contents of the file    
 - initially, I thought to pass the client to a RequestReader class, but this creates a hard dependency    
 - instead, let's just pass a BufferedReader to the RequestReader and parse the incoming data from there    
 - but how do we link the buffered reader to the client? We can create a factory to build the RequestReader based on a given client socket, which will create a reader from the input stream of the socket.    
 - now our request reader and client are sufficiently decoupled and easy to test