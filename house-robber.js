// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint
// stopping you from robbing each of them is that adjacent houses
// have security systems connected and it will automatically contact
// the police if two adjacent houses were broken into on the same night.
// Given an integer array nums representing the amount of money of each house,
// return the maximum amount of money you can rob tonight without alerting the police.

const maxRobbery = (nums) => {
  // constraints: can only rob every other house

  // want to maximize the amount you can steal

  let answers = Array(nums.length).fill(0);

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) answers[0] = nums[0];
    if (i === 1) answers[1] = Math.max(nums[0], nums[1]);
    // first item doesn't need to be updated
    if (i > 1) {
      answers[i] = Math.max(answers[i - 2] + nums[i], answers[i - 1]);
    }
  }
  return answers[nums.length - 1];
};

console.log(maxRobbery([1, 2, 3, 1]));
console.log(maxRobbery([2, 7, 9, 3, 1]));
