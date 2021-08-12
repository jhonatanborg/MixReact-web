import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, authed, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}
const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={() => <h1>Login</h1>} />
      <Route path="/signup" component={() => <h1>SignUp</h1>} />
      <PrivateRoute path="/app" component={() => <h1>App</h1>} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
