import React from "react";
//
import "./Loading.scss";

export default function Loading({ text }) {
  return (
    <React.Fragment>
      <div className="spinner" data-testid="loading">
        <div className="dot1"></div>
        <div className="dot2"></div>
      </div>

      <p className="loading__text">{text}</p>
    </React.Fragment>
  );
}
