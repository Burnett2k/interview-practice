// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index.
// Otherwise, return the closest number
// You must write an algorithm with O(log n) runtime complexity.

// example:        0 1 2 3 4 5
// Input: nums = [-1,0,3,5,9,12], target = 4, should answer be 3 or 5? Need to know more... 3
// Output: 4
// clarifying question: How do I break a tie? We could have number be the same on both sides.
// answer: if there's a tie, then go with the lower number.

const searchNearestNeighbor = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;
  let closestNumIndex = Number.MAX_VALUE;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      // value has been found
      return mid;
    }

    if (
      closestNumIndex === Number.MAX_VALUE || // not yet set
      Math.abs(nums[mid] - target) < Math.abs(nums[closestNumIndex] - target) || // found a closer number
      (Math.abs(nums[mid] - target) === // differences are equal AND a closer number has been found
        Math.abs(nums[closestNumIndex] - target) &&
        nums[mid] < nums[closestNumIndex])
    ) {
      closestNumIndex = mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return closestNumIndex;
};

console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], 4)); // return 2
console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], 5)); // return 3
console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], -1)); // return 0
// Test cases
console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], 4)); // Output: 2 (index of 3)
console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], 5)); // Output: 3 (index of 5)
console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], 8)); // Output: 4 (index of 9)
console.log(searchNearestNeighbor([-1, 0, 3, 5, 9, 12], 6)); // Output: 3 (index of 5)
