import React, { Component } from "react";
import { Link } from "react-router-dom";
import { constants } from "./constants";

class Movie extends Component {
  rentOrReturn = (event) => {
    const username = event.target.getAttribute("data-name");
    const movieId = event.target.getAttribute("data-id");
    this.props.rentOrReturn(username, movieId);
  };

  render() {
    const user = this.props.user;
    const movie = this.props.movie;
    const onlyPic = this.props.onlyPic;

    if (user === null) {
      if (onlyPic) {
        return <img src={movie.img} />;
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
    } else {
      const mark = user.moviesPossesed.includes(movie.id)
        ? constants.RETURN
        : constants.RENT;
      if (onlyPic) {
        return <img src={movie.img} />;
      } else {
        return (
          <div className="movie">
            <button
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
    }
  }
}

export default Movie;
