import { useState, useEffect, useRef } from "react";

export const canvasWidth = 600;
export const canvasHeight = 600;
export const resolution = 50;

const COLS = canvasWidth / resolution;
const ROWS = canvasHeight / resolution;
// create array of cells representing canvas height/width/resolution

// TODO: fill squares based on 0(dead) or 1(alive) values in grid array
export function useCanvas() {
  const canvasRef = useRef(null);
  // create array of cells representing canvas height/width/resolution
  const grid = new Array(COLS).fill(null).map(() => new Array(ROWS).fill(0));
  const [gridArr, setGridArr] = useState(grid);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // plot grid based on grid array
    function render(grid, context) {
      for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
          const cell = grid[col][row];

          context.beginPath();
          context.rect(
            col * resolution,
            row * resolution,
            resolution,
            resolution
          );
          context.fillStyle = cell ? "black" : "white";
          context.fill();
          context.stroke();
        }
      }
    }
    // clear the canvas area before rendering the coordinates held in state
    // ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    render(gridArr, ctx);
  }, [gridArr]);

  return [
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
    gridArr,
    setGridArr,
  ];
}
