import React, { Component } from "react";
import { render } from "react-dom";
import Navbar from './Navbar'
import Main from './Main'
import ServiceCallout from './ServiceCallout'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div id="app">
      <Navbar />
      <Main />
      <ServiceCallout />
      <Footer />
      </div>
    );
  }
}

export default App;