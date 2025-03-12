// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// example:        0 1 2 3 4 5
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// l = 0, r = 5, pivot = 2
// l = 3, r = 5, pivot =

const search = (nums, target) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    // Fix: ensure we check the last element
    let pivot = Math.floor((r + l) / 2);

    if (nums[pivot] === target) {
      return pivot; // Found target, return index
    } else if (nums[pivot] < target) {
      l = pivot + 1; // Move right
    } else {
      r = pivot - 1; // Move left
    }
  }

  return -1; // Target not found
};

// Test cases
console.log(search([-1, 0, 3, 5, 9, 12], 9)); // Expects 4
console.log(search([-1, 0, 3, 5, 9, 12], 10)); // Expects -1
console.log(search([], 10)); // Expects -1
console.log(search([5], 5)); // Expects 0 (single element case)
console.log(search([2, 4, 6, 8, 10], 2)); // Expects 0 (first element)
console.log(search([2, 4, 6, 8, 10], 10)); // Expects 4 (last element)

// problems encountered: determining pivot
// comparing pivot to target rather than the VALUE at pivot instead (i.e. pivot vs nums[pivot])
