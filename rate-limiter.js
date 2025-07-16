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
  constructor(timeLimitMs = 60000, limit = 100, strategy = "slidingWindow") {
    this.limit = limit;
    this.timeLimitMs = timeLimitMs;
    this.fixedWindowMap = {};
    this.slidingWindow = [];
    this.leakyBucket = [];
    this.tokenBucket = limit;
    this.strategy = strategy;
    if ((strategy = "fixedWindow")) this.cleanupFixedWindow();
    if ((strategy = "bucketRefill")) this.tokenBucketRefill();
    if ((strategy = "leakyBucket")) this.readLeakyBucket();
  }

  tokenBucketRefill() {
    // every second, refill a certain number of tokens up to the limit
    setInterval(() => {
      const refillRate = Math.ceil(this.limit / (this.timeLimitMs / 1000));
      // refill the bucket
      if (this.tokenBucket < this.limit) {
        if (this.tokenBucket + refillRate > this.limit) {
          // don't allow going over the cap
          this.tokenBucket = this.limit;
        } else {
          this.tokenBucket += refillRate;
        }
        console.log("bucket refilled to", this.tokenBucket);
      }
    }, 1000);
  }

  readLeakyBucket() {
    const leakRate = Math.ceil(this.limit / (this.timeLimitMs / 1000));
    setInterval(() => {
      // process current requests in queue
      for (let i = 0; i < leakRate; i++) {
        if (this.leakyBucket.length > 0) {
          console.log("running request ", this.leakyBucket.shift());
        }
      }
    }, 1000);
  }

  canProceedTokenBucket() {
    if (this.tokenBucket > 0) {
      this.tokenBucket--;
    } else {
      console.log(
        "bucket is empty, you must wait until later to make the request"
      );
    }
  }

  cleanupFixedWindow() {
    // clean up old entries somehow
    // get cutoff value for old entries
    setInterval(() => {
      const now = Date.now();
      const cutoff = now - this.timeLimitMs;

      for (const window in this.fixedWindowMap) {
        if (parseInt(window) < cutoff) {
          console.log("deleting old entries");
          delete this.fixedWindowMap[window];
        }
      }
    }, 60000);
  }

  canProceedFixedWindow(userId = null) {
    // get current time
    const currentTime = Date.now(); // # of milliseconds since the epoch;
    const window =
      Math.floor(currentTime / this.timeLimitMs) * this.timeLimitMs; // get the current window

    // per user rate limiting
    if (userId) {
      if (!this.fixedWindowMap[userId]) {
        this.fixedWindowMap[userId].windowStart = count;
      }
      //{userId: {windowStart: <countofstuff>}}

      if (this.fixedWindowMap[userId][windowStart] < this.limit) {
        this.fixedWindowMap[userId][windowStart]++;
        return true;
      }

      return false;
    }

    // anonymous user rate limiting
    if (!this.fixedWindowMap[window]) {
      this.fixedWindowMap[window] = 0;
    }
    console.log(this.fixedWindowMap[window]);
    if (this.fixedWindowMap[window] < this.limit) {
      this.fixedWindowMap[window]++;
      return true;
    }

    console.log("rejected");
    return false;
  }

  canProceedSlidingWindow() {
    // get current time string e.g. 10:13:25
    const currentTimeMs = Date.now();

    this.slidingWindow = this.slidingWindow.filter((val) => {
      return currentTimeMs - val < this.timeLimitMs;
    });

    if (this.slidingWindow.length >= this.limit) {
      console.log("we hit the limit dude!", this.slidingWindow.length);
    } else {
      this.slidingWindow.push(Date.now());
    }

    // loop through all item in until you find the area where requests are within window:

    // purge old entries from the data set
    // if items in set < limit, let it go through and add request to set
    // else, reject the request
  }

  canProceedLeakyBucket() {
    if (this.leakyBucket.length < this.limit) {
      this.leakyBucket.push("request");
    } else {
      console.log("too many items already in bucket");
    }
  }

  runRequest() {
    if (this.strategy === "fixedWindow" && this.canProceedFixedWindow()) {
      // blah
      return true;
    } else if (
      this.strategy === "tokenBucket" &&
      this.canProceedTokenBucket()
    ) {
      return true;
    } else if (
      this.strategy === "slidingWindow" &&
      this.canProceedSlidingWindow()
    ) {
      return true;
    } else if (
      this.strategy === "leakyBucket" &&
      this.canProceedLeakyBucket()
    ) {
      return true;
    }

    return false;

    // throw new Error("not implemented");
  }
}

// const rl = new RateLimiter(1000, 1, "slidingWindow");
// const rl = new RateLimiter(1000, 1, "leakyBucket");
// const rl = new RateLimiter(6000, 1000, "tokenBucket");
const rl = new RateLimiter(6000, 2, "fixedWindow");
// for (let i = 0; i < 1005; i++) {
//   rl.runRequest();
// }
// setTimeout(() => rl.runRequest(), 60001);
setInterval(() => rl.runRequest(), 500); // every second, run a request
