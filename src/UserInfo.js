import React, { Component } from "react";
import { Link } from "react-router-dom";

export class UserInfo extends Component {
  logOut = () => {
    this.props.logOut();
  };
  render() {
    const user = this.props.user;
    return (
      <div className="user-info">
        <div>{user.name}</div>
        <div>{user.budget}$</div>
        <Link to={"/"} onClick={this.logOut}>
          Log-out
        </Link>
      </div>
    );
  }
}

export default UserInfo;
