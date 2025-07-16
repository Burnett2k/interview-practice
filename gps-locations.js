// Build functions/classes that support the following use cases...
// 1. We have users (officers) that wear a GPS device that
//    streams location data to our system in real-time.
// 2. We also have users (dispatchers) who want to know
//    where a specific officer was at a specific point in time.
//    If there is no location at the timestamp specified,
//    then return a location with the closest timestamp.

class Officer {
  // gpsStreamData = [{x: <coord> y: coord, time: timestamp}]
  constructor(gpsStreamData = []) {
    this.gpsStreamData = gpsStreamData;
  }

  //[1,2,3,9,10]
  getLocationAtTime(time) {
    console.log(`retrieving location for ${time}`);
    let times = this.gpsStreamData;
    let resIndex = 0;

    // binary search to look for exact timestamp;

    let l = 0;
    let r = times.length - 1;

    while (l <= r) {
      let pivot = Math.floor((r + l) / 2);
      resIndex = pivot;
      if (time === times[pivot].time) {
        console.log("found an exact match");
        return times[pivot];
      } else if (time > times[pivot].time) {
        l = pivot + 1;
      } else {
        r = pivot - 1;
      }
    }

    const candidates = [];
    if (resIndex > 0) candidates.push(resIndex - 1);
    if (resIndex < times.length - 1) candidates.push(resIndex);

    console.log(candidates);

    if (candidates.length === 1) {
      return times[candidates[0]];
    } else {
      if (
        Math.abs(times[candidates[0]].time - time) <
        Math.abs(times[candidates[1]].time - time)
      ) {
        resIndex = candidates[0];
      } else {
        resIndex = candidates[1];
      }
    }

    return times[resIndex];
  }
}

let x = 0;
let y = 0;
let currentTime = Date.now();
let MILLISECONDS_IN_HOUR = 1000 * 60 * 60; //(3.6 million)
let testTime = currentTime - 5 * MILLISECONDS_IN_HOUR;

// create 10 entries with officer moving. 5 in the past and 5 in the future.
const testDataStream = [
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
  { x: x++, y: y--, time: (testTime += MILLISECONDS_IN_HOUR) },
];

console.log(testDataStream);
const officer = new Officer(testDataStream);
console.log(officer.getLocationAtTime(Date.now()));
