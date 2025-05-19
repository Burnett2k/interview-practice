calculateProduct = (nums) => {
  let prefix = Array(nums.length).fill(1);
  // 1,1,1,1,1
  // 1,2,3,4,5
  // 1,1,2,6,24
  for (let i = 1; i < nums.length; i++) {
    prefix[i] = nums[i - 1] * prefix[i - 1];
  }
  let suffix = Array(nums.length).fill(1);
  for (let i = nums.length - 2; i > -1; i--) {
    suffix[i] = suffix[i + 1] * nums[i + 1];
  }

  let products = [];
  for (let i = 0; i < nums.length; i++) {
    products.push(prefix[i] * suffix[i]);
  }
  return products;
};

console.log(calculateProduct([1, 2, 3, 4, 5])); // should return [120-60-40-30-24]// prefix = [1,2,6,24,120] suffix = [120, 120, 60, 20, 5]
