import React, { Component } from "react";

export class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchFor: "",
    };
  }

  fiterMovies = () =>{
    const filtered = this.props.state.movies.filter( m => m.title.includes(this.state.searchFor))
    this.props.filterMovies(filtered)
  }
  updateInput = (event) => {
    const value = event.target.value;
    this.setState({ searchFor: value }, this.filterMovies());
  };
  render() {
    return (
      <div className="search">
        <input
          value={this.state.searchBar}
          onChange={this.updateInput}
          id="movie-input"
          placeholder="Search for movies..."
        />
      </div>
    );
  }
}

export default Search;