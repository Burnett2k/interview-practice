/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [i, map.get(complement)];
    } else {
      map.set(nums[i], i);
    }
  }
};

console.log(twoSum([1, 2, 3], 5)); // [1,2]
console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 3], 6)); // [0,1]
