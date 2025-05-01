const search = (nums, t) => {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    const pivot = Math.floor((l + r) / 2);

    if (nums[pivot] === t) return pivot;

    if (nums[l] < nums[pivot]) {
      // left sorted
      // is value on left or right side?

      if (t >= nums[l] && t < nums[pivot]) {
        // search left
        r = pivot - 1;
      } else {
        // search right
        l = pivot + 1;
      }
    } else {
      // right sorted
      if (t > nums[pivot] && t <= nums[r]) {
        // search right
        l = pivot + 1;
      } else {
        // search left
        r = pivot - 1;
      }
    }
  }

  return -1; // didn't find anything
};

console.log(search([3, 4, 1, 2], 3)); // 0
console.log(search([1, 2, 3, 4], 1)); // 0
console.log(search([4, 1, 2, 3], 2)); // 2
console.log(search([2, 3, 4, 1], 5)); // -1
console.log(search([4, 1, 2, 3], 2)); // 2
console.log(search([5, 6, 7, 1, 2, 3, 4], 2)); // 4
console.log(search([5, 1, 3], 5)); // 0
