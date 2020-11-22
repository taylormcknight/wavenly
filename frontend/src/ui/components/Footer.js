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
          <section className="footer-contents flex">
            <section className="footer-list">
              <h4>Reserve a green burial</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/green-burial-pricing">
                    Pricing
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/green-burial-reviews">
                    Reviews
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/green-burial-stories">
                    Stories
                    </Link>
                </li>
              </ul>
            </section>
            <section className="footer-list">
              <h4>Reserve a cremation</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/green-burial-pricing">
                    Pricing
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/green-burial-reviews">
                    Reviews
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/green-burial-stories">
                    Stories
                    </Link>
                </li>
              </ul>
            </section>
            <section className="footer-list">
              <h4>Businesses</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/advertise">
                    Claim your company page
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/advertise">
                    Promote your company
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/advertise">
                    Revolutionize your customer experience
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/advertise">
                    Business success stories
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/advertise">
                    Resource center
                    </Link>
                </li>
              </ul>
            </section>
            <section className="footer-list">
              <h4>About</h4>
              <ul>
                <li>
                    <Link className="navbar-item" to="/green-burial-pricing">
                    Company
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/green-burial-reviews">
                    Careers
                    </Link>
                </li>
                <li>
                    <Link className="navbar-item" to="/green-burial-stories">
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
                <Link to="/index" className="navbar-item">
                Privacy
                </Link>
              </li>
              <li>
                <Link to="/index" className="navbar-item">
                Terms
                </Link>
              </li>
            </ul>
          </section>
        </footer>
      </div>
      </Router>
    );
  }
}

export default Footer;