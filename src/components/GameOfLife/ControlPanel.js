import React, { useState } from "react";
import {
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
} from "reactstrap";

function ControlPanel(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <div className="flex">
      <Button onClick={props.handleNext}>Next</Button>
      {props.isRunning ? (
        <Button onClick={props.handleStop}>Stop</Button>
      ) : (
        <Button onClick={props.handleStart}>Start</Button>
      )}
      <Button onClick={props.handleClear}>Clear</Button>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>Select a Preset</DropdownToggle>
        <DropdownMenu onClick={props.handleConfig}>
          <DropdownItem value="human">Human</DropdownItem>
          <DropdownItem value="beehive">Beehive (still life)</DropdownItem>
          <DropdownItem value="beacon">Beacon</DropdownItem>
          {props.resolution <= 40 && (
            <DropdownItem value="pulsar">Pulsar</DropdownItem>
          )}
          <DropdownItem value="glider">Glider</DropdownItem>
          {props.resolution <= 20 && (
            <DropdownItem value="glider-gun">Glider Gun</DropdownItem>
          )}
          <DropdownItem value="random">Random</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <div className="slider">
        <Label htmlFor="size">Cell size:</Label>
        <Input
          type="range"
          step="10"
          id="size"
          min="10"
          max="50"
          onChange={props.handleSize}
        />
      </div>
      <div className="slider reversed">
        <Label htmlFor="speed">Speed:</Label>
        <Input
          type="range"
          step="10"
          id="size"
          min="10"
          max="1000"
          onChange={props.handleSpeed}
        />
      </div>
    </div>
  );
}

export default ControlPanel;
