import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function CategoryItem({ id, icon, name }) {
  const { url } = useRouteMatch();
  return (
    <div
      className="categories__item"
      data-testid="category"
      style={{ backgroundImage: `url(${icon.url})` }}
    >
      <Link
        to={`${url}/${id}`}
        className="categories__item__link"
      >
        <span className="categories__item__title">{name}</span>
      </Link>
    </div>
  );
}
