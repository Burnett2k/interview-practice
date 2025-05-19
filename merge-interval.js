const merge = (intervals) => {
  // If there's 0 or 1 interval, nothing to merge
  if (intervals.length < 2) return intervals;

  // Start with the first interval
  let merged = [intervals[0]];

  // Go through each remaining interval
  for (let i = 1; i < intervals.length; i++) {
    // Get the last interval in merged list
    let lastMerged = merged[merged.length - 1];
    let current = intervals[i];

    // Check if current interval overlaps with the last merged one
    if (current[0] <= lastMerged[1]) {
      // Merge them by extending the end time
      lastMerged[1] = Math.max(lastMerged[1], current[1]);
    } else {
      // No overlap, so we can safely add it
      merged.push(current);
    }
  }

  return merged;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
); // [[1,6], [8,10], [15,18]]
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
); // [[1,5]]
