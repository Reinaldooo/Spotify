import React from "react";
//
import "./RecentTracks.scss";
import { Track } from "../../containers"

export default function RecentTracks({ data }) {
  console.log(data, "rece")

  return (
    <div className="categories" data-testid="categories">
      <div className="container">
            <h3 className="categories__title">Músicas recentes</h3>
            <div className="categories__content">
              {data.length > 0 && data.map((track, index) => (<Track key={`${index} - ${track.id}`} track={track} />))}
            </div>
      </div>
    </div>
  );
}
