import React from "react";
//
import "./Tracks.scss";
import { Loading, RouteHeader } from "../../components";
import Track from './Track';

export default function Tracks({ playlistName, data, isLoading, backPath }) {
  return (
    <div className="tracks" data-testid="tracks">
      <div className="container">
        <RouteHeader name={playlistName} path={backPath} />

        {isLoading ? (
          <Loading text="Carregando..." />
        ) : (
          <div className="tracks__content">
            {data.length > 0 && data.map(({ track }, index) => (<Track key={`${index} - ${track.id}`} track={track} />))}
          </div>
        )}
      </div>
    </div>
  );
}
