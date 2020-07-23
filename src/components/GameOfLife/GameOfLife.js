import React from "react";
import Grid from "./Grid";
import ControlPanel from "./ControlPanel";

function GameOfLife() {
  return (
    <div className="game-of-life">
      <h1>Conway's Game of Life</h1>
      <Grid />
      <ControlPanel />
    </div>
  );
}

export default GameOfLife;
