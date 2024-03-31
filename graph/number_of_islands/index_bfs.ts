function numIslands(grid: string[][]): number {
    if (grid.length === 0 || !grid) return 0;

    const gRows = grid.length;
    const gColumns = grid[0].length;

    let islands = 0;
    const visit = Array.from(Array(gRows), () => {
        return new Array(gColumns).fill(false)
    })

    const bfs = (r: number, c: number) => {
        if (!visit[r][c]) {
            islands++;

            const queue: [number, number][] = [];

            visit[r][c] = true;
            queue.push([r, c])

            while (queue.length > 0) {
                const [row, column] = queue.shift();
                const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

                for (let [dr, dc] of DIRECTIONS) {
                    const _r = row + dr;
                    const _c = column + dc;

                    if ((_r >= 0 && _r < gRows) &&
                        (_c >= 0 && _c < gColumns) &&
                        !visit[_r][_c] &&
                        grid[_r][_c] === '1'
                    ) {
                        visit[_r][_c] = true; // mark as visited
                        queue.push([_r, _c]);
                    }
                }
            }
        }

    }

    for (let r = 0; r < gRows; r++) {
        for (let c = 0; c < gColumns; c++) {
            if (grid[r][c] === '1') {
                bfs(r, c);
            }
        }
    }


    return islands;
};
