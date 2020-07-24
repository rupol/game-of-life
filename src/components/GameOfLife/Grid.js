import React, { useState } from "react";
import { useCanvas } from "../../hooks/useCanvas";
import findNextGrid from "../../utils/findNextGrid";
import ControlPanel from "./ControlPanel";

function Grid() {
  const [
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
    emptyGrid,
    gridArr,
    setGridArr,
  ] = useCanvas();
  const [currentGen, setCurrentGen] = useState(0);

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
    setGridArr(emptyGrid);
  }

  function advanceOneGen() {
    setGridArr(findNextGrid(gridArr, canvasWidth, canvasHeight, resolution));
    setCurrentGen(currentGen + 1);
  }

  function handleStart() {
    advanceOneGen();
  }

  return (
    <div>
      <h2>Current Generation: {currentGen}</h2>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
      <ControlPanel handleClear={handleClear} handleStart={handleStart} />
    </div>
  );
}

export default Grid;
