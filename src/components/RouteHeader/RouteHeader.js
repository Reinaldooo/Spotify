import React from "react";
import { Link } from "react-router-dom";
//
import "./RouteHeader.scss";
import { RiArrowLeftLine } from "react-icons/ri";

export default function RouterHeader({ categoryName, path }) {
  return (
    <div className="route-header" data-testid="route-header">
      <div className="route-header__title-group">
        <Link
          to={{
            pathname: path,
            state: { categoryName: categoryName },
          }}
          className="back-button"
        >
          <RiArrowLeftLine />
        </Link>

        <span className="route-header__title">{categoryName}</span>
      </div>
    </div>
  );
}
