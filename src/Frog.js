import React from "react";
import "./Frog.css";
function Frog(props) {
  const bounceClass = props.response === "a leap year!" ? "bounce-4" : "";
  const boxColor = props.response === "a leap year!" ? "green" : "red";
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
export default Frog;
