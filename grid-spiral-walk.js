// write a function that prints all the boundary elements of an n x m grid, moving clockwise starting from top left corner (0,0)

const grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

let traversePath = [];

const walkGridBoundary = (grid, startRow, startCol, rows, cols) => {
  console.log(
    `Processing boundary: startRow=${startRow}, startCol=${startCol}, rows=${rows}, cols=${cols}`
  );

  // walk right
  for (let i = startCol; i < startCol + cols - 1; i++) {
    traversePath.push(grid[startRow][i]);
  }
  // walk down
  for (let i = startRow; i < startRow + rows - 1; i++) {
    traversePath.push(grid[i][startCol + cols - 1]);
  }
  // walk left
  for (let i = startCol + cols - 1; i > startCol; i--) {
    traversePath.push(grid[startRow + rows - 1][i]);
  }
  // walk up
  for (let i = startRow + rows - 1; i > startRow; i--) {
    traversePath.push(grid[i][startCol]);
  }
};

let startCol = 0;
let startRow = 0;
let rows = grid.length;
let cols = grid[0].length;

while (rows > 0 && cols > 0) {
  walkGridBoundary(grid, startRow, startCol, rows, cols);
  startCol++; // 0 => 1
  startRow++; // 0 => 1
  rows -= 2; // 4 => 2
  cols -= 2; // 4 => 2
}

console.log(traversePath);
