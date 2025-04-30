const maxProduct = (nums) => {
  let dpMax = [nums[0]];
  let dpMin = [nums[0]];
  let globalMax = nums[0];

  // handle zero
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    const prevMax = dpMax[i - 1];
    const prevMin = dpMin[i - 1];

    // let tmp = Math.max(nums[i], nums[i] * dp[i-1])
    dpMin.push(Math.min(prevMax * num, prevMin * num, num));
    dpMax.push(Math.max(prevMax * num, prevMin * num, num));
    globalMax = Math.max(dpMax[i], globalMax);
  }
  console.log(dpMin);
  console.log(dpMax);
  return globalMax;
};

console.log(maxProduct([0, 2, -1, 3])); // 3
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([0, 0, 0])); // 0
console.log(maxProduct([-2, 3, -4])); // 24
console.log(maxProduct([-2, -3, -4])); // 12
console.log(maxProduct([2, -5, -2, -4, 3])); // 240
