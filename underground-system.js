// ==========================================
// PROBLEM 2: DESIGN UNDERGROUND SYSTEM
// ==========================================

/*
An underground railway system is keeping track of customer travel times between different stations.
They are using this data to calculate the average time it takes to travel from one station to another.

Implement the UndergroundSystem class:

1. checkIn(id, stationName, t): A customer with id card equal to id, checks in at the station 
   stationName at time t.
2. checkOut(id, stationName, t): A customer with id card equal to id, checks out from the station 
   stationName at time t.
3. getAverageTime(startStation, endStation): Returns the average time it takes to travel from 
   startStation to endStation.

You may assume all calls to checkIn and checkOut methods are consistent. A customer checked in at 
time t1 at some station will check out at time t2 (where t2 > t1) at another station.

Example:
UndergroundSystem undergroundSystem = new UndergroundSystem();
undergroundSystem.checkIn(45, "Leyton", 3);
undergroundSystem.checkIn(32, "Paradise", 8);
undergroundSystem.checkIn(27, "Leyton", 10);
undergroundSystem.checkOut(45, "Waterloo", 15);  // Customer 45 "Leyton" -> "Waterloo" in 15-3 = 12
undergroundSystem.checkOut(27, "Waterloo", 20);  // Customer 27 "Leyton" -> "Waterloo" in 20-10 = 10
undergroundSystem.checkOut(32, "Cambridge", 22); // Customer 32 "Paradise" -> "Cambridge" in 22-8 = 14
undergroundSystem.getAverageTime("Paradise", "Cambridge"); // return 14.00000
undergroundSystem.getAverageTime("Leyton", "Waterloo");    // return (12 + 10) / 2 = 11.00000
*/

class UndergroundSystem {
  constructor() {
    // const sample = {
    //   1: [{ Leyton: 3 }, { Waterloo: 15 }],
    // };
    this.map = {};
  }

  checkIn(id, stationName, t) {
    // TODO: Customer with id checks in at stationName at time t
    this.map[id] = {};
    this.map[id][stationName] = t;
  }

  checkOut(id, stationName, t) {
    // TODO: Customer with id checks out from stationName at time t
    this.map[id][stationName] = t;
  }

  getAverageTime(startStation, endStation) {
    const { map } = this;
    let numTrips = 0;
    let totalTime = 0;
    for (const key of Object.keys(map)) {
      if (map[key][startStation] && map[key][endStation]) {
        numTrips++;
        totalTime += map[key][endStation] - map[key][startStation];
      }
    }
    return totalTime / numTrips;
  }
}

// Test Cases for Problem 2
function testUndergroundSystem() {
  console.log("Testing UndergroundSystem...");

  const system = new UndergroundSystem();

  // Test 1: Basic functionality
  console.log("Test 1 - Basic Operations:");
  system.checkIn(45, "Leyton", 3);
  system.checkIn(32, "Paradise", 8);
  system.checkIn(27, "Leyton", 10);
  system.checkOut(45, "Waterloo", 15);
  system.checkOut(27, "Waterloo", 20);
  system.checkOut(32, "Cambridge", 22);

  console.log(system.getAverageTime("Paradise", "Cambridge")); // Expected: 14.0
  console.log(system.getAverageTime("Leyton", "Waterloo")); // Expected: 11.0

  // Test 2: Multiple trips same route
  console.log("\nTest 2 - Multiple trips same route:");
  system.checkIn(10, "Leyton", 24);
  system.checkOut(10, "Waterloo", 38); // 14 minutes
  console.log(system.getAverageTime("Leyton", "Waterloo")); // Expected: (12+10+14)/3 = 12.0

  // Test 3: Different routes
  console.log("\nTest 3 - Different routes:");
  system.checkIn(20, "Waterloo", 50);
  system.checkOut(20, "Paradise", 65); // 15 minutes
  console.log(system.getAverageTime("Waterloo", "Paradise")); // Expected: 15.0
}

testUndergroundSystem();
