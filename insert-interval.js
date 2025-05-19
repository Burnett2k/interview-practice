// 🚀 Problem: Insert Interval

// You are given:
// 	1.	A list of non-overlapping intervals sorted by their start times.
// 	2.	A new interval that you want to insert into this list while maintaining order.

// Your task is to insert the new interval into the list and merge any overlapping intervals if necessary.
//insertInterval([[1,2], [3,5], [6,7], [8,10], [12,16]], [4,8]) => [[1,2], [3,10], [12,16]]
//insertInterval([[1,2], [3,8]) => [[1,2], [3,10], [12,16]]

const insertInterval = (intervals, interval) => {
  let beg = [];
  let merged = [];
  let end = [];

  // loop through intervals and add to beg until we detect an overlap
  let curr = 0;
  while (curr < intervals.length && intervals[curr][1] < interval[0]) {
    beg.push(intervals[curr]);
    curr++;
  }

  while (curr < intervals.length && intervals[curr][0] <= interval[1]) {
    // keep merging until there's no longer an overlap
    interval[0] = Math.min(intervals[curr][0], interval[0]);
    interval[1] = Math.max(intervals[curr][1], interval[1]);
    curr++;
  }
  merged.push(interval);

  // addd the remaining items
  while (curr < intervals.length) {
    end.push(intervals[curr]);
    curr++;
  }

  return beg.concat(merged, end);
};

// ✅ Test Cases
console.log(
  ...insertInterval(
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
  ...insertInterval(
    [
      [1, 3],
      [6, 9],
    ],
    [2, 5]
  )
); // [[1,5], [6,9]]

console.log(
  ...insertInterval(
    [
      [1, 2],
      [3, 5],
      [6, 7],
    ],
    [8, 9]
  )
); // [[1,2], [3,5], [6,7], [8,9]]
