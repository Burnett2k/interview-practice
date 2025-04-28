// build a function to shuffle a sorted array of numbers in some kind of random order

const NUM_ITEMS = 10;
let nums = Array(10)
  .fill()
  .map((_, i) => i);

// console.log(nums);

const shuffle = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    let seed = Math.floor(Math.random() * nums.length);
    let temp = nums[i];
    nums[i] = nums[seed];
    nums[seed] = temp;
  }
  console.log(nums);
};

const fisherYatesNaive = (nums) => {
  let shuffled = [];
  const numLength = nums.length;
  for (let i = 0; i < numLength; i++) {
    let seed = Math.floor(Math.random() * nums.length);
    // push into new array
    shuffled.push(nums[seed]);
    // delete from old array
    nums.splice(seed, 1);
  }
  console.log(shuffled);
};

const fisherYatesDurstenFeld = (nums) => {
  for (let i = nums.length - 1; i >= 1; i--) {
    let seed = Math.floor(Math.random() * (i + 1));
    [nums[i], nums[seed]] = [nums[seed], nums[i]];
  }
  console.log(nums);
};

// shuffle(nums);
// fisherYatesNaive(nums);
fisherYatesDurstenFeld(nums);
