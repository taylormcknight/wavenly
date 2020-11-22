import React, { Component } from "react";
import { render } from "react-dom";
import Userheadshot from '../media/user-headshot.jpg';
import Logo from '../media/logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Router>
      <div id="nav">
      <nav className="navigation">
        <logo>
          <Link className="logo" to="/">
            <img src={Logo} alt="" className="desktop-only" />
            <img src={Logo} alt="" className="mobile-only" />
          </Link>
        </logo>
        <ul>
          <li>
            <Link className="active" to="/">
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/" onclick="myFunction()" id="profile-btn">
              <img src={Userheadshot} className="user-headshot" />
              <span className="name">Taylor</span>
            </Link>
            <ul id="profile-menu" className="navigation dropdown-menu">
              <li><Link className="" to="/">Profile</Link></li>
              <li><Link className="" to="/"></Link>Log out</li>
            </ul>
          </li>
        </ul>
      </nav>
      </div>
      </Router>
    );
  }
}

export default Navbar
