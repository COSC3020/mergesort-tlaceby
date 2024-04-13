[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/1uurLsu5)

# Mergesort

Implement an iterative (no recursive calls) and in-place version of mergesort.
Use the template I've provided in `code.js`. Test your new function; I've
provided some basic testing code that uses
[jsverify](https://jsverify.github.io/) in `code.test.js`.

Hint: To make merge sort in-place, think about what happens during the merge --
where are elements moved to and from? To make it iterative, think about the
part of the array each recursive call considers.

## Runtime Analysis

The mergesort function consists of two nexted loops. The outer loop will iterate over increasing sizes for the subarrays. We start at a size of 2 and then double the size until we react the arrays length. This is a logarithmetic time complexity.

The inner loop iterates over all arrays which can be made with the current size. This has a complexity of $\Theta(\frac{n}{s})$ where $s$ represents the size of the subarray. Inside each iteration we make a call to `merge()` which has a runtime complexity of $\Theta(n)$ as it can possibly merge the entire length of both arrays being merged.

Therefore, the total time complexity of our worst-case `mergesort` can be expressed as $\Theta(n \log n)$.

## Resources

https://www.youtube.com/watch?v=bOk35XmHPKs
https://www.youtube.com/watch?v=W2rU3dquXAc
https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/
