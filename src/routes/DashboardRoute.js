import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch, Route } from "react-router-dom";
//
import {
  defaultFetchOptions,
  getCategories,
  getUserRecentTracks
} from "../services/api";

import {
  WelcomeBox,
  PrivateRoute,
  Dashboard,
  Error404,
  ContentError,
  Browse
} from "../components";

import {
  Topbar,
  PlayerOpen
} from "../containers";

import {
  setBrowseLoading,
  setBrowseSuccess,
  setBrowseError,
} from "../actions";

import PlaylistsRoute from "../routes/PlaylistsRoute";
import TracksRoute from "../routes/TracksRoute";

export default function DashboardRoute() {
  const { auth, content } = useSelector((state) => state);
  const { path } = useRouteMatch();
  const dispatch = useDispatch(); 

  useEffect(() => {
    const requestOptions = {
      ...defaultFetchOptions,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(setBrowseLoading())

    function fetchAll() {
      return Promise.all([
        fetch(getCategories(), requestOptions)
          .then((data) => data.json()),
        fetch(getUserRecentTracks(), requestOptions)
          .then((data) => data.json())
      ])
    }

    fetchAll()
      .then(([{ categories }, recentTracks]) => {
        dispatch(setBrowseSuccess({
          categories: categories.items,
          recentTracks: recentTracks.items
        }))
      })
      .catch((error) => {
        dispatch(setBrowseError())
      });
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={auth.name} />
          {!content.hasErrored ? (
            <Browse
              categoriesData={content.categories}
              recentData={content.recentTracks}
              isLoading={content.browseLoading}
            />
          ) : (
            <ContentError />
          )}
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute path={path} />
        </PrivateRoute>

        <Route component={Error404} />
      </Switch>
      <PlayerOpen/>
      {/* {auth.product !== "premium" ? <PlayerPremium /> : <PlayerOpen />} */}
    </Dashboard>
  );
}
