import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Movies from "./Movies";

class Catalog extends Component {
  constructor() {
    super();
    this.state = {
      allFiltered: [],
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
          movies={this.state.allFiltered}
          user={this.props.state.loggedOn}
        />
      </div>
    );
  }
}

export default Catalog;
