const prefix = (nums) => {
  let prefix = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    prefix.push(prefix[i - 1] + nums[i]);
  }
  return prefix;
};

const suffix = (nums) => {
  let suffix = [nums[nums.length - 1]];
  for (let i = nums.length - 2; i > -1; i--) {
    suffix.push(nums[i] + suffix[suffix.length - 1]); // doing a shift is the same as a reverse right?
  }

  return suffix.reverse();
};

console.log(prefix([1, 2, 3, 4])); // returns [1, 3, 6, 10]
console.log(suffix([1, 2, 3, 4])); // returns [10,9,7,4]
