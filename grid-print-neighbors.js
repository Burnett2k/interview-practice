// print the value of adjacent neighbors (left, right, above, and below) of a target grid. Not diaganol.
// if the neighbor is out of bounds, return a -1

// grid = 2 dimensional array / grid
// target = tuple. Ex: [1,2]

const printNeighbors = (grid, target) => {
  // [row, col]
  const directions = {
    up: [-1, 0],
    down: [1, 0],
    right: [0, 1],
    left: [0, -1],
  };

  for (const [direction, [row, col]] of Object.entries(directions)) {
    const newRow = target[0] + row;
    const newCol = target[1] + col;
    const value = withinRange(grid, newRow, newCol) ? grid[newRow][newCol] : -1;

    console.log(`direction ${direction} is ${value}`);
  }
};

const withinRange = (grid, row, col) => {
  if (
    row >= 0 && // checking upper bounds
    row < grid.length && // checking lower bounds
    col >= 0 && // checking left bounds
    col < grid[0].length // checking right bounds
  ) {
    return true;
  }
  return false;
};

console.log(
  printNeighbors(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [1, 1]
  )
); // 2, 4, 6, 8
console.log(
  printNeighbors(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [0, 0]
  )
); // -1, -1, 2, 4
console.log(
  printNeighbors(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    [2, 1]
  )
); // 5, 7, 9, -1
