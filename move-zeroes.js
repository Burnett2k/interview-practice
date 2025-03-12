/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // edge case: 1 item
  if (nums.length === 1) {
    return nums;
  }

  // [0, 1, 4, 0] l = 0; r = 1
  // 1, 0, 4, 0 l = 1; r = 2
  // 1, 4, 0, 0 l = 2; r = 3
  let l = 0;
  let r = 1;
  // seek swappable items

  while (r < nums.length) {
    // if items are 'swappable'
    if (nums[l] === 0 && nums[r] > 0) {
      let temp = nums[r];
      nums[r] = nums[l];
      nums[l] = temp;
      l++;
      r++;
    } else if (nums[l] > 0) {
      l++;
      r++;
    } else {
      r++;
    }
    console.log(nums);
  }
};

console.log(moveZeroes([0, 1, 4, 0])); // returns [1,4,0,0]
console.log(moveZeroes([0, 1, 0, 3, 12])); // returns [1,3,12,0,0]
