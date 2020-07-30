import { useState, useEffect, useRef } from "react";
// var randomColor = require('randomcolor');
// import randomColor from "randomcolor";

export const canvasWidth = 800;
export const canvasHeight = 800;

export function useCanvas() {
  const [resolution, setResolution] = useState(20);
  const [currentGen, setCurrentGen] = useState(0);
  const canvasRef = useRef(null);

  const COLS = Math.floor(canvasWidth / resolution);
  const ROWS = Math.floor(canvasHeight / resolution);

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
          if (cell) {
            var randomColor = require("randomcolor");
            var color = randomColor({
              hue: "purple",
              luminosity: "light",
            });
            context.fillStyle = `${color}`;
            // console.log(color);
          } else {
            context.fillStyle = "black";
          }

          context.fill();
          context.strokeStyle = "#212529";
          context.stroke();
        }
      }
    }

    render(gridArr, ctx);
  }, [gridArr, resolution, currentGen]);

  return [
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
    setResolution,
    emptyGrid,
    gridArr,
    setGridArr,
    currentGen,
    setCurrentGen,
  ];
}
