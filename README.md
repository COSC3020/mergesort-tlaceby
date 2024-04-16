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

The outer loop iterates logarhythmically, doubling the `size` of subarrays on each iteration until it exceeds the array's length. Number of iterations: $\log(n)$

The inner loop iterates over subarrays of size `size` formed from the current `left` index.
Number of iterations: $\frac{n}{2 \cdot size}$. We have the half term here as the underlying subarray is now split thus 2 times the size of each split.

The `merge()` function merges two _sorted_ subarrays of _mostly_ equal sizes, which has a time complexity of $\Theta(n)$.

The total time complexity is the product of the number of iterations of the outer and inner loops multiplied by the time complexity of the merge function:

$\Theta(\log_2(n)) \cdot \frac{n}{2 \cdot size} \cdot \Theta(n)$. Since the inner loop is nested within the outer loop, we multiply their complexities. This gives us an overall worst-case runtime complexity of $\Theta(n^2 \log n)$.

## Resources

https://www.youtube.com/watch?v=bOk35XmHPKs
https://www.youtube.com/watch?v=W2rU3dquXAc
https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/

https://www.geeksforgeeks.org/in-place-merge-sort/
