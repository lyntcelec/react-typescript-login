import React from "react";
import "./App.scss";
import {Switch, Route, Redirect} from "react-router";
import {Router} from "react-router-dom";
import {connect} from "react-redux";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import About from "./views/About";
import Profile from "./views/Profile";
import Notfound from "./views/Notfound";
import history from "./utils/history";

function App({auth}: any) {
  let isAuthenticated = false;

  if (auth.AccessToken === undefined) {
    isAuthenticated = false;
  } else {
    isAuthenticated = true;
  }

  function PrivateRoute({component, ...rest}: any) {
    return (
      <Route
        {...rest}
        render={(props: any) =>
          isAuthenticated ? (
            React.createElement(component, props)
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      />
    );
  }

  function PublicRouteCheck({component, ...rest}: any) {
    return (
      <Route
        {...rest}
        render={(props: any) =>
          isAuthenticated ? (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          ) : (
            React.createElement(component, props)
          )
        }
      />
    );
  }

  function PublicRoute({component, ...rest}: any) {
    return (
      <Route {...rest} render={(props: any) => React.createElement(component, props)} />
    );
  }

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <PrivateRoute path="/home" component={Home} />
          <PublicRouteCheck path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <PublicRoute path="/about" component={About} />
          <PrivateRoute path="/profile" component={Profile} />
          <Route component={Notfound} />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    auth: state.auth,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
