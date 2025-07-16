class Cyclist {
  gpsData = [];
  constructor(name) {
    this.name = name;
  }

  appendGpsData({ x, y, timestamp = Date.now() }) {
    this.gpsData.push({ x, y, timestamp });
  }

  getLocationLinear(timestamp = Date.now()) {
    // linear scan, so doesn't really matter if we return early.
    console.log("searching for ", timestamp);

    console.time();
    let closestLocationObj = this.gpsData[0];
    let closestTimestamp = this.gpsData[0].timestamp;
    for (let i = 1; i < this.gpsData.length; i++) {
      if (
        Math.abs(closestLocationObj.timestamp - timestamp) >
        Math.abs(this.gpsData[i].timestamp - timestamp)
      ) {
        closestTimestamp = this.gpsData[i].timestamp;
        closestLocationObj = this.gpsData[i];
      }
    }
    console.timeEnd();

    return closestLocationObj;
  }

  getLocationBinary(timestamp = Date.now()) {
    // this will be a O(log n) search as it is a binary search.
    console.log("searching for ", timestamp);
    //situations: exact match, closest is on the edge, closest is somewhere in middle
    console.time();
    let l = 0;
    let r = this.gpsData.length - 1;

    // handle edge cases outside of bounds
    if (timestamp > this.gpsData[r].timestamp) {
      return this.gpsData[r];
    }
    if (timestamp < this.gpsData[l].timestamp) {
      return this.gpsData[l];
    }

    while (l < r) {
      let pivot = Math.floor((r + l) / 2);
      if (this.gpsData[pivot].timestamp === timestamp) {
        return this.gpsData[pivot];
      } else if (this.gpsData[pivot].timestamp > timestamp) {
        r = pivot - 1;
      } else {
        l = pivot + 1;
      }
    }
    console.log("we have now reached the insertion point");
    console.log(this.gpsData[l - 1]);
    console.log(this.gpsData[l]);
    console.timeEnd();
    if (
      Math.abs(this.gpsData[l - 1].timestamp - timestamp) >
      Math.abs(this.gpsData[l].timestamp - timestamp)
    ) {
      return this.gpsData[l];
    } else {
      return this.gpsData[l - 1];
    }
  }
}

const o1 = new Cyclist("bob");
let oldTimestamp = Date.now() - 10000;
for (let i = 0; i < 100000; i++) {
  o1.appendGpsData({ x: i, y: -i, timestamp: (oldTimestamp += 1000) });
}
// console.log(o1.getLocationLinear(Date.now() - 9090));
console.log(o1.getLocationBinary(Date.now() + 100000));
