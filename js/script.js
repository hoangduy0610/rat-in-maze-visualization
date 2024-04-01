const mazeContainer = document.querySelector('.maze-container');
const solveButton = document.querySelector('button');

// Example maze (0 represents an empty cell, 1 represents a wall)
let maze = [
    [0, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 0, 0, 0]
];

let solution = generateSolutionMatrix(maze);

// Create maze on page load
createMaze();
