import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Router>
      <div id="footer">
        <footer className="footer">
          <div className="footer-contents">
            <ul>
              <li>
                <Link to="/index" className="navbar-item">
                Privacy
                </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/index">
                  Advertising
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/index">
                  Cookies
                  </Link>
              </li>
              <li>
                  <Link className="navbar-item" to="/index">
                  Outblay © 2020
                  </Link>
              </li>
            </ul>
          </div>
        </footer>
      </div>
      </Router>
    );
  }
}

export default Footer;