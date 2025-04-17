const hammingWeight = (num) => {
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

console.log(hammingWeight(0)); // 0
console.log(hammingWeight(1)); // 1
console.log(hammingWeight(2)); // 1
console.log(hammingWeight(30)); // 4
