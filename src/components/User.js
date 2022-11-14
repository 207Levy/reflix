import React, { Component } from "react";
import Search from "../Search";
import UserInfo from "../UserInfo";

import Movies from "./Movies";

export class User extends Component {
  constructor(props) {
    super(props);
    const user = this.getUserByName(this.props.username);
    let rented = this.getRentedMoviesByUser(user);
    this.state = {
      rentedFiltered: rented,
      allFiltered: this.props.state.movies
    };
  }

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

  filterMovies = (filtered) => {
    const user = this.getUserByName(this.props.username);
    let rented = this.getRentedMoviesByUser(user);
    rented = rented.filter((r) => filtered.includes(r));
    this.setState({ rentedFiltered: rented, allFiltered: filtered });
  };

  render() {
    const user = this.getUserByName();
    
    const rentedMovies = this.getRentedMoviesByUser(user);
    return (
      <div className="user">
        <UserInfo logOut={this.props.logOut} user={user} />
        <Search state={this.props.state} filterMovies={this.filterMovies} />
        <div className="rented-container">
          <p className="rent-title">Rented:</p>
          <Movies
            rentOrReturn={this.props.rentOrReturn}
            movies={this.state.rentedFiltered}
            user={user}
          />
        </div>
        <div className="catalog-container">
          <p className="cat-title">Catalog:</p>
          <Movies
            rentOrReturn={this.props.rentOrReturn}
            movies={this.state.allFiltered}
            user={user}
          />
        </div>
      </div>
    );
  }
}

export default User;
