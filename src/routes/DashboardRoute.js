import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";

import { defaultFetchOptions, getCategories } from "../services/api";
import { WelcomeBox, PrivateRoute, Dashboard } from "../components";
import { Categories, Topbar, Player } from "../containers";

export default function DashboardRoute() {
  const { auth, content } = useSelector((state) => state);
  const { path, url } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...defaultFetchOptions,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    // dispatch loading

    fetch(getCategories().url, requestOptions)
      .then((data) => data.json())
      .then((data) => console.log(data.categories))

      .catch((error) => {
        
      });
  }, [auth, dispatch]);

  console.log(path, url);

  return (
    <Dashboard>
      <Topbar />

      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={auth.name} />
        </PrivateRoute>
      </Switch>
      <Player />
    </Dashboard>
  );
}
