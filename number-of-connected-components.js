// 1. Number of Connected Components

// Problem:
// You are given n nodes labeled 0 to n - 1 and a list of undirected edges. Return the number of connected components in the graph.

function countComponents(n, edges) {
  let adjList = new Map();

  let visited = new Set();
  // initialize adjacency list
  for (let i = 0; i < n; i++) {
    adjList.set(i, []);
  }
  // since graph is undirected, add edges in both lists
  for (const [a, b] of edges) {
    adjList.get(a).push(b);
    adjList.get(b).push(a);
  }
  //   console.log(adjList);
  let count = 0;
  const dfs = (node) => {
    if (!visited.has(node)) {
      visited.add(node);
      console.log("visited ", node);
      for (const neighbor of adjList.get(node)) {
        dfs(neighbor);
      }
    } else {
      console.log("already visited ", node);
    }
  };

  for (let i = 0; i < n; i++) {
    // loop over all nodes
    if (!visited.has(i)) {
      // only dfs if we haven't already visited that node
      // if we haven't visited the node yet, we are starting a new dfs and need to increment the count
      count++;
      dfs(i);
    }
  }

  // do a dfs on the first item and see how far you get
  return count;
}

console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [3, 4],
  ])
); // → 2
console.log(
  countComponents(5, [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
  ])
); // → 1
console.log(countComponents(4, [])); // → 4
console.log(
  countComponents(6, [
    [0, 1],
    [2, 3],
    [4, 5],
  ])
); // → 3
