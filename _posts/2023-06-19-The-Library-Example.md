---
title: "The library example"
---
Imagine that you arrive at your public library with the intent to do research for a paper you're writing on some topic, say, the engineering and history behind medieval architecture. How might you most-efficiently go about doing this? To start, you would probably walk to the Fine Arts section of the library, where you find an aisle of books on architecture. You walk down the aisle, scanning the titles of books until you find a a few relating to cathedrals. You pick one out, but find that it have some, but not all of what you're looking for, so you hold it in your hand and keep searching. After finding a few books on the subject, you begin to realize that it's becoming cumbersome to parse the contents of a book with all the others still in your hand so you resolve to find a desk to sit at so you can spread them out.

Now sitting at your desk, you can begin writing. Naturally, over the course of your work, you take a book you think will have information pertinent to your working paragraph, sift through the chapters until you find a promising page, scanning each paragraph, line, and phrase until you find what you need, perhaps leaving the book open for potential later use.

As time goes on, the paper develops. You find yourself needing very specific information about masonry, European geography, Church history, etc, but these topics aren't covered in the books you have at your desk (which at this point is *totally* covered), so you take the books you've been using the least and put them back on the shelves to make room. Doing so, you slip into a kind of pattern of questioning:

*Is what I'm looking for on this page?*

No?

*Is it on a page of a book I have open on the desk?*

No?

*Is it perhaps in closed book I have on the desk?*

If, finally, there's no book on the desk with what you want, then you have to get up out of your seat and search through the various sections of the library.

You'll notice that we start asking questions which we can find the answers to the fastest, e.g. I can scan a page faster than I can scan the pages I have open on the desk which, itself, is faster than searching through the closed books. You'd also do well to notice, though, that the more former options are faster *because they involve parsing less and less information*, e.g. a page has less information to parse than a book or a desk of books. You do all of this because you want to avoid getting out of your seat and walking through the shelves as much as possible.

This is fundamentally how computers process information. When we have huge amounts of data, it's totally impractical to search through every single byte on a hard drive in the same way that it's totally impractical to walk through the stacks, find the book we want, read it there, and then walk back to our desk everytime we want to write a sentence of our paper.

Therefore, when computers are using a piece of data it's read in from slow, persistent memory into faster working memory (RAM), which is like taking a bunch of books off the shelves and bringing them back to the desk (even if we won't use all of them). From there, a block of data is pulled into a cache which is faster, yet smaller. This is like leaving a book open on the desk. Finally, when some data is actually being processed it is loaded into of the CPU's registers (of which there are *very* few). Data here has a much shorter lifespan than elsewhere, and is like if you were continually pulling information from a particular page of the book—you'd probably keep that book in your hand as you work. 

These mechanisms are based on the principle that ***if you use a piece of information, there's a good chance that you'll have to use it—or something nearby it—again, so keep it easily accessible***. Just *how* easily accessible that information is depends on how likely you are to use it again. For example, I'm more likely to continue needing to use the page I'm currently on than I am to need the book I just finished using again. As a result, I leave that book open elsewhere on the desk but set it aside. This is like leaving a piece of memory in the cache. I may need it again so I put it in a place where I can get to it faster than in main memory.

![hierarchy](https://diveintosystems.org/book/C11-MemHierarchy/_images/MemoryHierarchy.png)

This is a vastly oversimplified rendition of how such allocation really works, but it serves as a good starting point for a future article on threads...