const findMin = (nums) => {
  let l = 0;
  let r = nums.length - 1;
  let min = Infinity;

  while (l <= r) {
    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    let pivot = Math.floor((r + l) / 2);
    // are we in the left sorted portion? Search right
    min = Math.min(min, nums[pivot]);

    if (nums[pivot] >= nums[l]) {
      l = pivot + 1;
    } else {
      r = pivot - 1;
    }
  }

  return min;
};

console.log(findMin([1, 2, 3, 4]));
console.log(findMin([4, 1, 2, 3]));
console.log(findMin([3, 4, 1, 2]));
console.log(findMin([2, 3, 4, 1]));
