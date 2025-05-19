// you are given an integer representing the number of cents
// if you have coins valued at 25, 10, 5 and 1, return the minimum amount of
// coins needed to give back
// There will always be a solution.

const minCoins = (cents) => {
  const quarter = 25;
  const dime = 10;
  const nickel = 5;
  const penny = 1;

  let numCoins = 0;

  // strategy: use highest value coins first and then go to smaller values as long as they fit
  while (cents > 0) {
    if (cents >= quarter) {
      cents -= quarter;
    } else if (cents >= dime) {
      cents -= dime;
    } else if (cents >= nickel) {
      cents -= nickel;
    } else {
      cents -= penny;
    }
    numCoins++;
  }

  return numCoins;
};

//test cases
console.log(minCoins(4)); // 4 pennies
console.log(minCoins(26)); // 2 coins (25 and 1);
console.log(minCoins(75)); // 3 coins
console.log(minCoins(113)); // 8 (25, 25, 25, 25, 10, 1,1,1)
