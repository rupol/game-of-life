import React from "react";

function ControlPanel(props) {
  return (
    <div className="controls">
      <button onClick={props.handleStart}>Play</button>
      <button>Pause</button>
      <button>Stop</button>
      <button onClick={props.handleClear}>Clear</button>
      <select onChange={props.handleConfig}>
        <option value="none">None</option>
        <option value="beehive">Beehive (still life)</option>
        <option value="beacon">Beacon</option>
        {props.resolution <= 40 && <option value="pulsar">Pulsar</option>}
        <option value="glider">Glider</option>
        <option value="random">Random</option>
      </select>
    </div>
  );
}

export default ControlPanel;
