import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
import { getNameById } from '../services/utils';

export default function PlaylistsRoute({ path }) {
  const dispatch = useDispatch();
  const { auth, content } = useSelector(state => state);
  const { categoryId } = useParams();

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
      categoryName={getNameById(categoryId, content.categories)}
      data={content.playlists}
      isLoading={content.playlistsLoading}
      path={path}
    />
  ) : (
    <ContentError />
  )
}
