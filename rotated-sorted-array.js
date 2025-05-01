const findMin = (nums) => {
  console.log("can you remember how to do this?? 🤣");
  let l = 0;
  let r = nums.length - 1;
  let min = nums[0];

  while (l <= r) {
    // determine pivot
    const pivot = Math.floor((l + r) / 2);

    // set min
    min = Math.min(min, nums[pivot]);

    if (nums[l] < nums[r]) {
      min = Math.min(min, nums[l]);
      break;
    }

    if (nums[l] <= nums[pivot]) {
      // left sorted
      // decide which direction to search
      l = pivot + 1;
    } else {
      // right sorted
      // search left
      r = pivot - 1;
    }
  }

  return min;
};

// console.log(findMin([1, 2, 3, 4]));
// console.log(findMin([4, 5, 0, 1, 2, 3]));
// console.log(findMin([3, 4, 1, 2]));
// console.log(findMin([2, 3, 4, 1]));
console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
