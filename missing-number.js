const missingNumber = (nums) => {
  // create a set from all the nums
  let set = new Set(nums);

  // loop through the range until you find a missing number

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) return i;
  }
};

console.log(missingNumber([3, 0, 1])); // should return 2
console.log(missingNumber([0, 1])); // should return 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // should return 8
