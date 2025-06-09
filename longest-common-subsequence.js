const lcsRecursive = (text1, text2, i = 0, j = 0) => {
  // base case
  if (i >= text1.length || j >= text2.length) {
    return 0;
  }

  // if characters match
  if (text1[i] === text2[j]) {
    return 1 + lcsRecursive(text1, text2, i + 1, j + 1);
  }

  return Math.max(
    lcsRecursive(text1, text2, i + 1, j),
    lcsRecursive(text1, text2, i, j + 1)
  );
};
const testFunction = lcsRecursive;
console.log(testFunction("aceasdf", "aceasdf"));
