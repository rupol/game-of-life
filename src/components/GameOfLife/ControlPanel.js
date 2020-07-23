import React from "react";

function ControlPanel(props) {
  function handleUndo() {
    props.setCoordinates(props.coordinates.slice(0, -1));
  }

  function handleClear() {
    props.setCoordinates([]);
  }

  return (
    <div className="controls">
      <button>Play</button>
      <button>Pause</button>
      <button>Stop</button>
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleClear}>Clear</button>
      <select>
        <option value="none">None</option>
        <option value="still-life">Still Lifes</option>
        <option value="pulsar">Pulsar</option>
        <option value="glider">Glider</option>
      </select>
    </div>
  );
}

export default ControlPanel;
