const hammingWeightNaive = (num) => {
  let result = "";
  let weight = 0;
  // how do I elegantly handle the base case of 0? Just return early?
  while (num >= 0) {
    result = (num % 2) + result; // can get the mod 1 here instead of looping?
    num = Math.floor(num / 2);
    if (num === 0) break;
  }
  // convert to binary
  console.log("binary is ", result);

  for (const letter of result) {
    if (letter === "1") weight++;
  }

  return weight;
};

const hammingWeightSimpler = (num) => {
  // space complexity? constant since just one variable
  // time complexity O(log n) because it halves the number each time?
  let weight = 0;
  // how do I elegantly handle the base case of 0? Just return early?
  while (num >= 0) {
    if (num % 2 === 1) weight++;
    num = Math.floor(num / 2);
    if (num === 0) break;
  }

  return weight;
};

console.log(hammingWeightSimpler(0)); // 0
console.log(hammingWeightSimpler(1)); // 1
console.log(hammingWeightSimpler(2)); // 1
console.log(hammingWeightSimpler(30)); // 4
