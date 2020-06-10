import React from "react";
import { Route, Switch } from "react-router-dom";
//
import MainRoute from './MainRoute';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={MainRoute} />
    </Switch>
  );
}