import React from "react";
import "./App.scss";
import {Switch, Route, Redirect} from "react-router";
import {HashRouter as Router} from "react-router-dom";
import {connect} from "react-redux";
import Home from "./views/Home";
import Login from "./views/Login";
import Signup from "./views/Signup";
import history from "./utils/history";

function App({user}: any) {
  var isAuthenticated = false;
  const token = localStorage.getItem("token");

  if (token === null && user.AccessToken === false) {
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

  function PublicRoute({component, ...rest}: any) {
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

  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <PrivateRoute path="/home" component={Home} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/signup" component={Signup} />
          <Route component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

function mapStateToProps(state: any) {
  return {
    user: state.user,
  };
}

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
