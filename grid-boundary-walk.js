// write a function that prints all the boundary elements of an n x m grid, moving clockwise starting from top left corner (0,0)

const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const walkGridBoundary = (grid) => {
  // path to follow
  //  topmost row
  //  rightmost column
  //  bottommost row
  //  leftmost column
  const cols = grid[0].length;
  const rows = grid.length;
  let traversePath = [];

  // loop through first row
  for (let i = 0; i < cols; i++) {
    traversePath.push(grid[0][i]);
  }
  for (let i = 1; i < rows; i++) {
    traversePath.push(grid[i][rows - 1]);
  }
  for (let i = cols - 2; i >= 0; i--) {
    traversePath.push(grid[rows - 1][i]);
  }
  for (let i = grid.length - 2; i >= 1; i--) {
    traversePath.push(grid[i][0]);
  }
  return traversePath;
};

console.log(walkGridBoundary(grid));
