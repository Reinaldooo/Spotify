import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  setPlaylistTracksLoading,
  setPlaylistTracksSuccess,
  setPlaylistTracksError
} from '../actions';
import { defaultFetchOptions, getPlaylistTracks } from '../services/api';
import { getNameById } from '../services/utils';
import { ContentError } from '../components';
import { Tracks } from '../containers';

const TracksRoute = ({ path }) => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();
  const { playlistId, categoryId } = useParams();
  const backPath = `${path}/${categoryId}`

  useEffect(() => {
    const requestOptions = {
      ...defaultFetchOptions,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(setPlaylistTracksLoading());

    fetch(getPlaylistTracks(playlistId).url, requestOptions)
      .then(data => data.json())
      .then(data => dispatch(setPlaylistTracksSuccess(data.items)))
      .catch(error => {
        dispatch(setPlaylistTracksError());
      });

  }, [auth, playlistId, dispatch]);

  return !content.hasErrored ? (
    <Tracks
      playlistName={getNameById(playlistId, content.playlists)}
      data={content.tracks}
      isLoading={content.tracksLoading}
      backPath={backPath}
    />
  ) : (
    <ContentError/>
  )
}

export default TracksRoute;
