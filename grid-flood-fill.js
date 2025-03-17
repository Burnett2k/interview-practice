// 🖌️ Flood Fill Algorithm

// Problem Statement

// You are given a 2D grid (image) represented as an n x m matrix where each
// cell contains an integer representing a color. You are also given a starting pixel (sr, sc) and a new color.

// Perform a flood fill on the grid by changing the starting pixel’s color
// and all connected pixels of the same color to the new color.
// Two pixels are considered connected if they are directly adjacent (up, down, left, or right) and have the same original color.

// Return the modified grid after applying the flood fill.

// input
// image = [
//     [1, 1, 0],
//     [1, 1, 0],
//     [0, 0, 1]
//   ]
//   sr = 0, sc = 0
//   newColor = 2

// output
//   [
//     [2, 2, 0],
//     [2, 2, 0],
//     [0, 0, 1]
//   ]

const floodFill = (grid, x, y, newColor) => {
  const visited = new Set();
  console.log(grid);

  if (grid[x][y] !== newColor) {
    dfs(grid, x, y, newColor, grid[x][y], visited);
  }
  return grid;
};

const dfs = (grid, x, y, newColor, oldColor, visited) => {
  // check if we are out of bounds or already visited
  const coords = `${x}-${y}`;
  if (
    x < 0 ||
    y < 0 ||
    x > grid.length - 1 ||
    y > grid[0].length - 1 ||
    visited.has(coords)
  ) {
    return;
  }

  visited.add(coords);
  if (grid[x][y] === oldColor) {
    grid[x][y] = newColor;
  } else {
    return;
  }

  dfs(grid, x - 1, y, newColor, oldColor, visited); // up
  dfs(grid, x + 1, y, newColor, oldColor, visited); // down
  dfs(grid, x, y - 1, newColor, oldColor, visited); // left
  dfs(grid, x, y + 1, newColor, oldColor, visited); // right
};

const image = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(floodFill(image, 0, 0, 1));
