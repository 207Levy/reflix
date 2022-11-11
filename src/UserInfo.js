import React, { Component } from "react";

export class UserInfo extends Component {
  render() {
    const user = this.props.user;
    return (
      <div className="user-info">
        <div>{user.name}</div>
        <div>{user.budget}$</div>
      </div>
    );
  }
}

export default UserInfo;
