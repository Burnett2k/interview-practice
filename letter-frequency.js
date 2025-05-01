// given a string s, return the character with the highest frequency. If it is a tie, return any of the tie characters

const freq = (s) => {
  const charMap = new Map();

  // ignore spaces!

  for (const char of s) {
    if (char !== " ") {
      if (charMap.has(char)) {
        // increment by 1
        charMap.set(char, charMap.get(char) + 1);
      } else {
        // set to 1
        charMap.set(char, 1);
      }
    }
  }

  return charMap;
};

const highestFreq = (charMap) => {
  let highest = 0;
  for (const [key, value] of charMap.entries()) {
    highest = Math.max(highest, value);
  }
  for (const [key, value] of charMap.entries()) {
    if (value === highest) return key;
  }
};

console.log(highestFreq(freq("mary had a little lamb")));
console.log(highestFreq(freq("hello world")));
