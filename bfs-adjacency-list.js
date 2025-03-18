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
  let queue = [start];
  const visited = new Set();
  const result = [];

  while (queue.length > 0) {
    const node = queue.shift();

    if (!visited.has(node)) {
      visited.add(node);
      result.push(node);

      for (let neighbor of graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push(neighbor);
        }
      }
    }
  }
  return result;
};

console.log(adjacencyList(graph, 1));
