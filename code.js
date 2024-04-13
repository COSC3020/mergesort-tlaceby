/**
 * Iterative and in place mergesort
 * @param {number[]} arr
 * @returns {number[]}
 */
function mergesort(arr) {
  // Keps track of the length since I use it ALOT.
  const n = arr.length;

  // Iterate over a increasing size for each subarray
  for (let size = 1; size < n; size *= 2) {
    // Foreach of those sizes we will iterate over all subarrays which can fit the current size.
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
  const leftArr = arr.slice(left, mid + 1);
  const rightArr = arr.slice(mid + 1, right + 1);

  // for the lengths since I dont like how long the lines are getting
  const rlen = rightArr.length;
  const llen = leftArr.length;

  let i = 0;
  let j = 0;
  let k = left; // the default pivot

  while (i < llen && j < rlen) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }

    k++;
  }

  while (i < llen) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }

  while (j < rlen) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
}
