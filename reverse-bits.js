/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // convert to binary
  let b = n.toString(2).padStart(32, 0);
  // pad with zeros so it's the same thing

  // cannot pad with zeros unless you know the length of the bits
  b = b.split("").reverse().join("");

  return parseInt(b, 2);
};

console.log(reverseBits(0b00000010100101000001111010011100)); // should be 00111001011110000010100101000000
