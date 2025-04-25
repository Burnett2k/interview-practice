const uniquePaths = (m, n) => {
  // recreate the grid
  const answers = Array(m)
    .fill()
    .map(() => new Array(n).fill(1));

  // fill in the grid
  for (let row = 0; row < m; row++) {
    for (let col = 0; col < n; col++) {
      // current answer = uniquepaths from left + unique paths from right
      console.log(row, col);
      const leftAns = col - 1 < 0 ? 0 : answers[row][col - 1];
      const topAns = row - 1 < 0 ? 0 : answers[row - 1][col];

      if (row === 0 || col === 0) {
        answers[row][col] = 1; // base case: only one way to get to top row or left column
      } else {
        answers[row][col] = leftAns + topAns;
      }
    }
  }

  // return the last number

  console.log(answers);
  return answers[m - 1][n - 1];
};

console.log(uniquePaths(3, 2)); // should be 3
console.log(uniquePaths(3, 7)); // should be 28
