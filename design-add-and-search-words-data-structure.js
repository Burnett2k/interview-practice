// 211. Design Add and Search Words Data Structure
// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure
// that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.
const assert = require("assert");

var WordDictionary = function () {
  this.map = {};
  this.STOP_WORD = "stop";
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let current = this.map;
  for (const letter of word) {
    if (!current[letter]) {
      current[letter] = {};
    }
    current = current[letter];
  }
  current["stop"] = this.STOP_WORD;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word, node = this.map, depth = 0) {
  console.log(
    `Searching for "${word}" at depth ${depth}, node keys: ${Object.keys(node)}`
  );

  if (word.length === depth && node["stop"] === this.STOP_WORD) {
    console.log(
      `Reached end of word. Node contains stop?: ${
        node["stop"] === this.STOP_WORD
      }`
    );

    return true;
  }

  const letter = word[depth];

  if (letter === ".") {
    console.log("Wildcard detected. Exploring all paths...");
    for (const key in node) {
      if (this.search(word, node[key], depth + 1)) {
        return true;
      }
      return false;
    }
  }

  if (!node[letter]) {
    console.log(`No match found for letter "${letter}".`);
    return false;
  } else {
    return this.search(word, node[letter], depth + 1);
  }
};
const wordDictionary = new WordDictionary();
wordDictionary.addWord("cap"); // Goes in 'c' -> 'a' -> 'p'
wordDictionary.addWord("car"); // Goes in 'c' -> 'a' -> 'r'
wordDictionary.addWord("cut"); // Goes in 'c' -> 'u' -> 't'

console.log(wordDictionary.search("c..")); // ❌ Should be true, but might return false!
console.log(wordDictionary.search("car")); // ❌ Should be true, but might return false!
console.log(wordDictionary.search("c.")); // ❌ Should be true, but might return false!
console.log(wordDictionary.search("c...")); // ❌ Should be true, but might return false!
