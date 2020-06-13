import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//
import "./RecentTracks.scss";
import { Track } from "../../containers"
import { toggleRecentsButton } from "../../actions"

export default function RecentTracks({ data }) {
  const dispatch = useDispatch();
  const { hideRecent, toggleTitle } = useSelector(state => state.settings);

  const handleClick = () => {
    if(hideRecent) {
      dispatch(toggleRecentsButton({
        toggleTitle: "Ocultar",
        hideRecent: false
      }))
      return
    }
    dispatch(toggleRecentsButton({
      toggleTitle: "Mostrar",
      hideRecent: true
    }))
  }

  return (
    <div className="recents" data-testid="recents">
      <div className="container">
            <h3 className="recents__title">Músicas recentes</h3>
            <button
               className="recents__toggle"
               onClick={handleClick}
            >
              {toggleTitle}
            </button>
            <div className="recents__content">
              {(data.length > 0 && !hideRecent) && data.map((track, index) => (<Track key={`${index} - ${track.id}`} track={track} />))}
            </div>
      </div>
    </div>
  );
}
