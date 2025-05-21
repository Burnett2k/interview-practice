// Given an array of intervals intervals where intervals[i] = [starti, endi],
//  return the minimum number of intervals you need to remove to make
// the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping.
// For example, [1, 2] and [2, 3] are non-overlapping.

const eraseOverlapIntervals = (intervals) => {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let lastKeptEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] < lastKeptEnd) {
      count++;
    } else {
      // keep it
      lastKeptEnd = intervals[i][1];
    }
  }
  return count;
};

const isOverlap = (first, second) => {
  return second[0] < first[1]; // need to overlap by > 1
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 3],
    [2, 3],
    [3, 4],
  ])
); // ➞ 1 (remove [1,3])

// Example 1:
// Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
// Output: 1
// Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.
console.log(
  eraseOverlapIntervals([
    [3, 5],
    [1, 3],
    [2, 4],
  ])
); // return 1 (1,3)

// Example 2:
// Input: intervals = [[1,2],[1,2],[1,2]]
// Output: 2
// Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ])
); // return 2 (1,2) x 2

// Example 3:
// Input: intervals = [[1,2],[2,3]]
// Output: 0
// Explanation: You don't need to remove any of the intervals since they're already non-overlapping.
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ])
); // return 0 (no overlaps)
