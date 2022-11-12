import React, { Component } from "react";
import { Link } from "react-router-dom";
import UserInfo from "../UserInfo";

class Home extends Component {
  logIn = (event) => {
    const userName = event.currentTarget.id;
    const user = this.props.state.users.find((u) => u.name === userName);
    this.props.logIn(user);
  };

  render() {
    let userLogged = this.props.state.loggedOn;
    return (
      <div className="home">
        <h1 id="home-title">Who's watching?</h1>
        <div className="logs">
          {userLogged !== null ? (
            <UserInfo logOut={this.props.logOut} user={userLogged} />
          ) : (
            <p>Please log-in</p>
          )}
        </div>
        <div id="users-container">
          {this.props.state.users.map((u) => {
            return (
              <Link
                onClick={this.logIn}
                className="user-link"
                id={u.name}
                to={`/users/${u.name}`}
              >
                <div className="username">{u.name}</div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
