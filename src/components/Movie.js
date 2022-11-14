import React, { Component } from "react";
import { constants } from "./constants";

class Movie extends Component {
  rentOrReturn = (event) => {
    const username = event.target.getAttribute("data-name");
    const movieId = event.target.getAttribute("data-id");
    this.props.rentOrReturn(username, movieId);
  };

  renderNoUser = (movie, onlyPic) => {
    if (onlyPic) {
      return (
        <div className="movie">
          <img src={movie.img} />
        </div>
      );
    } else {
      return (
        <div className="movie">
          <p className="title">
            {movie.title} ({movie.year})
          </p>
          <img src={movie.img} />
          <p className="desc">{movie.descrShort}</p>
        </div>
      );
    }
  };

  renderWithUser = (movie, onlyPic, user) => {
    const mark = user.moviesPossesed.includes(movie.id)
      ? constants.RETURN
      : constants.RENT;
    if (onlyPic) {
      return (
        <div className="movie">
          <img src={movie.img} />
        </div>
      );
    } else {
      return (
        <div className="movie">
          <button
            className="rent-btn"
            data-name={user.name}
            data-id={movie.id}
            onClick={this.rentOrReturn}
          >{`${mark}`}</button>
          <p className="title">
            {movie.title} ({movie.year})
          </p>
          <img src={movie.img} />
          <p className="desc">{movie.descrShort}</p>
        </div>
      );
    }
  };

  render() {
    const user = this.props.user;
    const movie = this.props.movie;
    const onlyPic = this.props.onlyPic;

    if (user === null) {
      return this.renderNoUser(movie, onlyPic);
    } else {
      return this.renderWithUser(movie, onlyPic, user);
    }
  }
}

export default Movie;
