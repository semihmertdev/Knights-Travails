# Knight Moves Solver

In this project, there is a function that finds the shortest path for a knight on a chessboard from one square to another. This function is implemented using the Breadth-First Search (BFS) algorithm.

## How to Use

1. The `knightMoves.js` file contains the JavaScript function that calculates the knight's movements and finds the shortest path.

2. The function takes two parameters:
   - Starting position (e.g., [0, 0])
   - Target position (e.g., [3, 3])

3. The output of the function is an array containing all positions from the starting point to the target point, representing the shortest path.

## Example Usage

```javascript
const knightMoves = require('./knightMoves');

// Example usages
console.log(knightMoves([0, 0], [1, 2])); // Output: [[0, 0], [1, 2]]
console.log(knightMoves([0, 0], [3, 3])); // Output: Adjusted according to example outputs
