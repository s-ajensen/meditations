---
title: "Beck's List"
---

Inevitably—while working in TDD—we find ourselves in a position where we are simply stuck. We have some functionality that needs to be implemented, but in order to do so there is no minute, incremental change which we can write a test for. After writing (and subsequently rewriting) a section of code five or six times I found myself in this very position, asking myself, "what is to be done?"

For inspiration, I referred back to my very first introduction to TDD: Kent Beck's *Test Driven Development: By Example*. 

In the first chapter of this book he outlines his process whereby he employs a kind of top-down approach for a feature. He begins with a high-level requirement, which would require a great deal of code, and asks a question:

***"What are the necessary pre-conditions for this to be implemented?"***

And adds the answer to this question to the top of a to-do list. He then repeats the process until the top of the list has something incremental enough that it can be tested.

Exercising this process, one slips into a pattern which—interestingly enough—roughly corresponds to how one interacts with a stack data structure. Imagine:

1. We push a requirement onto the stack
2. Is there a small enough test we can write to cause us to implement the requirement?
3. **If yes**, do so and pop the requirement off the stack, **if no** then
4. Identify a smaller, more-specific requirement which is a prerequisite to the current one and push it to the top of the stack
5. Repeat

Following this pattern, our large features will be implemented when the stack is empty!