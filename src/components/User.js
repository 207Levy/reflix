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
        <UserInfo logOut={this.props.logOut} user={user} />
        <div className="rented-container">
          <p className="rent-title">Rented:</p>
          <Movies rentOrReturn={this.props.rentOrReturn} movies={rentedMovies} user={user}/>
        </div>
        <div className="catalog-container">
          <p>Catalog:</p>
          <Catalog rentOrReturn={this.props.rentOrReturn} state={this.props.state} />
        </div>
      </div>
    );
  }
}

export default User;
