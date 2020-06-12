import React from "react";
import { Link } from "react-router-dom";

export default function PlaylistItem({
  categoryId,
  description,
  id,
  image,
  name,
  path,
}) {
  return (
    <div className="playlists__item" data-testid="playlist">
      <Link
        className="playlists__item__link"
        style={{ backgroundImage: `url(${image.url})` }}
        title={name}
        to={`${path}/${categoryId}/${id}`}
      >
      </Link>

      <p className="playlists__item__description">
        <strong>{name}</strong>
        {description}
      </p>
    </div>
  );
}
