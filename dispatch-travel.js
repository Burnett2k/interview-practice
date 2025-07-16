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
  units = new Map();
  constructor(input) {
    this.input = input;

    for (const trip of this.input) {
      const unitId = trip[0];
      const location = trip[1];
      const timestamp = trip[2];
      if (this.units.get(unitId)) {
        this.units.get(unitId).set(location, timestamp);
      } else {
        this.units.set(unitId, new Map().set(location, timestamp));
      }
    }

    console.log(this.units.get(1));
  }

  // getAverageTime = (beg, end) => {
  //   const times = [];
  //   let average = 0;

  //   for (let i = 0; i < this.input.length - 1; i++) {
  //     for (let j = i + 1; j < this.input.length; j++) {
  //       if (
  //         this.input[i][1] === beg &&
  //         this.input[j][1] === end &&
  //         this.input[i][0] === this.input[j][0]
  //       ) {
  //         times.push(this.input[j][2] - this.input[i][2]);
  //       }
  //     }
  //   }

  //   if (times.length) {
  //     average = times.reduce((prev, curr) => prev + curr, 0) / times.length;
  //   }

  //   return average;
  // };

  getAverageTimeFaster = (beg, end) => {
    const times = [];
    for (const unit of this.units.keys()) {
      if (this.units.get(unit).get(beg) && this.units.get(unit).get(end)) {
        times.push(
          this.units.get(unit).get(end) - this.units.get(unit).get(beg)
        );
      }
    }

    return times.reduce((prev, curr) => prev + curr, 0) / times.length;
  };
}

const dt = new DispatchTravel(input);
console.log(dt.getAverageTimeFaster("SW Station", "Mayfair")); //-------> (7+15)/2 = 11.0
console.log(dt.getAverageTimeFaster("Clovis", "Downtown Fresno")); // -------> 21.0
