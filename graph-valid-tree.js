// 2. Graph Valid Tree

// Problem:
// Given n nodes labeled 0 to n - 1 and a list of undirected edges, determine if the graph is a valid tree (i.e. fully connected and has no cycles).
// Key insight: cycle detection should avoid parents

function validTree(n, edges) {
  const visited = new Set();
  const adjList = new Map();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  for (const [a, b] of edges) {
    // needs to go both ways here
    adjList.get(a).push(b);
    adjList.get(b).push(a);
  }
  console.log(adjList);

  // if we revisit a parent, it is ok and not a cycle
  const dfs = (node, parent) => {
    if (visited.has(node)) return false;
    visited.add(node);
    for (const neighbor of adjList.get(node)) {
      if (neighbor === parent) continue;
      if (!dfs(neighbor, node)) return false;
    }
    return true;
  };

  if (!dfs(0)) {
    return false;
  }
  return visited.size === n;
}

function validTreeBfs(n, edges) {
  // need to create a queue

  const adjList = new Map();
  const visited = new Set();
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  for (const [a, b] of edges) {
    // needs to go both ways here
    adjList.get(a).push(b);
    adjList.get(b).push(a);
  }

  let queue = [[0, -1]];
  let parent = 0;

  while (queue.length) {
    const queueSize = queue.length;
    const [node, parent] = queue.shift();

    if (visited.has(node)) {
      return false;
    }

    visited.add(node);

    for (const neighbor of adjList.get(node)) {
      if (neighbor === parent) continue;
      queue.push([neighbor, node]);
    }
  }

  return visited.size === n;
}

console.log(
  validTreeBfs(5, [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
  ])
); // true
console.log(
  validTreeBfs(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [1, 3],
    [1, 4],
  ])
); // false (cycle)
console.log(
  validTreeBfs(4, [
    [0, 1],
    [2, 3],
  ])
); // false (disconnected)
console.log(validTreeBfs(1, [])); // true (single node)
