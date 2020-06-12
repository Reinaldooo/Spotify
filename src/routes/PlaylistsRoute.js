import React, { useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//
import {
  setPlaylistsLoading,
  setPlaylistsSuccess,
  setPlaylistsError
} from '../actions';
import { Playlists } from '../containers';
import { ContentError } from '../components';
import { defaultFetchOptions, getCategoryPlaylists } from '../services/api';

export default function PlaylistsRoute({ path }) {
  const dispatch = useDispatch();
  const { auth, content } = useSelector(state => state);
  const { categoryId } = useParams();
  const { state: { categoryName } } = useLocation();

  useEffect(() => {
    const requestOptions = {
      ...defaultFetchOptions,
      headers: { 'Authorization': `Bearer ${auth.accessToken}` }
    }

    dispatch(setPlaylistsLoading());

    fetch(getCategoryPlaylists(categoryId).url, requestOptions)
      .then((data) => data.json())
      .then(({ playlists }) => {
        dispatch(setPlaylistsSuccess(playlists.items))
      })
      .catch((error) => {
        dispatch(setPlaylistsError())
      });

  }, [auth, categoryId, dispatch]);

  return !content.hasErrored ? (
    <Playlists
      categoryId={categoryId}
      categoryName={categoryName}
      data={content.playlists}
      isLoading={content.playlistsLoading}
      path={path}
    />
  ) : (
    <ContentError />
  )
}
