let lis = (nums) => {
  let dp = Array(nums.length).fill(1);

  // iterate backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        dp[i] = Math.max(dp[i], 1 + dp[j]);
      }
    }
  }
  return Math.max(...dp);
};

console.log(lis([10, 9, 2, 5, 3, 7, 101, 18])); // should return 4
