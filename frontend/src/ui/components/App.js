import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'
import '../styles/scss/App.scss'

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Main />
      <Footer />
      </div>
    );
  }
}

export default App;