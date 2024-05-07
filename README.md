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

`Outer Loop`:
Increases the size of the subarrays to be merged, starting from 1 and doubling each time until it reaches the length of the array ($n$). The loop runs $\log(n)$ times because with each iteration the size of subarrays doubles (size = 1, 2, 4, ..., n).

`Inner Loop`:
For a given size, the loop iterates approximately $\frac{n}{2 \cdot size}$ times because each merge operation handles $2 \cdot size$ elements and merging the two.

`Merge`:
The most expensive operation within the merge function is the process of _shifting_ elements into a correct position. When an element from the right subarray is moved to a position in the left, all subsequent elements in the left subarray need to be shifted right to make space. This operation has a complexity of up to $\Theta(n)$ in the worst case for a single merge step, as it may involve shifting all of the array over to its new location.

The total time complexity is determined by multiplying the complexities of the outer loop, inner loop, and the merge function, but with special consideration for the shifting cost:

`Outer Loop`: Runs $\log(n)$ times.

`Inner Loop`: For each outer loop iteration, merges are performed $\frac{n}{2 \cdot size}$ times.

`Merge Function`: Each merge can involve up to $\Theta(n)$ operations due to shifting.

The total work done in each outer loop iteration involves several merge steps, each potentially costing up to $\Theta(n)$ because of the need to shift elements frequently.
Thus, for each doubling of size, every element can be involved in multiple shifts, especially in later stages when size approaches $n/2$, $n/4$, etc.

Therefore the overall worst-case runtime complexity of my ijmplimentation of is $\Theta(n \cdot \log(n))$.

## Resources

- https://www.youtube.com/watch?v=bOk35XmHPKs
- https://www.youtube.com/watch?v=W2rU3dquXAc
- https://www.geeksforgeeks.org/time-and-space-complexity-analysis-of-merge-sort/
- https://www.geeksforgeeks.org/in-place-merge-sort/
