let lis = (nums) => {
  const lis = Array(nums.length).fill(1);

  // loop through backwards
  for (let i = nums.length - 1; i >= 0; i--) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        lis[i] = Math.max(lis[i], 1 + lis[j]);
      }
    }
  }

  return Math.max(...lis);
};

console.log(lis([1, 2, 4, 3])); // should return 4
console.log(lis([10, 9, 2, 5, 3, 7, 101, 18])); // should return 4 [ 2 , 3, 7, 101 ]
