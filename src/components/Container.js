import React from "react";
import { Route, useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";
import Home from "./Home";
import LifespanTimer from "./LifespanTimer";
import FreeTimeRandom from "./FreeTimeRandom";
import HealthTips from "./HealthTips";
import ExercisesTime from "./ExercisesTime";
import { ArrowIcon, ResizeIcon } from "../assets/SVGs";

const Container = () => {
  const { pathname } = useLocation();

  return (
    <div className="container">
      <Route component={PageHeader} />
      <Route path="/" exact component={Home} />
      <Route path="/time-left" component={LifespanTimer} />
      <Route path="/what-to-do" component={FreeTimeRandom} />
      <Route path="/health-tips" component={HealthTips} />
      <Route path="/exercise-time" component={ExercisesTime} />
      {pathname === "/" && (
        <div>
          <div className="horizontal-scroll">
            <div className="icon-container arrow-left">
              <ArrowIcon />
            </div>
            <div className="horizontal-scroll-right">
              <div
                className="icon-container arrow-right"
                style={{ marginRight: "-2px" }}
              >
                <ArrowIcon />
              </div>
              <div className="icon-container">
                <ResizeIcon />
              </div>
            </div>
          </div>
          <div className="vertical-scroll">
            <div className="icon-container arrow-up">
              <ArrowIcon />
            </div>
            <div
              className="icon-container arrow-down"
              style={{ marginBottom: "-4px" }}
            >
              <ArrowIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Container;
