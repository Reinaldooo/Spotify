import React from "react";
//
import "./Loading.scss";

export default function Loading({ text }) {
  return (
    <React.Fragment>
      <div class="spinner" data-testid="loading">
        <div class="dot1"></div>
        <div class="dot2"></div>
      </div>

      <p className="loading__text">{text}</p>
    </React.Fragment>
  );
}
