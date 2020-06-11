import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//
import { getInfoFromUrlHash } from "../services/utils"
import { getUserProfile, defaultFetchOptions } from "../services/api"
import { authCallbackSuccess } from '../actions';
import { Authorize } from '../containers';

export default function AuthRoute() {
  const [dashRedirect, setDashRedirect] = useState(false)
  const [authError, setAuthError] = useState(false)
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = window.location.hash
    const hashData = getInfoFromUrlHash(hash);

    if (hashData.error) {
      setAuthError(true)
      return
    }

    const requestOptions = {
      ...defaultFetchOptions,
      headers: { 'Authorization': `Bearer ${hashData.accessToken}` }
    }

    fetch(getUserProfile().url, requestOptions)
      .then(data => data.json())
      .then(data => {
        let userData = {
          country: data.country,
          thumb: data.images[0] ? data.images[0].url : "",
          product: data.product,
          expirationTime: Date.now() + (hashData.expiresIn * 1000),
          name: data.display_name
        }
        dispatch(authCallbackSuccess({...hashData, ...userData}));
        setDashRedirect(true)
      })
      .catch(error => {
        setAuthError(true);
      });

  }, [dispatch]);
  
  if(authError) return <Redirect to="/"/>;
  return (dashRedirect ? <Redirect to="/dashboard"/> : <Authorize />);
}

