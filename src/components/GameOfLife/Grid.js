import React, { useRef, useState } from "react";

import { useCanvas } from "../../hooks/useCanvas";

import getCurrentSquare from "../../utils/getCurrentSquare";
import findNextGrid from "../../utils/findNextGrid";
import setGridConfig from "../../utils/setGridConfig";

import ControlPanel from "./ControlPanel";
import { Badge } from "reactstrap";

function Grid() {
  const interval = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [speed, setSpeed] = useState(500);

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
  ] = useCanvas();

  function update() {
    setGridArr((prevGridArr) =>
      findNextGrid(prevGridArr, canvasWidth, canvasHeight, resolution)
    );
    setCurrentGen((prevGen) => prevGen + 1);
  }

  function handleCanvasClick(e) {
    handleStop();
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
  function handleNext() {
    if (isRunning) {
      handleStop();
    }
    update();
  }

  function handleStart() {
    setIsRunning(true);
    interval.current = setInterval(() => requestAnimationFrame(update), speed);
  }

  function handleStop() {
    setIsRunning(false);
    clearInterval(interval.current);
  }

  function handleClear() {
    handleStop();
    setGridArr(emptyGrid);
    setCurrentGen(0);
  }

  function handleConfig(e) {
    handleStop();
    setGridArr(
      setGridConfig(e.target.value, canvasWidth, canvasHeight, resolution)
    );
    setCurrentGen(0);
  }

  function handleSize(e) {
    setResolution(e.target.value);
    handleClear();
  }

  function handleSpeed(e) {
    handleStop();
    setSpeed(e.target.value);
    handleStart();
  }

  return (
    <div className="game container">
      <h1 className="display-3">Conway's Game of Life</h1>
      <h2>
        Generation <Badge>{currentGen}</Badge>
      </h2>

      <div className="grid">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          onClick={handleCanvasClick}
        />
      </div>
      <ControlPanel
        handleClear={handleClear}
        handleNext={handleNext}
        handleStart={handleStart}
        handleStop={handleStop}
        handleConfig={handleConfig}
        handleSize={handleSize}
        handleSpeed={handleSpeed}
        resolution={resolution}
        isRunning={isRunning}
      />
    </div>
  );
}

export default Grid;
