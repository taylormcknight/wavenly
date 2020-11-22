import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../styles/scss/App.scss'
import App from "../components/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);