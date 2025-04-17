/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let result = [];

  // loop over 0 => n
  // compute binary
  // compute set bits, put into variable
  for (let i = 0; i <= n; i++) {
    result.push(countSetBits(i));
  }
  return result;
};

var countSetBits = function (num) {
  let setBitsCount = 0;
  while (num !== 0) {
    setBitsCount += num % 2;
    num = Math.floor(num / 2);
  }
  return setBitsCount;
};
