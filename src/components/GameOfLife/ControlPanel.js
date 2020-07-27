import React, { useState } from "react";
import {
  Button,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Input,
  Label,
  Container,
  Row,
  Col,
} from "reactstrap";

function ControlPanel(props) {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <Container className="controls">
      <Row>
        <Col>
          <Button onClick={props.handleStart}>Play</Button>
          <Button>Pause</Button>
          <Button>Stop</Button>
          <Button onClick={props.handleClear}>Clear</Button>
        </Col>
        <Col>
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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
          </Dropdown>
          <Label htmlFor="size">
            Cell size:
            <Input
              type="range"
              step="10"
              id="size"
              min="20"
              max="50"
              onChange={props.handleSize}
            />
          </Label>
        </Col>
      </Row>
    </Container>
  );
}

export default ControlPanel;
