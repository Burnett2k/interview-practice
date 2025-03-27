// In mathematics, the Fibonacci sequence is a sequence in which each
// element is the sum of the two elements that precede it. Numbers that are part of the
// create a function which generates the fibonacci sequence up until n. Start from 0 and 1
// N represents the # of iterations

// iterative
const fiberative = (n) => {
  // start with 0 and 1
  let prev = 0;
  let curr = 1;
  console.log(prev);
  console.log(curr);
  // constant memory (just storing prev and current)
  // linear time as we're storing the previous result and passing it forward!

  for (let i = 0; i < n; i++) {
    const newNum = prev + curr;
    console.log(newNum);
    prev = curr;
    curr = newNum;
  }
};

fiberative(8);

//recursive
const fibcursive = (n, map = {}) => {
  if (map[n]) return map[n];
  if (n <= 1) return n;
  map[n] = fibcursive(n - 1, map) + fibcursive(n - 2, map);
  return map[n];
};

fibcursive(8, { 0: 0, 1: 1 });
