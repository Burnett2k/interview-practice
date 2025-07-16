// ==========================================
// PROBLEM 3: PALINDROME CHECK WITH GOTCHA CONDITIONS
// ==========================================

/*
Given a string s, determine if it is a palindrome, considering only alphanumeric characters 
and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Example 2:
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Example 3:
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

GOTCHA CONDITIONS:
- Only alphanumeric characters count
- Case insensitive
- Empty string is valid palindrome
- Spaces and punctuation should be ignored
*/

function isLetter(char) {
  return "abcdefghijklmnopqrstuvwxyz".includes(char);
}
function isNumber(char) {
  return char >= "0" && char <= 9;
}

function isPalindrome(s) {
  s = s.toLowerCase();
  const validChars = [];

  for (let i = 0; i < s.length; i++) {
    const potentialChar = s[i];
    if (isNumber(potentialChar) || isLetter(potentialChar)) {
      validChars.push(potentialChar);
    }
  }
  //   console.log("validChars", validChars);

  let l = 0;
  let r = validChars.length - 1;
  // actually check if it is a palindrome with the cleaned string
  while (l < r) {
    if (validChars[l] === validChars[r]) {
      l++;
      r--;
    } else {
      return false;
    }
  }

  return true;
}
function isPalindromeNoMemory(s) {
  s = s.toLowerCase();

  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    while (l < r && !isLetter(s[l]) && !isNumber(s[l])) l++;
    while (l < r && !isLetter(s[r]) && !isNumber(s[r])) r--;

    if (s[l] === s[r]) {
      r--;
      l++;
    } else {
      return false;
    }
  }

  return true;
}

testPalindrome();
// Test Cases for Problem 3
function testPalindrome() {
  console.log("Testing Palindrome Check...");

  // Test 1: Basic palindromes
  console.log("Test 1 - Basic palindromes:");
  console.log(isPalindromeNoMemory("racecar")); // Expected: true
  console.log(isPalindromeNoMemory("hello")); // Expected: false

  // Test 2: Case insensitive
  console.log("\nTest 2 - Case insensitive:");
  console.log(isPalindromeNoMemory("Racecar")); // Expected: true
  console.log(isPalindromeNoMemory("RaceCar")); // Expected: true

  // Test 3: With spaces and punctuation (gotcha cases)
  console.log("\nTest 3 - Spaces and punctuation:");
  console.log(isPalindromeNoMemory("A man, a plan, a canal: Panama")); // Expected: true
  console.log(isPalindromeNoMemory("race a car")); // Expected: false
  console.log(isPalindromeNoMemory("Was it a car or a cat I saw?")); // Expected: true

  // Test 4: Edge cases
  console.log("\nTest 4 - Edge cases:");
  console.log(isPalindromeNoMemory("")); // Expected: true
  console.log(isPalindromeNoMemory(" ")); // Expected: true
  console.log(isPalindromeNoMemory(".,!@#")); // Expected: true (no alphanumeric)
  console.log(isPalindromeNoMemory("a")); // Expected: true
  console.log(isPalindromeNoMemory("ab")); // Expected: false

  // Test 5: Numbers included
  console.log("\nTest 5 - Numbers included:");
  console.log(isPalindromeNoMemory("A1B2b1a")); // Expected: true (A1B2b1a -> a1b2b1a)
  console.log(isPalindromeNoMemory("0P")); // Expected: false
}

/*
Key learnings:
 isNaN and Number.isNaN are weird and should probably not be used.
 Regexes can make string replacement simpler, but without googling it I likely won't be able to write out a working solution. If interviewer doesn't care, then maybe that'd be fine.
 Code had errors in Number checking and space checking
 Chose to make the code cleaner, but the drawback was extra space to store the cleaned string.
 Two pointer technique is really useful here, and quick to implement if you're familiar with it!
 Logging / debugging helped identify the problems in my code, because nobody is perfect and reading through code can be hard!
*/
