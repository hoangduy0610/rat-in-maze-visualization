// Function to solve maze
async function solveMaze() {
    const directions = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // right, down, left, up
    const allCells = mazeContainer.querySelectorAll('.cell');

    function isValid(x, y) {
        return x >= 0 && x <= maze[0].length && y >= 0 && y <= maze.length && maze[y][x] === 0 && solution[y][x] === -1;
    }

    async function solve(x, y) {
        if (x === maze[0].length - 1 && y === maze.length - 1) {
            return true; // Reached the end
        }

        for (const [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;
            if (isValid(newX, newY)) {
                const index = newY * maze[0].length + newX;
                solution[newY][newX] = 1;
                allCells[index].classList.add('path');
                await delay();
                if (await solve(newX, newY)) {
                    return true;
                }
                allCells[index].classList.remove('path');
                solution[newY][newX] = 0;
                await delay();
            }
        }
        return false;
    }

    if (await solve(0, 0)) {
        alert('Solution found!');
    } else {
        alert('No solution found!');
    }
}