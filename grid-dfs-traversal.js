// challenge: traverse the grid from a specific point in a Depth-first fashion.

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
];

// orchestrator
const outerFunction = (grid, x, y) => {
  const visited = new Set();
  // do dfs in each adjacent direction until you hit boundaries
  // keep track of places you've already visited so you don't hit them again

  // visit
  // traverse up, right, down, left
  dfs(grid, x, y, visited);
};

const dfs = (grid, x, y, visited) => {
  // if we've already been there or we're out of bounds, don't continue
  const coords = `${x}-${y}`;
  if (
    !visited.has(coords) &&
    x >= 0 &&
    x <= grid.length - 1 &&
    y >= 0 &&
    y <= grid[0].length - 1
  ) {
    console.log(coords);
    visited.add(coords);
    dfs(grid, x - 1, y, visited);
    dfs(grid, x, y + 1, visited);
    dfs(grid, x + 1, y, visited);
    dfs(grid, x, y - 1, visited);
  } else {
    return;
  }
};

console.log(outerFunction(grid, 0, 0));
