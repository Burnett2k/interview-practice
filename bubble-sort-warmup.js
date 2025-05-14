const bubbleSort = (nums) => {
  // iterate the list and swap elements
  // keep doing this until no more swaps have to happen

  let listSorted = false;
  if (nums.length === 1) return nums;

  while (!listSorted) {
    let swapOccurred = false;
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        let temp = nums[i];
        nums[i] = nums[i - 1];
        nums[i - 1] = temp;
        swapOccurred = true;
      }
    }

    if (!swapOccurred) listSorted = true;
  }

  return nums;
};

console.log(bubbleSort([4, 3, 2, 1])); // prints 4,3,2,1
console.log(bubbleSort([1, 2, 3, 4])); // prints 4,3,2,1
