---
title: "Depends on Datomic"
---

Today I was tasked with transitioning our database client, [Datomic Pro](https://www.datomic.com/) to the now-free package which is known as [Datomic Peers](https://docs.datomic.com/pro/peer/peer-getting-started.html). Simple enough, I thought; I'll go into `deps.edn` and change the dependency from `datomic/pro` to `datomic/peer`.

This simplistic view was, of course, immediately shattered when it was revealed that the version of `datomic/pro` that was being used comes from a proprietary repository. Indeed, breaking the dependency on this repo was the intent behind this transition.

"Okay, I'll pull `datomic/peer` from Maven Central then, which will break the dependency." This worked! That is, until I ran our backend locally and found that the versions served by Maven only work for Java 11+. Looking at the `readme` for the project I was working on, we have a strong requirement on Java 8, but that requirement is based on `datomic/pro` demanding it. Since we are no longer depending on `pro`, we can begin the transition to the latest LTS verion—Java 17.

After configuring my local system to use the new version of Java (which, thankfully, I had installed already), the backend ran no problem! Now all that's left to do is update the Java version on the image for our production environments... but that's an issue to address sometime before next release.