// 🏝️ The Islands Problem (Number of Islands)

// Problem Statement

// You are given an n x m grid consisting of 1s (land) and 0s (water). An island is a group of 1s connected horizontally or vertically. Count the number of islands in the grid.

// challenge: traverse the grid from a specific point in a Depth-first fashion.

const grid = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1],
];

// orchestrator
const countIslands = (grid, x = 0, y = 0) => {
  // finds the boundaries of a current island.
  const visited = new Set();
  let numIslands = 0;

  const bfs = (x, y) => {
    let queue = [[x, y]];

    while (queue.length) {
      const node = queue.shift();
      const x = node[0];
      const y = node[1];

      // push neighbors into queue if they are unvisited
      if (
        !withinBounds(x, y, grid) ||
        visited.has(`${x}-${y}`) ||
        grid[x][y] === 0
      ) {
        console.log("we found water, an invalid boundary, or whatevs");
      } else {
        visited.add(`${x}-${y}`);
        console.log(`visiting ${x}-${y}`);
        if (withinBounds(x - 1, y, grid) && grid[x - 1][y] === 1)
          queue.push([x - 1, y]); // top, bottom, right, left
        if (withinBounds(x + 1, y, grid) && grid[x + 1][y] === 1)
          queue.push([x + 1, y]); // top, bottom, right, left
        if (withinBounds(x, y + 1, grid) && grid[x][y + 1] === 1)
          queue.push([x, y + 1]); // top, bottom, right, left
        if (withinBounds(x, y - 1, grid) && grid[x][y - 1] === 1)
          queue.push([x, y - 1]); // top, bottom, right, left
      }
    }
  };

  for (let i = 0; i < grid.length - 1; i++) {
    for (let j = 0; j < grid[0].length - 1; j++) {
      if (grid[i][j] === 1 && !visited.has(`${i}-${j}`)) {
        numIslands++;
        bfs(i, j);
      }
    }
  }
  return numIslands;
};

const withinBounds = (x, y, grid) => {
  return !(x < 0 || x > grid.length - 1 || y > grid[0].length - 1 || y < 0);
};

console.log(countIslands(grid));
