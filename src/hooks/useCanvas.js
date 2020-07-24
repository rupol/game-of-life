import { useState, useEffect, useRef } from "react";

export const canvasWidth = 800;
export const canvasHeight = 600;
export const resolution = 20;

const COLS = canvasWidth / resolution;
const ROWS = canvasHeight / resolution;

export function useCanvas() {
  const canvasRef = useRef(null);
  // create array of cells representing canvas height/width/resolution
  const emptyGrid = new Array(COLS)
    .fill(null)
    .map(() => new Array(ROWS).fill(0));
  const [gridArr, setGridArr] = useState(emptyGrid);

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
    render(gridArr, ctx);
  }, [gridArr]);

  return [
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
    emptyGrid,
    gridArr,
    setGridArr,
  ];
}
