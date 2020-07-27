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
    <div className="controls form-row">
      <Button onClick={props.handleStart}>Play</Button>
      <Button onClick={props.handleClear}>Clear</Button>
      <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle>Select a Preset</DropdownToggle>
        <DropdownMenu onClick={props.handleConfig}>
          <DropdownItem value="none">None</DropdownItem>
          <DropdownItem value="beehive">Beehive (still life)</DropdownItem>
          <DropdownItem value="beacon">Beacon</DropdownItem>
          {props.resolution <= 40 && (
            <DropdownItem value="pulsar">Pulsar</DropdownItem>
          )}
          <DropdownItem value="glider">Glider</DropdownItem>
          <DropdownItem value="random">Random</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
      <div className="slider">
        <Label htmlFor="size">Cell size:</Label>
        <Input
          type="range"
          step="10"
          id="size"
          min="20"
          max="50"
          onChange={props.handleSize}
        />
      </div>
    </div>
  );
}

export default ControlPanel;
