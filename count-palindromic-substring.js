// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// brute force: create isPalindrome function
// for every substring, call that isPalindrome and increment
const countSubstringsBruteForce = (s) => {
  const isPalindrome = (str) => {
    let l = 0;
    let r = str.length - 1;
    while (l <= r) {
      //aa
      //ba
      //aaa
      //baa
      if (str[l] !== str[r]) {
        return false;
      }
      l++;
      r--;
    }
    return true;
  };
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const pali = s.substring(i, j + 1);
      if (isPalindrome(pali)) count++;
    }
  }
  return count;
};

const countSubstrings = (s) => {
  let count = 0;

  // traverse and find the odd palindromes
  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i;
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      //   console.log(l, r);
      count++;
      l--;
      r++;
    }
  }

  // traverse and find the even palindromes
  for (let i = 0; i < s.length; i++) {
    let l = i;
    let r = i + 1;
    while (l >= 0 && r <= s.length && s[l] === s[r]) {
      count++;
      l--;
      r++;
    }
  }
  return count;
};
console.log(countSubstrings("abc")); // 3 (single letters can count as a palindrome)
console.log(countSubstrings("aaa")); // 6
console.log(countSubstrings("a")); // 1
