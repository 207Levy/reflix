import React, { Component } from "react";
import UserInfo from "../UserInfo";
import Catalog from "./Catalog";
import Movies from "./Movies";

export class User extends Component {
  getRentedMoviesByUser = (user) => {
    const x = this.props.state.movies.filter((movie) =>
      user.moviesPossesed.includes(movie.id)
    );
    return x;
  };

  getUserByName = () =>
    this.props.state.users.find((u) => {
      return u.name === this.props.username;
    });
  render() {
    const user = this.getUserByName();
    const rentedMovies = this.getRentedMoviesByUser(user);
    return (
      <div className="user">
        <UserInfo user={user} />
        <p>Rented:</p>
        <Movies movies={rentedMovies} rented={true} />
        <p>Catalog:</p>
        <Catalog state={this.props.state} />
      </div>
    );
  }
}

export default User;
