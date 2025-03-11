// problem: given a string s, find the length of the longest substring without repeating characters
// example: "abcabcbb" => 3 (abc, bca)
// example: "bbbbb" => 1 (b)

// 2 pointer approach
const longestSubstring = (inputString) => {
  let l = 0;
  let r = 0;
  let maxCount = 0;
  const charSet = new Set();

  // loop over all items
  while (r < inputString.length) {
    while (charSet.has(inputString[r])) {
      charSet.delete(inputString[l]);
      l++;
    }

    maxCount = Math.max(maxCount, r - l + 1);
    charSet.add(inputString[r]);
    r++;
  }

  console.log(charSet);
  return maxCount;
};

// ✅ Test Cases
console.log(longestSubstring("pwwkew")); // Expected: 3 ("wke")
console.log(longestSubstring("bbbbbbb")); // Expected: 1 ("b")
console.log(longestSubstring("abcabcbb")); // Expected: 3 ("abc")
console.log(longestSubstring("dvdf")); // Expected: 3 ("vdf")
console.log(longestSubstring("")); // Expected: 0 (empty string)
console.log(longestSubstring("abcdef")); // Expected: 6 ("abcdef")

// naive slow approach
// const longestSubstring = (inputString) => {
//   // initialize temp string
//   let temp = "";
//   let maxCount = 0;

//   for (char of inputString) {
//     const duplicateIndex = temp.indexOf(char);
//     if (duplicateIndex >= -1) {
//       temp = temp.slice(duplicateIndex + 1);
//     }
//     temp += char;
//     maxCount = Math.max(temp.length, maxCount);
//   }
//   return maxCount;
// };
// ✅ Test Cases
