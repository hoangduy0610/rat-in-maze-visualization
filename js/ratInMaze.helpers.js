const delay = ms => new Promise(resolve => setTimeout(resolve, ms || 1000));

// Function to generate a solution matrix
function generateSolutionMatrix(maze) {
    return maze.map(row => row.map(cell => -1));
}

// Function to generate a random maze
// Example usage:
// generateRandomMaze(5, 5);
function generateRandomMaze(n, m) {
    maze = Array.from({ length: n }, () => Array.from({ length: m }, () => {
        if (Math.random() < 0.3) {
            return 1;
        } else {
            return 0;
        }
    }));
    solution = generateSolutionMatrix(maze);
    createMaze();
}

// Function to create maze grid
function createMaze() {
    mazeContainer.innerHTML = '';
    maze.forEach((row, rowIndex) => {
        const rowElement = document.createElement('div');
        rowElement.classList.add('row');
        row.forEach((cell, cellIndex) => {
            const cellElement = document.createElement('div');
            cellElement.classList.add('cell');
            if (cell === 1) {
                cellElement.classList.add('wall');
            }
            if (rowIndex === 0 && cellIndex === 0) {
                cellElement.classList.add('start');
            }
            if (rowIndex === maze.length - 1 && cellIndex === row.length - 1) {
                cellElement.classList.add('end');
            }
            rowElement.appendChild(cellElement);
        });
        mazeContainer.appendChild(rowElement);
    });
}