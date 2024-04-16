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

The outer loop iterates logarithmically, doubling the size of subarrays on each iteration until it exceeds the array's length. Therefore, the number of iterations: $\log(n)$.

The inner loop iterates over subarrays of size `size` formed from the current `left` index. This adds another $\frac{n}{2 \cdot \text{size}}$ iterations.

The `merge()` function merges two sorted subarrays of potentially equal sizes, which has a time complexity of $\Theta(n)$. Therefore the total time complexity is the product of the number of iterations of the outer and inner loops multiplied by the time complexity of the merge function.

This gives a worst-case time complexity of $\Theta(\log(n)) \cdot \Theta(n)$, which simplifies to $\Theta(n \cdot \log n)$.

## Resources

https://www.youtube.com/watch?v=bOk35XmHPKs
https://www.youtube.com/watch?v=W2rU3dquXAc
https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/

https://www.geeksforgeeks.org/in-place-merge-sort/
