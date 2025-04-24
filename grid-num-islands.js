// 🏝️ The Islands Problem (Number of Islands)
// Problem Statement
// You are given an n x m grid consisting of 1s (land) and 0s (water).
// An island is a group of 1s connected horizontally or vertically. Count the number of islands in the grid.

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
];

// orchestrator
const countIslandsDfs = (grid) => {
  // dfs solution
  let islandCount = 0;
  const visited = new Set();

  // dfs function
  const dfs = (row, col) => {
    // base cases: within bounds, 0
    if (
      row >= 0 &&
      row < grid.length &&
      col >= 0 &&
      col < grid[0].length &&
      grid[row][col] === 1 &&
      !visited.has(`${row}-${col}`)
    ) {
      visited.add(`${row}-${col}`);
      // top, down, left, right
      dfs(row - 1, col);
      dfs(row + 1, col);
      dfs(row, col - 1);
      dfs(row, col + 1);
    }

    // check if we're on an island
  };

  // loop through grid and run dfs
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // start dfs if we hit an unvisited island
      if (grid[row][col] === 1 && !visited.has(`${row}-${col}`)) {
        islandCount++;
        dfs(row, col);
      }
    }
  }

  return islandCount;
};

const countIslandsBfs = (grid) => {
  // bfs solution
  const visited = new Set();
  let islandCount = 0;
  const bfs = (grid, row = 0, col = 0) => {
    const queue = [[row, col]];

    while (queue.length) {
      // add valid items to the queue
      const [row, col] = queue.shift();

      if (
        row >= 0 &&
        row < grid.length &&
        col >= 0 &&
        col < grid[0].length &&
        grid[row][col] === 1 &&
        !visited.has(`${row}-${col}`)
      ) {
        visited.add(`${row}-${col}`);
        queue.push(
          [row - 1, col],
          [row + 1, col],
          [row, col - 1],
          [row, col + 1]
        );
      }
    }
  };

  // loop through grid and run dfs
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      // start dfs if we hit an unvisited island
      if (grid[row][col] === 1 && !visited.has(`${row}-${col}`)) {
        islandCount++;
        bfs(grid, row, col);
      }
    }
  }

  return islandCount;
};

console.log(countIslandsBfs(grid));
