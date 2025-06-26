// Input format: [[unitId, location, timestamp], ...]

input = [
  [1, "SW Station", 3],
  [2, "Clovis", 4],
  [3, "SW Station", 5],
  [1, "Mayfair", 10],
  [3, "Mayfair", 20],
  [2, "Downtown Fresno", 25],
];

class DispatchTravel {
  constructor(input) {
    this.input = input;
  }

  getAverageTime = (beg, end) => {
    const times = [];
    let average = 0;

    for (let i = 0; i < this.input.length - 1; i++) {
      for (let j = i + 1; j < this.input.length; j++) {
        if (
          this.input[i][1] === beg &&
          this.input[j][1] === end &&
          this.input[i][0] === this.input[j][0]
        ) {
          times.push(this.input[j][2] - this.input[i][2]);
        }
      }
    }

    if (times.length) {
      average = times.reduce((prev, curr) => prev + curr, 0) / times.length;
    }

    return average;
  };
}

const dt = new DispatchTravel(input);
console.log(dt.getAverageTime("SW Station", "Mayfair")); //-------> (7+15)/2 = 11.0
console.log(dt.getAverageTime("Clovis", "Downtown Fresno")); // -------> 21.0
