function knightMoves(start, end) {
    // Directions a knight can move in terms of x and y coordinates
    const knightMoves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    // Board dimensions (8x8 for a standard chessboard)
    const boardSize = 8;

    // Queue for BFS, each element is [current position, path array]
    let queue = [[start, [start]]];

    // Visited set to keep track of visited positions
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let [current, path] = queue.shift();

        // If we've reached the end position, return the path
        if (current[0] === end[0] && current[1] === end[1]) {
            return path;
        }

        // Explore all possible knight moves from the current position
        for (let move of knightMoves) {
            let nextX = current[0] + move[0];
            let nextY = current[1] + move[1];

            // Check if the move is within bounds of the board
            if (nextX >= 0 && nextX < boardSize && nextY >= 0 && nextY < boardSize) {
                let nextPos = [nextX, nextY];
                let nextPosStr = nextPos.toString();

                // If the position hasn't been visited, mark it as visited and enqueue it
                if (!visited.has(nextPosStr)) {
                    visited.add(nextPosStr);
                    queue.push([nextPos, path.concat([nextPos])]);
                }
            }
        }
    }

    // If no path is found (shouldn't happen in valid chessboard moves)
    return [];
}

// Examples
console.log(knightMoves([0,0],[1,2])); // Output: [[0,0],[1,2]]
console.log(knightMoves([0,0],[3,3])); // Output: [[0,0],[2,1],[3,3]] or [[0,0],[1,2],[3,3]]
console.log(knightMoves([3,3],[0,0])); // Output: [[3,3],[1,2],[0,0]] or [[3,3],[2,1],[0,0]]
console.log(knightMoves([0,0],[7,7])); // Output: [[0,0],[2,1],[4,2],[6,3],[7,5],[5,6],[7,7]]
