import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, useRouteMatch } from "react-router-dom";
//
import { defaultFetchOptions, getCategories } from "../services/api";
import { WelcomeBox, PrivateRoute, Dashboard } from "../components";
import { Categories, Topbar, Player } from "../containers";
import { setCategoriesLoading, setCategoriesSuccess, setCategoriesError } from "../actions";

export default function DashboardRoute() {
  const { auth, content } = useSelector((state) => state);
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  useEffect(() => {
    const requestOptions = {
      ...defaultFetchOptions,
      headers: { Authorization: `Bearer ${auth.accessToken}` },
    };

    dispatch(setCategoriesLoading(true))

    fetch(getCategories().url, requestOptions)
      .then((data) => data.json())
      .then(({ categories }) => {
        dispatch(setCategoriesSuccess(categories.items))
      })
      .catch((error) => {
        dispatch(setCategoriesError(error))
      });

  }, [auth, dispatch]);

  return (
    <Dashboard>
      <Topbar />
      <Switch>
        <PrivateRoute exact path={path}>
          <WelcomeBox name={auth.name} />
          <Categories
            loading={content.categoriesLoading}
            data={content.categories}
            path={path}
          />
        </PrivateRoute>
      </Switch>
      <Player />
    </Dashboard>
  );
}
