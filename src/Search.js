import React, { Component } from "react";

export class Search extends Component {

  filterMovies = (input) => {
    const filtered = this.props.state.movies.filter((m) =>
      m.title.toLowerCase().includes(input.toLowerCase())
    );
    this.props.filterMovies(filtered, input);
  };

  updateInput = (event) => {
    const value = event.target.value;
    this.filterMovies(value);
  };
  render() {
    return (
      <div className="search">
        <input
          value={this.props.searchFor}
          onChange={this.updateInput}
          id="movie-input"
          placeholder="Search for movies..."
        />
      </div>
    );
  }
}

export default Search;
