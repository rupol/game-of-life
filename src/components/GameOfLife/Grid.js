import React, { useState, useEffect, useRef } from "react";
// import { useCanvas } from "../../hooks/useCanvas";
import ControlPanel from "./ControlPanel";

function Grid() {
  // const [
  //   canvasRef,
  //   canvasWidth,
  //   canvasHeight,
  //   resolution,
  //   gridArr,
  //   setGridArr,
  // ] = useCanvas();
  const canvasWidth = 600;
  const canvasHeight = 600;
  const resolution = 50;

  const COLS = canvasWidth / resolution;
  const ROWS = canvasHeight / resolution;

  // TODO: fill squares based on 0(dead) or 1(alive) values in grid array
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

  // returns the x,y coordinates of the square surrounding the current mouse coordinates
  function getCurrentSquare(e) {
    let bound = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - bound.left - ((e.clientX - bound.left) % resolution),
      y: e.clientY - bound.top - ((e.clientY - bound.top) % resolution),
    };
  }

  function handleCanvasClick(e) {
    let mousePosition = getCurrentSquare(e);
    const currentCoord = { x: mousePosition.x, y: mousePosition.y };
    // setCoordinates([...coordinates, currentCoord]);
    const newGrid = gridArr.map((row, key) => {
      if (key === currentCoord.x / resolution) {
        return row.map((item, colKey) => {
          if (colKey === currentCoord.y / resolution) {
            return item === 0 ? 1 : 0;
          } else {
            return item;
          }
        });
      } else {
        return row;
      }
    });
    setGridArr(newGrid);
  }

  function handleClear() {
    setGridArr(grid);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
      <ControlPanel handleClear={handleClear} />
    </div>
  );
}

export default Grid;
