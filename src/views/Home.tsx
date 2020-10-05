import React from "react";
import "./Home.scss";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button} from "element-react";
import {UserLogout} from "../actions/auth";

interface PropsType {
  UserLogout: any;
}

class Home extends React.Component<PropsType> {
  handleLogout(e: any) {
    e.preventDefault();
    this.props.UserLogout();
    window.location.reload();
  }

  render() {
    return (
      <div className="Home">
        <div>Home</div>
        <Button type="primary" onClick={this.handleLogout.bind(this)}>
          Logout
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {};
}

const mapDispatchToProps = {
  UserLogout: UserLogout,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
