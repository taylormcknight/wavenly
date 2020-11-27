import React, { Component } from "react";
import { render } from "react-dom";

class Main extends Component {
  render() {
    return (
      <div id="main">
        <div className="search-wrapper">
          <header>
            <h1>Reserve a green burial</h1>
            <form className="search">
              <input type="search" placeholder="Search for a provider" />
            </form>
          </header>
        </div>
      </div>
    );
  }
}

export default Main;