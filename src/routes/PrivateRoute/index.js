import React from 'react';
import { isAuthenticated } from "../../lib/authUtil";
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect from="/" to="/signin" />
        )
      }
    />
  );
};

export default PrivateRoute;
