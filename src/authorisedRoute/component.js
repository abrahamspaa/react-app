import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { Button } from 'reactstrap';

export default class authorisedRoute extends Component {
  render () {
    <Route
    {...rest}
    render={props =>
      fakeAuth.isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location }
          }}
        />
      )
    }
  />
  }
}
