let map = {};

const add = (word) => {
  // check if letter exists in dictionary
  let current = map;
  for (let letter of word) {
    if (!current[letter]) {
      current[letter] = {};
    }
    current = current[letter];
  }
  current["."] = "."; // create stop character
};

const search = (word) => {
  let current = map;

  for (let letter of word) {
    if (!current[letter]) {
      return false;
    }
    current = current[letter];
  }

  return current["."] === ".";
};

const startsWith = (prefix) => {
  let current = map;
  for (const letter of prefix) {
    if (!current[letter]) return false;
    current = current[letter];
  }

  return true;
};

add("catheter");
add("bat");
add("car");

console.log(JSON.stringify(map, null, 2));
console.log(search("cat"));
console.log(search("bat"));
console.log(startsWith("cath"));
