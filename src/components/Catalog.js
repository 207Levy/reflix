import React, { Component } from "react";
import { Link } from "react-router-dom";
import Movies from "./Movies";

class Catalog extends Component {
  render() {
    return (
      <div>
        <div id="movies-container">
          <Movies movies={this.props.state.movies} />
        </div>
      </div>
    );
  }
}

export default Catalog;
