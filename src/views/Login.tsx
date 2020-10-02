import React from "react";
import "./Login.scss";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class Login extends React.Component {
  static defaultProps = {};

  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className="Login">Login</div>;
  }
}

function mapStateToProps(state: any) {
  return {};
}

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
