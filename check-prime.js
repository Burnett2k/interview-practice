// check if a number is prime. What is prime number? only divisible by itself right?

// 1, 7, 5, 11, 13, etc
// needs to have a product of two smaller numbers

const checkPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true; // 2 is a prime number
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};

console.log(checkPrime(0)); // false
console.log(checkPrime(1)); // false
console.log(checkPrime(9)); // false
console.log(checkPrime(8)); // false
console.log(checkPrime(2)); // true
console.log(checkPrime(3)); // true
console.log(checkPrime(4)); // false
console.log(checkPrime(17)); // true
console.log(checkPrime(25)); // false
