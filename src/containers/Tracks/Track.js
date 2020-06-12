import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsPlayFill, BsVolumeUpFill } from 'react-icons/bs';
//
import './Track.scss';


export default function Track({ track }) {
  const playingNowId = useSelector(state => state.content.playingNowId);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying && playingNowId === track.id) {
      setIsPlaying(false);
      return;
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (playingNowId === track.id) {
      return;
    }
    setIsPlaying(false);
  }, [playingNowId, track.id])

  return (
    <div
      className={`track ${isPlaying && 'is-playing'}`}
      data-testid="track"
      onClick={handleClick}>
      <div className="track__play">
        <div className="track__play__wrapper">
          <BsPlayFill className="track__play__icon" />
          <BsVolumeUpFill className="track__play__icon" />
        </div>
      </div>

      <div className="track__info">
        <span className="track__name">{track.name}</span>

        <span className="track__artists">
        {track.artists.length && track.artists.map(({ name }) => name).join(', ')}
      </span>
      </div>
    </div>
  );
};
