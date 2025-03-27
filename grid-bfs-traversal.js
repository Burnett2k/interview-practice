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

  let queue = [[x, y]];

  while (queue.length) {
    const node = queue.shift();
    const x = node[0];
    const y = node[1];

    // push neighbors into queue if they are unvisited
    if (
      x < 0 ||
      x > grid.length - 1 ||
      y > grid[0].length - 1 ||
      y < 0 ||
      visited.has(`${x}-${y}`)
    ) {
      // we are out of bounds. THis should be inverted since we don't do anything when we are out of bounds
    } else {
      visited.add(`${x}-${y}`);
      console.log(`visiting ${x}-${y}`);
      queue.push([x - 1, y]); // top, bottom, right, left
      queue.push([x + 1, y]);
      queue.push([x, y + 1]);
      queue.push([x, y - 1]);
    }
  }
};

console.log(outerFunction(grid, 0, 0));
