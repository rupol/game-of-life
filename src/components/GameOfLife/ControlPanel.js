import React from "react";

function ControlPanel(props) {
  return (
    <div className="controls">
      <button onClick={props.handleStart}>Play</button>
      <button>Pause</button>
      <button>Stop</button>
      <button onClick={props.handleClear}>Clear</button>
      <label htmlFor="config">
        Select a preset:
        <select onChange={props.handleConfig}>
          <option value="none">None</option>
          <option value="beehive">Beehive (still life)</option>
          <option value="beacon">Beacon</option>
          {props.resolution <= 40 && <option value="pulsar">Pulsar</option>}
          <option value="glider">Glider</option>
          <option value="random">Random</option>
        </select>
      </label>
      <label htmlFor="size">
        Cell size:
        <input
          type="range"
          step="10"
          id="size"
          min="20"
          max="50"
          onChange={props.handleSize}
        />
      </label>
    </div>
  );
}

export default ControlPanel;
