/**
 * Iterative and in-place merge sort
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergesort(arr) {
  const n = arr.length;

  for (let size = 1; size < n; size *= 2) {
    for (let left = 0; left < n - size; left += 2 * size) {
      const mid = left + size - 1;
      const right = Math.min(left + 2 * size - 1, n - 1);
      merge(arr, left, mid, right);
    }
  }

  return arr;
}

/**
 * @param {number[]} arr
 * @param {number} left
 * @param {number} mid pivot point
 * @param {number} right
 */
function merge(arr, left, mid, right) {
  let leftIndex = left;
  let rightIndex = mid + 1;

  // While there exist left or right subarrays
  while (leftIndex <= mid && rightIndex <= right) {
    // Do nothing as the left is less than right
    if (arr[leftIndex] <= arr[rightIndex]) {
      leftIndex++;
      continue;
    }

    // Since the first element in left subarray is > then first element in right subarray
    const value = arr[rightIndex]; // smallest of the two
    let shiftIndex = rightIndex;

    while (shiftIndex !== leftIndex) {
      arr[shiftIndex] = arr[shiftIndex - 1];
      shiftIndex--;
    }

    arr[leftIndex] = value;
    leftIndex++;
    mid++;
    rightIndex++;
  }
}
