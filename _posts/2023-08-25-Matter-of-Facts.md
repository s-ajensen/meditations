---
title: "Matter of Fact(s)"
---

> **Fact**
> *from Latin 'factum,' neuter past participle of facere ‘do’*

---

When we traditionally think of the model of a database, whether that be a file on a disk, a series of related tables, some hierarchy of documents, etc., we usually imagine it as some sort of collection of *things* (usually related *things*) which have attributes. As we interact with the database these *things* and their attributes change and we are left with looking at and modifying their most recent state. But when we think about why we would look at or modify one of these *things*, it always boils back down to the need to make some sort of *decision*. When I look in my table of users to find a particular person's email address, I'm doing so because I'm making a *decision* in my code of who to send an email to. When I query their name, I'm doing so because I need to make a *decision* of what to display on the home page.

Well, much like in real life, we want the decisions we make in code to be predicated on things that are stable, unchanging. When I proclaim that the sun will rise tomorrow morning, it's because I am convinced that the heliocentric model (of the solar system, not the universe) is true and unchanging. If this were not so certain, then I would be far less justified in deciding to make that statement.

This is one of the key principles of [a great talk by Rich Hickey](https://youtu.be/9TYfcyvSpEQ?si=j5N9G1Jp3tYWG7Nf) on the principles underlying [datomic](https://www.datomic.com/), a popular Clojure database which he designed. In this talk, Rich describes what he calls a "basis," i.e., something which we consider to be stable enough to predicate our decision making process on. In the above example, my basis for claiming that the sun will rise tomorrow morning is a model of the solar system based on centuries of observation and scientific reinforcement (as well as my own experience, probably).

Consider, then, the model that was described earlier of a database as a collection of *things* with slots which we read data from and swap data in and out of. The content of our database is the basis for much of our decision making in our software (e.g. "who do I send the email to?"). But according to the principle that our basis should be consistent, is it a good one? No. Even with a single person (me) accessing the database, if I ask the same question, "Who do I send the email to?" twice, I'm liable to get two completely different answers—and this is by design. In a world where storing an email address that's fallen out of use is a fiscially meaningful decision, it makes sense to reuse that memory to hold the new value. But disk space and memory are *cheap*.

It is for this reason that Rich proposes that we design our database not to hold *things*, but rather *facts*. Facts, from the past participle of facere 'do,' literally means "what was done." The keyword to recognize here is that 'done' is in the past tense, it implies temporal significance to the truth of a fact. If I say, "the cat is asleep," this is a matter of fact as it implies that "there was a point in time at which the cat fell asleep." Even if the cat wakes up, this is still true. If I say, "the email address is joe@acme.co," then that can be expressed as a fact which says, "the email address was set to joe@acme.co." If I wish to look at what the email address is, I simply have to ask the database, "what is the most recent fact concerning what the email address was set to?" and return that value. Importantly, if the value changes to bob@acme.co, the database still remembers that at one point the value was joe@acme.co, so if I need to predicate a decision based on a previous value, it's as simple as specifying a timestamp. In this way, we can *base* our decisions on facts that we know cannot change, instead of transient *things*.