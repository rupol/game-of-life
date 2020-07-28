import React, { useEffect } from "react";

import { useCanvas } from "../../hooks/useCanvas";

import getCurrentSquare from "../../utils/getCurrentSquare";
import findNextGrid from "../../utils/findNextGrid";
import setGridConfig from "../../utils/setGridConfig";

import ControlPanel from "./ControlPanel";
import { Badge } from "reactstrap";

function Grid() {
  const [
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
    isRunning,
    setIsRunning,
  ] = useCanvas();

  function advanceOneGen() {
    // console.log(Date.now(), currentGen);
    setGridArr(findNextGrid(gridArr, canvasWidth, canvasHeight, resolution));
    setCurrentGen(currentGen + 1);
    requestAnimationFrame(advanceOneGen);
  }

  // useEffect(() => {
  //   requestAnimationFrame(advanceOneGen);
  // }, []);

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
    setCurrentGen(0);
  }

  function handleNext() {
    setGridArr(findNextGrid(gridArr, canvasWidth, canvasHeight, resolution));
    setCurrentGen(currentGen + 1);
  }

  // start and stop the animation
  function handleStart() {
    setIsRunning(true);
    console.log(isRunning);
  }

  function handleStop() {
    setIsRunning(false);
    console.log(isRunning);
  }

  function handleConfig(e) {
    setGridArr(
      setGridConfig(e.target.value, canvasWidth, canvasHeight, resolution)
    );
    setCurrentGen(0);
  }

  function handleSize(e) {
    setResolution(e.target.value);
  }

  return (
    <div className="game container">
      <h1 className="display-3">Conway's Game of Life</h1>

      <div className="grid">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          onClick={handleCanvasClick}
        />
      </div>
      <div className="flex">
        <h2>
          Generation <Badge>{currentGen}</Badge>
        </h2>

        <ControlPanel
          handleClear={handleClear}
          handleNext={handleNext}
          handleStart={handleStart}
          handleStop={handleStop}
          handleConfig={handleConfig}
          handleSize={handleSize}
          resolution={resolution}
        />
      </div>
    </div>
  );
}

export default Grid;
