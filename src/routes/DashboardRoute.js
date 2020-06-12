import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch, Route } from "react-router-dom";
//
import { defaultFetchOptions, getCategories } from "../services/api";
import { WelcomeBox, PrivateRoute, Dashboard, Error404, ContentError } from "../components";
import { Categories, Topbar, Player } from "../containers";
import { setCategoriesLoading, setCategoriesSuccess, setCategoriesError } from "../actions";
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

    dispatch(setCategoriesLoading())

    fetch(getCategories().url, requestOptions)
      .then((data) => data.json())
      .then(({ categories }) => {
        dispatch(setCategoriesSuccess(categories.items))
      })
      .catch((error) => {
        dispatch(setCategoriesError())
      });
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>

        <PrivateRoute exact path={path}>
          <WelcomeBox name={auth.name} />
          {
            !content.hasErrored ? (
              <Categories
                isLoading={content.categoriesLoading}
                data={content.categories}
              />
            ) : (
              <ContentError/>
            )
          }
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId`}>
          <PlaylistsRoute path={path} />
        </PrivateRoute>

        <PrivateRoute exact path={`${path}/:categoryId/:playlistId`}>
          <TracksRoute />
        </PrivateRoute>

        <Route component={Error404}/>
      </Switch>
      <Player />
    </Dashboard>
  );
}
