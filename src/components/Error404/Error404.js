import React from "react";
import { Link } from "react-router-dom";

export default function Error404({ text }) {
  return (
    <div className="error-404">
      <div>
        <p>Sorry, we could not find the page you are looking for!</p>
        <p>
          Click <Link to="/">here</Link> to go back!
        </p>
      </div>
    </div>
  );
}
