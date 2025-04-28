// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArrayBruteForce = function (nums) {
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      console.log(`adding ${nums[j]} to sum`);
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
};
var maxSubArrayKadanes = function (nums) {
  let currentSum = nums[0];
  let globalSum = nums[0];

  // update array as you go with the best sum
  // either extend or start fresh with a new subarray

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    globalSum = Math.max(currentSum, globalSum);
  }

  return globalSum;
};

// console.log(maxSubArrayBruteForce([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be: [4,-1,2,1] sum of 6
// console.log(maxSubArrayBruteForce([1])); // should be: [1]
// console.log(maxSubArrayBruteForce([5, 4, -1, 7, 8])); // should be:[5,4,-1,7,8] with sum of 23
console.log(maxSubArrayKadanes([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // should be: [4,-1,2,1] sum of 6
console.log(maxSubArrayKadanes([1])); // should be: [1]
console.log(maxSubArrayKadanes([5, 4, -1, 7, 8])); // should be:[5,4,-1,7,8] with sum of 23
