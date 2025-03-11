// 🚀 Problem: Insert Interval

// You are given:
// 	1.	A list of non-overlapping intervals sorted by their start times.
// 	2.	A new interval that you want to insert into this list while maintaining order.

// Your task is to insert the new interval into the list and merge any overlapping intervals if necessary.
//insertInterval([[1,2], [3,5], [6,7], [8,10], [12,16]], [4,8]) => [[1,2], [3,10], [12,16]]

const insertInterval = (intervals, interval) => {
  // we won't ever have to merge intervals from the original list, unless we merge from the new interval first
  // start with a new array, and try to do in place later on.
  console.log("hi");
  let mergedIntervals = [];
  let i = 0;
  let n = intervals.length;

  // push in pre merged intervals
  while (i < n && intervals[i][1] < interval[0]) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  // calculate new interval (if necessary)
  while (i < n && intervals[i][0] <= interval[1]) {
    interval[0] = Math.min(intervals[i][0], interval[0]);
    interval[1] = Math.max(intervals[i][1], interval[1]);
    i++;
  }
  mergedIntervals.push(interval);

  // add remaining intervals
  while (i < n) {
    mergedIntervals.push(intervals[i]);
    i++;
  }

  return mergedIntervals;
};

// ✅ Test Cases
console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
      [8, 10],
      [12, 16],
    ],
    [4, 8]
  )
); // [[1,2], [3,10], [12,16]]

console.log(
  insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1,5], [6,9]]

console.log(
  insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
    ],
    [8, 9]
  )
); // [[1,2], [3,5], [6,7], [8,9]]
