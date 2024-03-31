function numIslands(grid) {
  if (grid.length === 0 || !grid) return 0;

  const gRows = grid.length;
  const gColumns = grid[0].length;

  let islands = 0;
  const visit = Array<boolean[]>(gRows).fill(Array(gColumns).fill(false));

  const bfs = (r, c) => {
    const queue = [];

    visit[r][c] = true;
    queue.push([r, c]);

    while (queue.length) {
      const [row, column] = queue.shift();

      const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

      for (let [dr, dc] of DIRECTIONS) {
        const r = row + dr;
        const c = column + dc;

        if (
          (r >= 0 && r < gRows) &&
          (c >= 0 && r < gColumns) &&
          !visit[r][c] &&
          grid[r][c] === "1"
        ) {
          visit[r][c] = true; // mark as visited
          queue.push([r, c]);
        }
      }
    }
  };

  for (let r = 0; r < gRows; r++) {
    for (let c = 0; c < gColumns; c++) {
      if (grid[r][c] === "1" && visit[r][c] !== false) {
        islands += 1;
        bfs(r, c);
      }
    }
  }

  return islands;
}

const tc1 = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]];

console.log(numIslands(tc1));