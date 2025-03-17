// challenge: traverse the grid from a specific point in a Depth-first fashion.

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
];

const dfs = (x, y, visited) => {
  if (
    x < 0 ||
    x > grid.length - 1 ||
    y < 0 ||
    y > grid[0].length - 1 ||
    visited.has(`${x},${y}`)
  ) {
    return;
  }
  console.log(`visited node ${x}, ${y}`);
  visited.add(`${x},${y}`);
  dfs(x - 1, y, visited); // up
  dfs(x + 1, y, visited); // down
  dfs(x, y - 1, visited); // left
  dfs(x, y + 1, visited); // right
};

const outerFunction = () => {
  let visited = new Set();
  const row = 0;
  const col = 0;
  console.log("starting at", row, col);
  console.log(
    "size of grid",
    `rows = ${grid.length} cols = ${grid[0].length} totalItems = ${
      grid.length * grid[0].length
    }`
  );
  dfs(0, 0, visited);
  console.log("# of visited nodes ", visited.size);
};

console.log(outerFunction(grid));
