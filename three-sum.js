/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSumBruteForce = function (nums) {
  // sum of 0?
  // triplet valid?
  // triplet distinct?
  const triplets = [];
  const tripletSet = new Set();

  // big O (n^3) because of the triple loop. I could do better
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        console.log(`${i}-${j}-${k}`);

        if (nums[i] + nums[j] + nums[k] === 0) {
          const ans = [nums[i], nums[j], nums[k]];
          const ansHash = ans.sort((a, b) => a - b).join("-");
          if (!tripletSet.has(ansHash)) {
            triplets.push(ans);
            tripletSet.add(ansHash);
          }
        }
      }
    }
  }

  // brute force crappy solution. Gets the job done though.
  console.log(tripletSet);
  return triplets;
};

const threeSumBetter = (nums) => {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const ans = [];

  // choose first number
  for (let i = 0; i < nums.length; i++) {
    // run two sum on the remainder
    let l = i + 1; // left most number that is not i
    let r = nums.length - 1; // right most number that is not i

    while (l < r) {
      if (i === l) l++;
      if (i === r) r--;
      if (nums[i] + nums[l] + nums[r] === 0) {
        ans.push([nums[i], nums[l], nums[r]]);
        l++;
        while (nums[l] === nums[l - 1] && l < r) {
          l++;
        }
      } else if (nums[l] + nums[r] > 0) {
        r--;
      } else {
        l++;
      }
    }
  }
  return ans;
};

const testFunc = threeSumBetter;

console.log(testFunc([-1, 0, 1, 2, -1, -4])); // [[-1,-1,2],[-1,0,1]]
console.log(testFunc([0, 1, 1])); // []
console.log(testFunc([0, 0, 0])); // [[0,0,0]]
