---
title: "The Importance of Metaphors"
---

When working on very minute details in very complex system, the hardest part of effective TDD is often getting your enviroment configured correctly for the use case at hand. Indeed, the case you're developing for may require a number of components with very specific properties to be related to one another in a very specific way. 

Take as example a case where a user can assign a `tag` to a given set of items, and then select based off of that (perhaps it's some sort of social media app and the use wants to save some posts as `#travel` or `#inspirational`). In order to write the test which would cause us to develop this feature, we have to have an environment where we have some sort of made up user, post, and tag entities, which we then have to relate to another another.

So we go to creating these. In the context of our test, we make a user, give them a few fake posts and hypothetical tags and then test that they can add a tag to a post. We go and implement the code to make the test pass—great, it works.

But now we find that we need to do the same for deleting a post. Well, the setup from our last test will need to be very similar the the one we want to write—and we don't want to duplicate our code—so let's move these entities to a higher scope so we can access them easily from multiple tests.

What we will find as time goes on is that certain entities will float ever-upwards in scope as they are needed in more and more tests, not just in our original context or file or namespace, but even project-wide! We will end up with many, similar-yet-subtely-different versions of these entities and need to keep track of them.

This is where the notion of metaphors enters the scene. In the scope where we have these test entities stored, we can assign unique names to them. They can be generic such as users `Bob` and `Jane` and posts `Zoo Trip` and `Weekend Party`, but they should be memorable so it's sometimes useful to make them references to things in the real world which people will associate them with, like the characters from a popular book or movie.

The idea here is that as you work with these entities, you will begin to develop a more-and-more intimate relationship with them. Since they have memorable names, you will remember that `Bob` doesn't have a profile picture set, or that `Zoo Trip` has `1,000+` likes. As a result, when you're writing some test that needs a very specific combination of attributes, you'll be able to pick entities by name that fit the bill. It is a natural consequence of needing to keep shared entities with specific characteristics organized in the mind of the developer which, when recalled correctly, will make rooting out test setup duplication second nature.