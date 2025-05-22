const longest = (s, k) => {
  let charCount = {}; // stores the character count
  let maxChar = 0; // stores the maxChar count we've seen so far

  let solution = 0;
  let l = 0; // 2 pointer approach.
  for (let r = 0; r < s.length; r++) {
    const char = s[r];
    charCount[char] = (charCount[char] || 0) + 1;
    maxChar = Math.max(maxChar, charCount[char]);
    // see if solution is valid (length of most char count - string length <= k)
    if (r - l + 1 - maxChar <= k) {
      solution = Math.max(solution, r - l + 1);
    } else {
      // not a valid solution, so decrease char count and move left pointer
      l++;
      charCount[s[l]] = charCount[s[l]] - 1;
    }
  }

  return solution;
};

console.log(longest("ABAB", 2));
console.log(longest("AABABBA", 1));
