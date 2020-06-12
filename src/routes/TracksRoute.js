import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  setPlaylistTracksLoading,
  setPlaylistTracksSuccess,
  setPlaylistTracksError
} from '../actions';
import { defaultFetchOptions, getPlaylistTracks } from '../services/api';
import { ContentError } from '../components';

const TracksRoute = () => {
  const { auth, content } = useSelector(state => state);
  const dispatch = useDispatch();
  const { playlistId } = useParams();

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
    <h3>Tracks</h3>
  ) : (
    <ContentError/>
  )
}

export default TracksRoute;
