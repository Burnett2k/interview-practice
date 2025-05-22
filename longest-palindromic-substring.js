// 5. Longest Palindromic Substring
// Given a string s, return the longest palindromic substring in s.

// Example 1:
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindromeBruteForce = function (s) {
  const isPalindrome = (str) => {
    let l = 0;
    let r = str.length - 1;
    while (l <= r) {
      if (str[l] !== str[r]) return false;
      l++;
      r--;
    }
    return true;
  };
  let longestP = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let pali = s.substring(i, j + 1);
      if (isPalindrome(pali)) longestP = Math.max(longestP, pali.length);
    }
  }
  return longestP;
};

let testFunction = longestPalindromeBruteForce;
console.log(testFunction("babad")); // 3
console.log(testFunction("cbbd")); // 2
