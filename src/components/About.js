import React from "react";
import { Jumbotron } from "reactstrap";

function About() {
  return (
    <div className="about container">
      <h1 className="display-1">About</h1>
      <p className="lead">
        Game of Life is a <strong>cellular-automaton</strong>, zero player game,
        developed by John Conway in 1970.
      </p>
      <p>
        The game is played on a grid of square cells and its evolution is only
        determined by its initial state.
      </p>
      <Jumbotron className="text-dark">
        <h2 className="display-4">Rules</h2>
        <hr className="my-3" />
        <h3>If a "living" cell has...</h3>
        <ul>
          <li>
            ...<strong>one or no</strong> living neighbors, it dies, as if by
            solitude.
          </li>
          <li>
            ...<strong>four or more</strong> living neighbors, it dies, as if by
            overpopulation.
          </li>
          <li>
            ...<strong>two or three</strong> living neighbors, it survives.
          </li>
        </ul>
        <h3>If a "dead" cell has...</h3>
        <ul>
          <li>
            ...<strong>three</strong> living neighbors, it is born.
          </li>
        </ul>
      </Jumbotron>
      <h2>Turing Machines</h2>
      <p>
        Game of Life is <strong>universal</strong> - that is, we can use it to
        build a Turing-machine
      </p>
      <h3>A Turing machine has...</h3>
      <ul>
        <li>a finite set of states</li>
        <li>rules for transitioning between states</li>
        <li>an infinite sequence of cells (called a "tape")</li>
        <li>
          a set of symbols describing the possible contents of each cell in the
          tape
        </li>
        <li>the ability to read and write the symbol in a single cell</li>
        <li>the ability to move along the tape to access different cells</li>
      </ul>

      <p>
        Something is considered "Turing-complete" if it has rules followed in
        sequence that possess the same computational power as a Turing machine
      </p>
      <p className="lead">
        This means Game of Life is as powerful as any computer!
      </p>
    </div>
  );
}

export default About;
