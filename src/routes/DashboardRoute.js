import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";

import { defaultFetchOptions, getCategories } from "../services/api";
import { WelcomeBox, PrivateRoute, Dashboard } from "../components";
import { Categories, Topbar, Player } from "../containers";

export default function DashboardRoute() {
  const [cat, setCat] = useState([])
  const { auth, content } = useSelector((state) => state);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...defaultFetchOptions,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    // dispatch loading

    fetch(getCategories().url, requestOptions)
      .then((data) => data.json())
      .then((data) => setCat(data.categories.items))
      // .then((data) => console.log(data.categories))

      .catch((error) => {});
  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={auth.name} />
          <Categories
            loading={content.categoriesLoading}
            data={cat}
            path={path}
          />
        </PrivateRoute>
      </Switch>
      <Player />
    </Dashboard>
  );
}
