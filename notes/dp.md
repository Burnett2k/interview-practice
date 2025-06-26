# Dynamic programming

a computer programming technique where an algorithmic problem is first broken down into sub-problems, the results are saved, and then the sub-problems are optimized to find the overall solution. It is also used for mathematical optimizations.

Works well with

1. Overlapping subproblems - equations that reuse portions of the smaller equations several times to arrive at a solution. When the answers to the same subproblem are needed more than once to solve the main problem, we say that the subproblems overlap.

Example: fibonacci sequence DOES overlap. However, a binary search (divide and conquer) does NOT because your always searching a new space.

2. Optimal substructures - locate the best solution to an issue, then build the solution that provides the best results overall.

** Dynamic programming is an optimization technique for recursive solutions. If you can't figure out how to do the recursive solution, you will be unlikely to figure out the Dynamic Programming solution **. Probably not a good idea to go straight to Dynamic Programming.

Can only use recursion => Dynamic programming if the problems overlap. Example: merge, sort, and quick sort are not considered dynamic because they involve putting together the best answers to subproblems that do not overlap. Shortest path, however, can be a optimal substructure problem.

## Top-down

Solves equations by breakign them into smaller onces and reusing answers when needed. Equivalent to adding recursion and caching steps. Downside is that it still uses recursion so stack overflow may be exceeded.

Example of this would be adding caching to fibonacci sequence?

## Bottom-up

Solves equations by breaking them up into smaller ones, tries to solve the equation with the smallest mathematical value, then works its way up to the equation with the biggest value. ** this solution removes the recursion and thus stack overflow is not a risk and also decreases the time complexity **.

## Why can Dynamic Programming be faster?

Dynamic programming is an iterative technique, so there isn't a problem with stack overflow like there is in recursion. Additionally, you are taking advantage of pre-computing values, so that you aren't doing the same work over and over like you may in other techniques. Memoization is the technique for storing these values. Typically these are stored in an array called dp. `const dp = []`.

## How can you tell when Dynamic Programming is appropriate?
