import React from "react";
import "./StatusBar.css";

const StatusBar = () => {
  return (
    <div className="statusBar">
      <li>
        Current Turn: <b>PLAYER: {1}</b>
      </li>
      <li>{`PlayerOne: ${0}`}</li>
      <li>{`PlayerTwo: ${0}`}</li>
    </div>
  );
};

export default StatusBar;
