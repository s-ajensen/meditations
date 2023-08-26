---
title: "Sorting Projects"
---

One of the problems which we recently encountered during development of some of our internal applications were users who were associated with a large number of projects not being able to access them easily since they were ordered in a list based on their creation date. To fix this, a feature was requested which would list such projects in order of "most recently accessed," much like a stack data structure: when a project is entered, push it to the top of the list.

One approach could have been creating a `:project/entered-on` attribute for the `:project` entity, which would then be sorted by. An unintended side effect of this approach, though, is that if multiple users are accessing a project, then one user accessing a project would push it to the top of the list for *all other users*. 

Instead of modifying `:project`, perhaps we could alter the `:user` entity by adding a list of `:project` references to it. Every time that a project is accessed, it gets moved to the top of this list. As was recently mentioned in my post on database normalization, though, this violates the "Second Normal Form" of a databse by creating multiple references to a particular entity. For instance, if I add a project, then I now have to add it to the list of all users who need to access it. This now creates more changes to the business logic of creating a project which now have to be maintained.

The solution was to create some sort of association between `:project` and `:user`, and store the attribute there. Luckily, there already existed a `:member` entity which does exactly this. We were therefore able to add a simple `:member/entered-on` field which is updated whenever a user enters a project. This approach avoids unnecessary data duplication and allows us to keep the relationship that a `:user` has with `:project`s independent of one another.