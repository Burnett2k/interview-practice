const assert = require("assert");
let map = Array(27).fill(null);

const getIndex = (letter) => letter.charCodeAt(0) - 97;

const add = (word) => {
  let current = map;

  for (const letter of word) {
    if (current[getIndex(letter)] === null) {
      current[getIndex(letter)] = Array(27).fill(null);
    }
    current = current[getIndex(letter)];
  }

  current[26] = true;
};

const search = (word) => {
  let current = map;

  for (const letter of word) {
    if (current[getIndex(letter)] === null) return false;
    current = current[getIndex(letter)];
  }

  return current[26] === true;
};

const startsWith = (prefix) => {
  let current = map;
  for (const letter of prefix) {
    if (current[getIndex(letter)] === null) return false;
    current = current[getIndex(letter)];
  }

  // if we get this far, then it's a match
  return true;
};

add("cat");
add("bat");
add("car");

console.log(JSON.stringify(map, null, 2));

assert(search("cat") === true);
assert(search("beebee") === false);
assert(startsWith("ca") === true, "startsWith('ca') should return true");
