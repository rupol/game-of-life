import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import { Navbar, NavbarBrand, NavItem, NavLink, Nav } from "reactstrap";

import About from "./components/About";
import Grid from "./components/GameOfLife/Grid";

function App() {
  return (
    <div className="App">
      <Navbar color="dark" dark>
        <NavbarBrand tag={Link} to="/">
          Game of Life
        </NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink tag={Link} to="/about">
              About
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      <Route exact path="/" component={Grid} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
