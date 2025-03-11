// merge intervals [start, end]
// if there's an overlap such as [3,5] [4,7], it would become [3,7]
// fact: if there are no overlaps, it would return the same array
// if there are n overlaps (numOverlaps), we will return n - numOverlaps. I.e. 1 overlap and 4 items woudl return 3 items
//mergeIntervals([[1,3],[2,6],[8,10],[15,18]]) => Output: [[1,6],[8,10],[15,18]]

const mergeIntervals = (intervals) => {
  // edge cases
  if (intervals.length === 1) {
    return intervals;
  }
  if (intervals.length === 0) {
    return [];
  }

  // sort the intervals to ensure order is accurate
  intervals.sort((a, b) => a[0] - b[0]);
  // initialize the array
  const mergedIntervals = [intervals[0]];

  for (i = 1; i < intervals.length; i++) {
    let currentItem = mergedIntervals[mergedIntervals.length - 1];

    if (intervals[i][0] <= currentItem[1]) {
      mergedIntervals[mergedIntervals.length - 1][1] = Math.max(
        currentItem[1],
        intervals[i][1]
      );
    } else {
      mergedIntervals.push(intervals[i]);
    }
  }

  return mergedIntervals;

  // loop over intervals
  // if overlap, update item in the array
  // if no overlap, push item into the array
};

// ✅ Test Cases
console.log(
  mergeIntervals([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  mergeIntervals([
    [1, 5],
    [2, 3],
    [8, 10],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]]
console.log(
  mergeIntervals([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
console.log(mergeIntervals([[5, 10]])); // [[5,10]] (Single interval case)
console.log(mergeIntervals([])); // [] (Empty array case)
console.log(
  mergeIntervals([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
); // [[1,2],[3,4],[5,6]] (No overlaps)
console.log(
  mergeIntervals([
    [8, 10],
    [1, 3],
    [2, 6],
    [15, 18],
  ])
); // [[1,6],[8,10],[15,18]] (Unsorted input)
