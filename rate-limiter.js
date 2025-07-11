// 1. Rate Limiter Implementation
// Problem: Design and implement a rate limiter that allows a maximum of
// N requests per time window (e.g., 100 requests per minute). Your solution should:

// Support different rate limiting algorithms (token bucket, sliding window, etc.)
// Handle concurrent requests safely
// Be efficient in both time and space
// Explain trade-offs between different approaches

// Why this matters: This is one of the most frequently reported Stripe questions and tests distributed systems knowledge.

class RateLimiter {
  // only allow 100 requests per minute.
  // sliding window
  // token bucket, etc
  strategies = ["fixedWindow", "slidingWindow", "tokenBucket", "leakyBucket"];
  constructor(limit = 100, strategy = "slidingWindow") {
    this.limit = limit;
    this.requestMap = {};
    this.tokenBucket = limit;
    this.strategy = strategy;
    if ((strategy = "bucketRefill")) this.tokenBucketRefill();
  }

  tokenBucketRefill() {
    // every second, refill a certain number of tokens up to the limit
    setInterval(() => {
      const refillRate = Math.ceil(100 / 60);
      // refill the bucket
      if (this.tokenBucket < this.limit) {
        console.log("refilling", this.tokenBucket);
        this.tokenBucket += refillRate;
      }
    }, 1000);
  }

  // property for maximum N requests per time window. What would sliding window look like? 10:01 can receive 100 requests, once it becomes 10:02, more requests can be added

  // 1. check if request can proceed by seeing if current minute exists in the map and the # of request is < N
  //
  // {
  //     "time": '# of requests'
  // }

  canProceedBucket() {
    if (this.tokenBucket > 0) {
      this.tokenBucket--;
    } else {
      console.log(
        "bucket is empty, you must wait until later to make the request"
      );
    }
  }

  // private method used to detect if the request can move forward or not
  canProceedWindow() {
    // get current time string e.g. 10:13
    const currentTime = new Date();
    const timeString = `${currentTime.getHours()}:${currentTime.getMinutes()}`;

    if (this.requestMap[timeString]) {
      // we've already gotten a hit for this time period
      if (this.requestMap[timeString] < this.limit) {
        this.requestMap[timeString] = this.requestMap[timeString] += 1;
        return true;
      } else {
        console.log("you have hit the rate limit!");
        return false;
      }
    } else {
      // don't have hits for the current minute, so update map.
      console.log("creating new entry in map for ", timeString);
      this.requestMap[timeString] = 1;
      return true;
    }
  }

  // public method used to run requests. Will only run the rquest if rate limiting isn't in effect.
  runRequest() {
    if (this.strategy === "slidingWindow" && this.canProceedWindow()) {
      // blah
    } else if (this.strategy === "tokenBucket" && this.canProceedBucket()) {
      // blah
    }
  }
}

const rl = new RateLimiter(100, "tokenBucket");
for (let i = 0; i < 1000; i++) {
  rl.runRequest();
}
setTimeout(() => rl.runRequest(), 60001);
