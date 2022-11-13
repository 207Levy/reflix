import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Movies from "./Movies";

class Catalog extends Component {
  constructor() {
    this.state = {
      allFiltered: this.p,
    };
  }
  filterMovies = (filtered) => {
    this.setState({ allFiltered: filtered });
  };
  render() {
    return (
      <div>
        <Search state={this.props.state} filterMovies={this.filterMovies} />
        <Movies
          rentOrReturn={this.props.rentOrReturn}
          movies={this.props.state.movies}
          user={this.props.state.loggedOn}
        />
      </div>
    );
  }
}

export default Catalog;
