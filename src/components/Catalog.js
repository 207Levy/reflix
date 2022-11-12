import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class Catalog extends Component {
  render() {
    return (
      <Movies
        rentOrReturn={this.props.rentOrReturn}
        movies={this.props.state.movies}
        user={this.props.state.loggedOn}
      />
    );
  }
}

export default Catalog;
