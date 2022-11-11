import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movie from "./Movie";

class Movies extends Component {
  render() {
    return (
      <div className="movies">
        {this.props.movies.map((m) => (
          <Link className="movie-link" to={`/movies/${m.id}`}>
            <Movie key={m.id} movie={m} onlyPic={true} />
          </Link>
        ))}
      </div>
    );
  }
}

export default Movies;
