import React from "react";
import { Route, Switch } from "react-router";
import Landing from "../features/landing/components/landing";

const Routes = (props: any) => {
  return (
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/weather"></Route>
    </Switch>
  );
};

export default Routes;
