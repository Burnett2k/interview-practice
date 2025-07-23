// ==========================================
// PROBLEM 1: INSERT DELETE GETRANDOM O(1)
// ==========================================

/*
Design a data structure that supports all following operations in average O(1) time.

1. insert(val): Inserts an item val to the set if not already present.
2. remove(val): Removes an item val from the set if present.
3. getRandom(): Returns a random element from current set of elements.
   Each element must have the same probability of being returned.

Example:
RandomizedSet randomSet = new RandomizedSet();
randomSet.insert(1); // returns true
randomSet.remove(2); // returns false (2 was not in the set)
randomSet.insert(2); // returns true
randomSet.getRandom(); // returns 1 or 2 randomly
randomSet.remove(1); // returns true
randomSet.insert(2); // returns false (2 was already in the set)
randomSet.getRandom(); // returns 2
*/

// Can I even use a Javascript set for this or is that not allowed?
// {key: value} => {index: 'number', 'i-number': index}
// {0: 1, "i-1": 0}
// insert if doesn't exist
// delete if it exists
// keep track of how many items are in the first map

class RandomizedSet {
  constructor() {
    this.lookupMap = {}; //{<val>: <index>}
    this.values = []; //[val]
  }

  insert(val) {
    const exists = val in this.lookupMap;
    if (exists) {
      return false;
    } else {
      const newIndex = this.values.length;
      this.lookupMap[val] = newIndex;
      this.values.push(val);
      return true;
    }
  }
  //{0: 0, 1: 1} => [0, 1]
  // {1: 0} => [1]
  remove(val) {
    const exists = val in this.lookupMap;
    if (exists === true) {
      // get the index of the item we want to delete in the array
      const indexToDelete = this.lookupMap[val];
      // get the last item in the array, so we can swap it
      const lastValue = this.values[this.values.length - 1];

      this.values[indexToDelete] = lastValue;
      this.values.pop();
      delete this.lookupMap[val];
      return true;
    } else {
      return false;
    }
  }

  getRandom() {
    let index = Math.floor(Math.random() * this.values.length); // convert to number between 0 and item
    return this.values[index];
  }
}

testRandomizedSet();

// Test Cases for Problem 1
function testRandomizedSet() {
  console.log("Testing RandomizedSet...");

  const randomSet = new RandomizedSet();

  // Test 1: Insert new elements
  console.log("Test 1 - Insert:");
  console.log(randomSet.insert(1)); // Expected: true
  console.log(randomSet.insert(2)); // Expected: true
  console.log(randomSet.insert(3)); // Expected: true
  console.log(randomSet.insert(1)); // Expected: false (duplicate)

  // Test 2: Remove elements
  console.log("\nTest 2 - Remove:");
  console.log(randomSet.remove(2)); // Expected: true
  console.log(randomSet.remove(4)); // Expected: false (not present)
  console.log(randomSet.remove(1)); // Expected: true

  // Test 3: Get random element
  console.log("\nTest 3 - Get Random:");
  randomSet.insert(10);
  randomSet.insert(20);
  randomSet.insert(30);

  for (let i = 0; i < 5; i++) {
    console.log(`Random: ${randomSet.getRandom()}`); // Should be 3, 10, 20, or 30
  }

  // Test 4: Edge cases
  console.log("\nTest 4 - Edge Cases:");
  const emptySet = new RandomizedSet();
  console.log(emptySet.remove(1)); // Expected: false

  const singleSet = new RandomizedSet();
  singleSet.insert(42);
  console.log(singleSet.getRandom()); // Expected: 42
  console.log(singleSet.remove(42)); // Expected: true
}
