import React, { Component } from "react";
import { Link } from "react-router-dom";
import { constants } from "./components/constants";

export class UserInfo extends Component {
  logOut = () => {
    this.props.logOut();
  };
  render() {
    const user = this.props.user;
    return (
      <div className="user-info">
        <div className="name">{user.name}</div>
        <div className="balance">
          {user.budget}
          {constants.CURRENCY}
        </div>
        <Link className="log-out" to={"/"} onClick={this.logOut}>
          <img className="info-img" src={user.img} />
          <div class="out">Log-out</div>
        </Link>
      </div>
    );
  }
}

export default UserInfo;
