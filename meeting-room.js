const canAttendMeetings = (nums) => {
  // brute force see if any meeting overlaps with any other by trying every combination
  if (nums.length === 1) return true;

  nums.sort((a, b) => a[0] - b[0]);

  for (let i = 1; i < nums.length; i++) {
    // see if previous and current items overlap
    let prevEnd = nums[i - 1][1];
    let currBeg = nums[i][0];
    if (prevEnd > currBeg) {
      // if the next intervals start is prior to last intervals end, there is an overlap and we can early return false
      //5,10 15,20 0, 30
      return false;
    }
    // keep looping and looking for overlaps
  }

  return true;
};

console.log(
  canAttendMeetings([
    [0, 30],
    [5, 10],
    [15, 20],
  ])
); // false → overlaps
console.log(
  canAttendMeetings([
    [7, 10],
    [2, 4],
  ])
); // true → no overlaps
