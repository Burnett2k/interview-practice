const maxArea = (height) => {
  let l = 0;
  let r = height.length - 1;

  let maxArea = 0;

  while (l < r) {
    const currentArea = Math.min(height[l], height[r]) * (r - l); // (lowest height) * (difference between l and r)
    maxArea = Math.max(maxArea, currentArea);

    if (height[l] === height[r]) {
      // move pointer to higher number?
      l++;
    } else if (height[l] > height[r]) {
      r--;
    } else {
      l++;
    }
  }

  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
console.log(maxArea([1, 1]));
