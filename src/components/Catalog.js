import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Movies from "./Movies";

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allFiltered: this.props.state.movies,
      searchFor: "",
    };
  }
  filterMovies = (filtered, input) => {
    this.setState({ allFiltered: filtered, searchFor: input });
  };
  render() {
    return (
      <div>
        <Search
          state={this.props.state}
          filterMovies={this.filterMovies}
          searchFor={this.state.searchFor}
        />
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
