import React from "react";
import { Route, Switch } from "react-router-dom";
//
import { PrivateRoute, Error404 } from "../components"
import StartRoute from './StartRoute';
import AuthRoute from './AuthRoute';
import DashboardRoute from './DashboardRoute';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={StartRoute} />
      <Route exact path="/auth" component={AuthRoute} />
      <PrivateRoute path="/dashboard" comp={DashboardRoute} />
      <Route component={Error404}/>
    </Switch>
  );
}