const missingNumberNaive = (nums) => {
  // create a set from all the nums
  let set = new Set(nums);

  // loop through the range until you find a missing number

  for (let i = 0; i <= nums.length; i++) {
    if (!set.has(i)) return i;
  }
};

const missingNumberSimpler = (nums) => {
  let fullSum = 0;
  let missingSum = 0;

  for (let i = 0; i <= nums.length; i++) {
    fullSum += i;
    if (nums[i]) missingSum += nums[i];
  }

  return fullSum - missingSum;
};

console.log(missingNumberNaive([3, 0, 1])); // should return 2
console.log(missingNumberNaive([0, 1])); // should return 2
console.log(missingNumberNaive([9, 6, 4, 2, 3, 5, 7, 0, 1])); // should return 8
console.log(missingNumberSimpler([3, 0, 1])); // should return 2
console.log(missingNumberSimpler([0, 1])); // should return 2
console.log(missingNumberSimpler([9, 6, 4, 2, 3, 5, 7, 0, 1])); // should return 8
