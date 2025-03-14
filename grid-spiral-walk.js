// write a function that prints all the boundary elements of an n x m grid, moving clockwise starting from top left corner (0,0)

const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const walkGridBoundary = (grid, startRow, startCol, rows, cols) => {
  if (rows <= 0 || cols <= 0) return; /// base case to exit the loop

  // loop through first row
  for (let i = 0; i < cols; i++) {
    traversePath.push(grid[startRow][startCol + i]);
  }
  // loop down
  for (let i = 1; i < rows; i++) {
    console.log(i);
    traversePath.push(grid[startRow + i][startCol + cols - 1]);
  }
  for (let i = cols - 2; i >= 0; i--) {
    traversePath.push(grid[startRow + rows - 1][startCol + i]);
  }
  for (let i = rows - 2; i >= 1; i--) {
    traversePath.push(grid[startRow + i][startCol]);
  }
  walkGridBoundary(grid, startRow + 1, startCol + 1, rows - 2, cols - 2);
};

let startRow = 0;
let startCol = 0;
let traversePath = [];

walkGridBoundary(grid, 0, 0, grid.length, grid[0].length);
console.log(traversePath);
