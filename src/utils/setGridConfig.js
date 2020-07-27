export default function setGridConfig(
  option,
  canvasWidth,
  canvasHeight,
  resolution
) {
  const COLS = Math.floor(canvasWidth / resolution);
  const ROWS = Math.floor(canvasHeight / resolution);
  let newGrid = new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0));
  let WIDTH = 0;
  let HEIGHT = 0;
  let offsetX = 0;
  let offsetY = 0;

  if (option === "beehive") {
    WIDTH = 4;
    HEIGHT = 3;
    offsetX = Math.floor(COLS / 2 - WIDTH / 2);
    offsetY = Math.floor(ROWS / 2 - HEIGHT / 2);

    newGrid[offsetX][offsetY + 1] = 1;
    newGrid[offsetX + 1][offsetY] = 1;
    newGrid[offsetX + 1][offsetY + 2] = 1;
    newGrid[offsetX + 2][offsetY] = 1;
    newGrid[offsetX + 2][offsetY + 2] = 1;
    newGrid[offsetX + 3][offsetY + 1] = 1;
  } else if (option === "beacon") {
    WIDTH = 4;
    HEIGHT = 4;
    offsetX = Math.floor(COLS / 2 - WIDTH / 2);
    offsetY = Math.floor(ROWS / 2 - HEIGHT / 2);

    newGrid[offsetX][offsetY] = 1;
    newGrid[offsetX][offsetY + 1] = 1;
    newGrid[offsetX + 1][offsetY] = 1;
    newGrid[offsetX + 1][offsetY + 1] = 1;
    newGrid[offsetX + 2][offsetY + 2] = 1;
    newGrid[offsetX + 2][offsetY + 3] = 1;
    newGrid[offsetX + 3][offsetY + 2] = 1;
    newGrid[offsetX + 3][offsetY + 3] = 1;
  } else if (option === "pulsar") {
    // grid has to be at least [19][8] for this to play out properly
    // resolution < 40
    WIDTH = 19;
    HEIGHT = 8;
    offsetX = Math.floor(COLS / 2 - WIDTH / 2);
    offsetY = Math.floor(ROWS / 2 - HEIGHT / 2);
    newGrid[offsetX + 6][offsetY + 3] = 1;
    newGrid[offsetX + 6][offsetY + 4] = 1;
    newGrid[offsetX + 6][offsetY + 5] = 1;
    newGrid[offsetX + 7][offsetY + 3] = 1;
    newGrid[offsetX + 7][offsetY + 5] = 1;
    newGrid[offsetX + 8][offsetY + 3] = 1;
    newGrid[offsetX + 8][offsetY + 4] = 1;
    newGrid[offsetX + 8][offsetY + 5] = 1;

    newGrid[offsetX + 11][offsetY + 3] = 1;
    newGrid[offsetX + 11][offsetY + 4] = 1;
    newGrid[offsetX + 11][offsetY + 5] = 1;
    newGrid[offsetX + 12][offsetY + 3] = 1;
    newGrid[offsetX + 12][offsetY + 5] = 1;
    newGrid[offsetX + 13][offsetY + 3] = 1;
    newGrid[offsetX + 13][offsetY + 4] = 1;
    newGrid[offsetX + 13][offsetY + 5] = 1;
  } else if (option === "glider") {
    newGrid[0][0] = 1;
    newGrid[2][0] = 1;
    newGrid[1][1] = 1;
    newGrid[2][1] = 1;
    newGrid[1][2] = 1;
  } else if (option === "random") {
    newGrid = new Array(COLS)
      .fill(null)
      .map(() =>
        new Array(ROWS).fill(null).map(() => Math.floor(Math.random() * 2))
      );
  }
  return newGrid;
}
