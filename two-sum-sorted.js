/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSumSorted = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [l + 1, r + 1];
    } else if (nums[l] + nums[r] > target) {
      r--;
    } else {
      l++;
    }
  }
};

console.log(twoSumSorted([1, 2, 3], 5)); // [2,3] // index is 1 based
console.log(twoSumSorted([2, 7, 11, 15], 9)); // [1,2] // index is 1 based
console.log(twoSumSorted([-1, 0], -1)); // [1,2] // index is 1 based
console.log(twoSumSorted([2, 3, 4], 6)); // [1,3] // index is 1 based
