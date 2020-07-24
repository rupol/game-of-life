import React from "react";

function ControlPanel(props) {
  return (
    <div className="controls">
      <button>Play</button>
      <button>Pause</button>
      <button>Stop</button>
      <button onClick={props.handleClear}>Clear</button>
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
