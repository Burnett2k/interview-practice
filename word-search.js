// 79. Word Search
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells,
// where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

const wordSearch = (grid, word) => {
  const rows = grid.length;
  const columns = grid.length;
  let visited = new Set();

  const dfs = (i, j, letterIndex) => {
    if (letterIndex === word.length) return true;
    const coords = `${i}-${j}`;
    if (
      i < 0 ||
      j < 0 ||
      i >= rows ||
      j >= columns ||
      grid[i][j] !== word[letterIndex] ||
      visited.has(coords)
    )
      return false;

    // we found a char!
    visited.add(coords);

    const result =
      dfs(i + 1, j, letterIndex + 1) ||
      dfs(i - 1, j, letterIndex + 1) ||
      dfs(i, j + 1, letterIndex + 1) ||
      dfs(i, j - 1, letterIndex + 1);

    visited.delete(coords);

    return result;
  };

  for (let i = 0; i <= rows; i++) {
    for (let j = 0; j <= columns; j++) {
      console.log(i, j);
      if (dfs(i, j, 0) === true) return true;
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
