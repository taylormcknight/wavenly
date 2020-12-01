import React, { Component } from "react";
import { render } from "react-dom";
import {
  Link
} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
        <footer className="footer">
          <section className="footer-contents flex">
            <section className="footer-list">
              <h4>Green burial education</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/cremation-pricing">
                    Green burial 101
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/cremation-stories">
                    Personal stories
                    </Link>
                </li>
              </ul>
            </section>
            <section className="footer-list">
              <h4>Businesses</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/cx">
                    Revolutionize your customer experience
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/success-stories">
                    Business success stories
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/resource-center">
                    Resource center
                    </Link>
                </li>
              </ul>
            </section>
            <section className="footer-list">
              <h4>About Wavenly</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/about">
                    Company
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/careers">
                    Careers
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/contact">
                    Contact
                    </Link>
                </li>
              </ul>
            </section>
          </section>
          <section className="footer-baseline">
            <ul>
              <li>
                  © 2020 Wavenly, LLC. All rights reserved.
              </li>
              <li>
                <Link to="/index" className="navbar-item" to="/privacy">
                Privacy
                </Link>
              </li>
              <li>
                <Link to="/index" className="navbar-item" to="/terms">
                Terms
                </Link>
              </li>
            </ul>
          </section>
        </footer>
      </div>
    );
  }
}

export default Footer;