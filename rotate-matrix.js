grid = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

/**
 * Rotates the given NxN grid 90 degrees clockwise.
 * Steps:
 * 1. Transpose the matrix (swap rows and columns).
 * 2. Reverse each row to complete the rotation.
 *
 * @param {number[][]} grid - NxN matrix to be rotated in-place.
 */
const rotate = (grid) => {
  displayBoard(grid); // Print the initial state of the grid

  const rowCount = grid.length; // Number of rows (same as number of columns for an NxN grid)

  // Step 1: Transpose the matrix (swap grid[i][j] with grid[j][i])
  // We only iterate over the upper triangle (above the diagonal) to avoid duplicate swaps.
  for (let i = 0; i < rowCount; i++) {
    for (let j = i + 1; j < rowCount; j++) {
      // Swap elements at (i, j) and (j, i)
      let temp = grid[i][j];
      grid[i][j] = grid[j][i];
      grid[j][i] = temp;
    }
  }

  // Step 2: Reverse each row to complete the 90-degree rotation
  for (let i = 0; i < grid.length; i++) {
    grid[i].reverse(); // Reverse each row in-place
  }

  displayBoard(grid); // Print the final rotated grid
};

/**
 * Displays the grid in a nicely formatted way.
 *
 * @param {number[][]} board - The NxN matrix to be displayed.
 */
var displayBoard = (board) => {
  let buffer = "";
  for (let i = 0; i < board.length; i++) {
    for (let x = 0; x < board[i].length; x++) {
      buffer += `${board[i][x]}`.padEnd(5, " "); // Format spacing for better readability
    }
    buffer += "\n";
  }
  console.log(buffer);
};

rotate(grid);
