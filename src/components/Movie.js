import React, { Component } from "react";
import { Link } from "react-router-dom";

class Movie extends Component {
  render() {
    let movie = this.props.movie;
    const onlyPic = this.props.onlyPic;
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
  }
}

export default Movie;
