import React from "react";
import { HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import AppRoute from "./AppRoute";

const Routes = props => {
  // console.log(window.location);
  return (
    <Router>
      <Switch>
        <Route name="/" component={AppRoute} />
      </Switch>
    </Router>
  );
};

export default Routes;