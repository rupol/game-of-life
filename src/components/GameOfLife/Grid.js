import React from "react";
import { useCanvas } from "../../hooks/useCanvas";
import ControlPanel from "./ControlPanel";

function Grid() {
  const [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
  ] = useCanvas();

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
    setCoordinates([...coordinates, currentCoord]);
  }

  function handleUndo() {
    setCoordinates(coordinates.slice(0, -1));
    console.log(coordinates);
  }

  function handleClear() {
    setCoordinates([]);
  }

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        onClick={handleCanvasClick}
      />
      <ControlPanel handleUndo={handleUndo} handleClear={handleClear} />
    </div>
  );
}

export default Grid;
