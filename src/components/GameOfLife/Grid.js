import React, { useState } from "react";

import { useCanvas } from "../../hooks/useCanvas";

import getCurrentSquare from "../../utils/getCurrentSquare";
import findNextGrid from "../../utils/findNextGrid";
import setGridConfig from "../../utils/setGridConfig";

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

  function handleCanvasClick(e) {
    let mousePosition = getCurrentSquare(e, canvasRef, resolution);
    const currentCoord = { x: mousePosition.x, y: mousePosition.y };
    // console.log(
    //   `grid[${currentCoord.x / resolution}][${currentCoord.y / resolution}]`
    // );
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

  // control panel function handlers
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

  function handleConfig(e) {
    setGridArr(
      setGridConfig(e.target.value, canvasWidth, canvasHeight, resolution)
    );
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
      <ControlPanel
        handleClear={handleClear}
        handleStart={handleStart}
        handleConfig={handleConfig}
        resolution={resolution}
      />
    </div>
  );
}

export default Grid;
