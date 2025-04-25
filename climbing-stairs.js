// 70. Climbing Stairs
// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsDP = function (n) {
  let one = 1;
  let two = 1;

  for (let i = 0; i < n - 1; i++) {
    let temp = one;
    one = one + two;
    two = temp;
  }

  return one;
};

const climbStairsRecursive = (n, memo = {}) => {
  if (n === 1) return 1;
  if (n === 2) return 2;

  if (memo[n] === n) return memo[n];
  memo[n] = climbStairsRecursive(n - 1, memo) + climbStairsRecursive(n - 2);
  return memo[n];
};

const climbStairsTabulation = (n) => {
  if (n <= 1) return n;

  let answers = Array(n + 1).fill(0);

  answers[0] = 1;
  answers[1] = 1;

  for (let i = 2; i <= n; i++) {
    answers[i] = answers[i - 1] + answers[i - 2];
  }

  console.log(answers);
  return answers[n];
};

// chose the function to run here:
var testFunction = climbStairsTabulation;

console.log(testFunction(2));
console.log(testFunction(3));
console.log(testFunction(5));
// console.log(climbStairs(30));
