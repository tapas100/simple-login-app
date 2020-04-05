import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { withRouter } from "react-router";
import { SignIn, Users } from "../scenes";
import PrivateRoute from './PrivateRoute'
const AppRoute = props => {
    console.log('App Route')
  return (
    <Switch>
      <Route path="/signin" component={SignIn}/>
      <PrivateRoute path="/users" component={Users}/>
      <Redirect from="/" to="/users"/>
    </Switch>
  );
};

export default withRouter(AppRoute);
