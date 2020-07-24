export default function findNextGrid(
  grid,
  canvasWidth,
  canvasHeight,
  resolution
) {
  // copy current grid array
  const nextGrid = grid.map((arr) => [...arr]);

  for (let col = 0; col < grid.length; col++) {
    for (let row = 0; row < grid[col].length; row++) {
      const cell = grid[col][row];

      let neighbors = 0;

      // find number of cell neighbors
      // loop through the 3x3 grid with the cell at its center
      for (let i = -1; i < 2; i++) {
        for (let j = -1; j < 2; j++) {
          // ignore the cell itself
          if (i === 0 && j === 0) {
            continue;
          }

          // edges are ignored
          // TODO: fix bug where glider turns into block at edge
          const cellX = col + i;
          const cellY = row + j;

          if (
            cellX >= 0 &&
            cellY >= 0 &&
            cellX < canvasWidth / resolution &&
            cellY < canvasHeight / resolution
          ) {
            // add up all cell neighbors
            const currentNeighbor = grid[col + i][row + j];
            neighbors += currentNeighbor;
          }
        }
      }
      // we now have the total number of neighbors for the current cell
      // apply GoL rules
      if (cell === 1 && neighbors <= 1) {
        // each living cell with one or no neighbors dies, as if by solitude
        nextGrid[col][row] = 0;
      } else if (cell === 1 && neighbors >= 4) {
        // each living cell with four or more neighbors dies, as if by overpopulation
        nextGrid[col][row] = 0;
      } else if (cell === 0 && neighbors === 3) {
        // each dead cell with three neighbors becomes populated
        nextGrid[col][row] = 1;
      }
    }
  }
  return nextGrid;
}
