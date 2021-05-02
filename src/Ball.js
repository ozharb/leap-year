import React from "react";
import "./Ball.css";

function Ball(props) {
  const bounceClass =
    props.response === "a leap year!" && !props.error ? "bounce-4" : "";
  const boxColor =
    props.response === "a leap year!" && !props.error
      ? "rgba(52, 213, 110, 1)"
      : "red";
  return (
    <div className="stage">
      <div
        className={`ball ` + bounceClass}
        style={{ backgroundColor: boxColor }}
      >
        {props.year}
      </div>
    </div>
  );
}
export default Ball;
