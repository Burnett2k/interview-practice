/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  // when you have a single match it seems pretty straightforward
  // two pass approach:

  // store the 0 coords in a data structure

  // iterate over them and set all the rows and cols to 0 associated to each one!
  let zeros = [];

  const setRow = (row, col) => {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[row][j] > 0) {
        matrix[row][j] = 0;
      }
    }
  };
  const setCol = (row, col) => {
    for (let j = 0; j < matrix.length; j++) {
      // don't set -1 to zero until final pass
      if (matrix[j][col] > 0) {
        matrix[j][col] = 0;
      }
    }
  };

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === 0) {
        matrix[row][col] = -1;
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === -1) {
        setRow(row, col);
        setCol(row, col);
      }
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === -1) {
        matrix[row][col] = 0;
      }
    }
  }

  console.log(zeros);
  console.log(matrix);
};

console.log(
  setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ])
); // expected output , [[1,0,1],[0,0,0],[1,0,1]]

console.log(
  setZeroes([
    [0, 1, 2, 0],
    [3, 4, 5, 2],
    [1, 3, 1, 5],
  ])
); // expected Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]
