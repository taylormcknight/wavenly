import React, { Component } from "react";
import { render } from "react-dom";
import Userheadshot from '../media/user-headshot.jpg';
import Logo from '../media/logo.svg';
import {
  Link
} from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-wrapper">
        <nav className="navigation">
          <logo>
            <Link className="logo" to="/">
              <img src={Logo} alt="" className="desktop-only" />
              <img src={Logo} alt="" className="mobile-only" />
            </Link>
          </logo>
          <ul>
            <li>
              <Link to="/blog">
              Blog
              </Link>
            </li>
            <li>
              <Link to="/contact">
              Contact
              </Link>
            </li>
            <li>
              <Link to="/about">
              About
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
    );
  }
}

export default Navbar;
