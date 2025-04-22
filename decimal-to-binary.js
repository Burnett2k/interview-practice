// converts a decimal number to a binary representation
const toBinary = (num) => {
  let result = "";

  // length is 32 because it's a 32 bit integer
  let n = num;
  while (n > 0) {
    result = (n % 2) + result;
    n = Math.floor(n / 2);
  }
  console.log(`${num} in binary is ${result}`);
  return result;
};

toBinary(75);
toBinary(14);
toBinary(35);
toBinary(964176192);
