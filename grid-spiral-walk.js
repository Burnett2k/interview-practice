// 54. Spiral Matrix
// Given an m x n matrix, return all elements of the matrix in spiral order.

const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var spiralOrder = function (grid) {
  const path = [];
  let top = 0;
  let right = grid[0].length - 1;
  let bottom = grid.length - 1;
  let left = 0;

  console.log(top, right, bottom, left);

  // outer while loop
  while (top <= bottom && left <= right) {
    // keep going until coordinates intersect

    // walk top
    for (let i = left; i <= right; i++) {
      path.push(grid[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      path.push(grid[i][right]);
    }
    right--;
    for (let i = right; i >= left; i--) {
      path.push(grid[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      path.push(grid[i][left]);
    }
    left++;
    // walk right
    // walk bottom
    // walk left
  }

  return path;
};

// const grid = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
//   [13, 14, 15, 16],
// ];

console.log(spiralOrder(grid));
