const printColumnWise = (grid) => {
  let nums = [];
  for (i = 0; i < grid[0].length; i++) {
    for (j = 0; j < grid.length; j++) {
      nums.push(grid[j][i]);
    }
  }
  return nums;
};

const printRowWise = (grid) => {
  let nums = [];
  // loop through the row
  for (i = 0; i < grid.length; i++) {
    for (j = 0; j < grid[i].length; j++) {
      nums.push(grid[i][j]);
    }
  }
  return nums;
};

console.log(
  printColumnWise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //1,4,7,2,5,8,3,6,9
console.log(
  printRowWise([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // 1,2,3,4,5,6,6,8,9
