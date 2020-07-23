import { useState, useEffect, useRef } from "react";

export const canvasWidth = 600;
export const canvasHeight = 600;
export const resolution = 40;

// create a grid based on canvas width, height, and resolution
function drawGrid(context) {
  // vertical lines
  for (let x = 0; x <= canvasWidth; x += resolution) {
    context.moveTo(x, 0);
    context.lineTo(x, canvasHeight);
  }

  // horizontal lines
  for (let y = 0; y <= canvasHeight; y += resolution) {
    context.moveTo(0, y);
    context.lineTo(canvasHeight, y);
  }

  context.strokeStyle = "black";
  context.stroke();
}

export function useCanvas() {
  const canvasRef = useRef(null);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    drawGrid(ctx);

    // clear the canvas area before rendering the coordinates held in state

    coordinates.forEach((coordinate) => fillSquare(ctx, coordinate));
  });

  return [
    coordinates,
    setCoordinates,
    canvasRef,
    canvasWidth,
    canvasHeight,
    resolution,
  ];
}

// fills a square in the canvas
function fillSquare(context, coordinate) {
  context.fillStyle = "black";
  context.fillRect(coordinate.x, coordinate.y, resolution, resolution);
}
