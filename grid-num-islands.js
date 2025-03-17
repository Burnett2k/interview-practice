// 🏝️ The Islands Problem (Number of Islands)

// Problem Statement

// You are given an n x m grid consisting of 1s (land) and 0s (water). An island is a group of 1s connected horizontally or vertically. Count the number of islands in the grid.

grid = [
  [1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
];

// Expected output: 2
let visited = new Set();
let numIslands = 0;

const countIslands = (grid) => {
  // 1 = land
  // 0 = water
  // island = group of 1s connected horizontally or vertically

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      //   console.log(i, j);
      const coords = `${i}-${j}`;
      if (!visited.has(coords) && grid[i][j] === 1) {
        console.log(coords);
        numIslands++;
        dfs(grid, i, j);
      }
    }
  }
  return numIslands;
};

const dfs = (grid, x, y) => {
  const coords = `${x}-${y}`;
  if (
    x < 0 ||
    x > grid.length - 1 ||
    y < 0 ||
    y > grid[0].length - 1 ||
    visited.has(coords)
  ) {
    return;
  }

  visited.add(coords);

  if (grid[x][y] === 0) {
    return;
  } else {
    dfs(grid, x - 1, y); //up
    dfs(grid, x + 1, y); // down
    dfs(grid, x, y - 1); // left
    dfs(grid, x, y + 1); // right
  }
};

console.log(countIslands(grid));
