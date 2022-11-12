import React, { Component } from "react";
import { Link } from "react-router-dom";
import { constants } from "./constants";
import Movie from "./Movie";

class Movies extends Component {
  rentOrReturn = (event) => {
    const username = event.target.getAttribute("data-name");
    const movieId = event.target.getAttribute("data-id");
    this.props.rentOrReturn(username, movieId);
  };

  renderNoUser = () => {
    return (
      <div className="movies">
        {this.props.movies.map((m) => (
          <Link className="movie-link" to={`/movies/${m.id}`}>
            <Movie
              rentOrReturn={this.props.rentOrReturn}
              key={m.id}
              user={null}
              movie={m}
              onlyPic={true}
            />
          </Link>
        ))}
      </div>
    );
  };
  render() {
    const user = this.props.user;
    if (user === null) {
      return this.renderNoUser();
    }

    return (
      <div className="movies">
        {this.props.movies.map((m) => {
          const mark = user.moviesPossesed.includes(m.id)
            ? constants.RETURN
            : constants.RENT;
          return (
            <div>
              <button
                data-name={user.name}
                data-id={m.id}
                onClick={this.rentOrReturn}
              >{`${mark}`}</button>
              <Link className="movie-link" to={`/movies/${m.id}`}>
                <Movie
                  rentOrReturn={this.props.rentOrReturn}
                  key={m.id}
                  user={user}
                  movie={m}
                  onlyPic={true}
                />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Movies;
