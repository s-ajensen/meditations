---
title: "Serverside CSV"
---

We recently ran into a feature request which involved parsing and processing data incoming from a CSV file uploaded through our web interface. Thanks to being able to compile `.cljc` code to both `.cljs` and `.clj`, we were easily able to use the [csv library](https://github.com/clojure/data.csv) we decided to use to implement this functionality either on the client or the serverside—but which one was the best for our use case?

Initially we tried doing the entire job in the browser. This involved reading in the file, parsing it using the library, converting each row to an entity, and then `PUSH`ing these to the server to be added to the db, which would then need to send these back to update the view. While this approach was promising, and didn't even cause much of a performance hit for large files, we found our client code becoming bloated with application logic which didn't mesh well with our view. 

One solution could have been to put this logic in `.cljc` files which are shared between our front and backend code, but then the question arose: why are we doing this on the client in the first place if the code is already server ready? Indeed, doing this parsing on the server side would not only provide a performance increase, but it allowed us to silo our concerns into the parts of the project which made the most sense: view state on the front end, business logic on the backend.

Therefore, in the end we decided to read in the file from the browser, send it over to the client immediately, perform any preprocessing which needed to occur such as validating file type/structure, and updating the db with the requested entities all in one place.