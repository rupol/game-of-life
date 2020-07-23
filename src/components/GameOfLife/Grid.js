import React, { useRef, useEffect, useState } from "react";
import ControlPanel from "./ControlPanel";

function Grid() {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);
  let canvas = undefined;
  const resolution = 40;

  useEffect(() => {
    canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 600;
    canvas.height = 600;

    // create a grid based on canvas width, height, and resolution
    function drawGrid(context) {
      // vertical lines
      for (let x = 0; x <= canvas.width; x += resolution) {
        context.moveTo(x, 0);
        context.lineTo(x, canvas.height);
      }

      // horizontal lines
      for (let y = 0; y <= canvas.height; y += resolution) {
        context.moveTo(0, y);
        context.lineTo(canvas.height, y);
      }

      context.strokeStyle = "black";
      context.stroke();
    }

    drawGrid(ctx);

    // ctx.clearRect(0, 0, canvas.height, canvas.width);
    coordinates.forEach((coordinate) => fillSquare(ctx, coordinate));
  });

  // returns the x,y coordinates of the square surrounding the current mouse coordinates
  function getCurrentSquare(canvas, e) {
    let bound = canvas.getBoundingClientRect();
    return {
      x: e.clientX - bound.left - ((e.clientX - bound.left) % resolution),
      y: e.clientY - bound.top - ((e.clientY - bound.top) % resolution),
    };
  }

  // fills a square in the canvas
  function fillSquare(context, coordinate) {
    context.fillStyle = "black";
    context.fillRect(coordinate.x, coordinate.y, resolution, resolution);
  }

  function handleCanvasClick(e) {
    let mousePosition = getCurrentSquare(canvas, e);
    const currentCoord = { x: mousePosition.x, y: mousePosition.y };
    setCoordinates([...coordinates, currentCoord]);
  }

  return (
    <div>
      <canvas ref={canvasRef} onClick={handleCanvasClick} />
      <ControlPanel setCoordinates={setCoordinates} coordinates={coordinates} />
    </div>
  );
}

export default Grid;
