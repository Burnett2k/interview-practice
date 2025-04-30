const reverseString = (a) => {
  return a.split("").reverse().join("");
};

const reverseStringWithoutReverse = (a) => {
  // swapping?
  let start = 0;
  let end = a.length - 1;

  let stringArr = a.split("");

  while (start < end) {
    // strings are immutable so you cannot update it in place!!!
    let tmp = stringArr[start];
    stringArr[start] = stringArr[end];
    stringArr[end] = tmp;
    // [a[start], a[end]] = [a[end], a[start]];
    start++;
    end--;
  }
  return stringArr.join("");
};

const TEST_STRING = "blah";
// console.log(reverseString(TEST_STRING)); // expected halb
console.log(reverseStringWithoutReverse(TEST_STRING)); // expected halb
