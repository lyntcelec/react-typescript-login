import React from "react";
import "./Login.scss";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import Login from "../components/Login";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="LoginPage">
        <div className="header">
          <h2 className="logo"></h2>
        </div>
        <Login login_props=".Login." />

        <div className="footer">
          <div className="links">
            {/* <span>Feature 1</span>
            <span>Feature 2</span>
            <span>Feature 3</span> */}
          </div>
          <div className="version"></div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
