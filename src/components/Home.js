import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1 id="home-title">Who's watching?</h1>

        <div id="users-container">
          {this.props.users.map((u) => {
            return (
              <Link className="user-link" id={u.name} to={`/users/${u.name}`}>
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
