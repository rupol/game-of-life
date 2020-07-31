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
      <div className="flex-half">
        <Button className="icon-btn" onClick={props.handleNext}>
          <i className="material-icons">skip_next</i>
        </Button>
        {props.isRunning ? (
          <Button className="icon-btn" onClick={props.handleStop}>
            <i className="material-icons">stop</i>
          </Button>
        ) : (
          <Button className="icon-btn" onClick={props.handleStart}>
            <i className="material-icons">play_arrow</i>
          </Button>
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
      </div>
      <div className="slider flex">
        <Label htmlFor="size">cell size</Label>
        <Input
          type="range"
          step="10"
          id="size"
          min="10"
          max="50"
          onChange={props.handleSize}
        />
      </div>
      <div className="slider reversed flex">
        <Label htmlFor="speed">speed</Label>
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
