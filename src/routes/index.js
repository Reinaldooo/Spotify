import React from "react";
import { Route, Switch } from "react-router-dom";
//
import StartRoute from './StartRoute';
import AuthRoute from './AuthRoute';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={StartRoute} />
      <Route exact path="/auth" component={AuthRoute} />
    </Switch>
  );
}