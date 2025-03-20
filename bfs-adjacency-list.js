// 📝 Problem: Breadth-First Search on a Graph

// Problem Statement

// You are given an undirected graph represented as an adjacency list (a dictionary in JavaScript). Implement BFS traversal, starting from a given node.

// Input
// 	•	A graph represented as an adjacency list.
// 	•	A starting node from which to begin traversal.

// Output
// 	•	An array representing the order in which nodes are visited.

// 1 -- 2 -- 4
// |    |
// 3    5 -- 6
//      |
//      6

const graph = {
  1: [2, 3],
  2: [1, 4, 5],
  3: [1, 6],
  4: [2],
  5: [2, 6],
  6: [3, 5],
};

// starting at 1:
// Expected output: [1, 2, 3, 4, 5, 6]

const adjacencyList = (graph, start) => {
  // use queue to store order of traversal
  const queue = [start];
  // define the output
  const path = [];
  // store visited so we don't have an endless loop
  const visited = new Set();

  while (queue.length) {
    const node = queue.shift(); // take item to traverse
    if (!visited.has(node)) {
      visited.add(node);
      path.push(node);
    }

    // get child elements and add to queue for traversal
    for (let i = 0; i < graph[node].length; i++) {
      if (!visited.has(graph[node][i])) queue.push(graph[node][i]);
    }
  }

  return path;
};

console.log(adjacencyList(graph, 1));
