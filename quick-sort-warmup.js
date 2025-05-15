const quickSort = (nums) => {
  if (nums.length <= 1) return nums; // base case

  let pivot = nums.length - 1;

  let smaller = [];
  let larger = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[pivot]) {
      smaller.push(nums[i]);
    } else {
      larger.push(nums[i]);
    }
  }

  return quickSort(smaller).concat(nums[pivot], quickSort(larger));
};

console.log(quickSort([42, 6, 5, 3, 4])); // prints 3,4,5,6,42
console.log(quickSort([1, 2, 3, 4])); // prints 4,3,2,1
