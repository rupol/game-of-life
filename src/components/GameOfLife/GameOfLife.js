import React from "react";
import Board from "./Board";
import ControlPanel from "./ControlPanel";

function GameOfLife() {
  return (
    <div className="game-of-life">
      <h1>Conway's Game of Life</h1>
      <Board />
      <ControlPanel />
    </div>
  );
}

export default GameOfLife;
