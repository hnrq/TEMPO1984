import React, { Component } from "react";
import Program from "./ProgramShortcut";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="program-container">
          <Program programName="Lifespan calculator" to="time-left" />
          <Program programName="Enjoy better" to="what-to-do" />
          <Program programName="Live more" to="what-to-do" />
          <Program programName="Exercises" to="exercise-time" />
        </div>
    </div>
    );
  }
}
