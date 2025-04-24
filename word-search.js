// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

const wordSearch = (grid, word) => {
  console.log("word is: ", word);
  const visited = new Set();

  const dfs = (row, col, i) => {
    // base case: out of bounds
    // matching letter, etc
    // reset currentLetterIndex if match not found
    if (
      withinBounds(row, col) &&
      word[i] === grid[row][col] &&
      !visited.has(`${row}-${col}`)
    ) {
      visited.add(`${row}-${col}`);

      if (i === word.length - 1) return true;
      const result =
        dfs(row - 1, col, i + 1) ||
        dfs(row + 1, col, i + 1) ||
        dfs(row, col - 1, i + 1) ||
        dfs(row, col + 1, i + 1);

      visited.delete(`${row}-${col}`);
      return result;
    } else {
      return false;
    }
  };

  const withinBounds = (row, col) =>
    row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;

  // loop over each item and execute search if we have a letter match
  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (!visited.has(`${row}-${col}`) && grid[row][col] === word[0]) {
        if (dfs(row, col, 0)) return true;
      }
    }
  }

  return false;
};

console.log(
  wordSearch(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCCED"
  )
);
