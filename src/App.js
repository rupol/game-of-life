import React from "react";
import "./App.scss";
import { Route, NavLink } from "react-router-dom";

import GameOfLife from "./components/GameOfLife/GameOfLife";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact to="/">
          Game of Life
        </NavLink>
        <NavLink exact to="/about">
          About
        </NavLink>
      </nav>
      <Route exact path="/" component={GameOfLife} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
