const binaryToDecimal = (num) => {
  let total = 0;
  let n = num.length - 1;
  let m = 1;

  while (n >= 0) {
    if (num[n] === "1") {
      // if bit is set, then add it to the total

      total += m;
    }
    m = m * 2; // double m each time
    n--;
  }
  return total;
};

console.log(binaryToDecimal("10110")); // should be 22
console.log(binaryToDecimal("01110")); // should be 14
console.log(binaryToDecimal("0100011")); // should be 35
