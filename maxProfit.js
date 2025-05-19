const maxProfit = (nums) => {
  let maxProfit = 0;

  // create left and right pointers
  // time complexity: o(n) since it's only looping through at most n times.
  let l = 0;
  let r = l + 1;

  while (r < nums.length) {
    let currentProfit = nums[r] - nums[l];
    if (currentProfit > maxProfit) {
      // if we found a higher profit, keep track of it
      maxProfit = Math.max(maxProfit, currentProfit);
    } else {
      // if profit decreased, there's no way we can find any higher values, so set l to r
      l = r;
    }

    // move right pointer by one to see if we can find a higher profit
    r++;
  }
  return maxProfit;
};
console.log(maxProfit([1, 2, 4, 2, 8])); // should return 6 (buy on 4th day at 2, sell on 5th day at 8);
