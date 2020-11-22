import React, { Component } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Router>
      <div id="main">
        <aside className="signup">
          <Link to="#" className="logo"><img src="static/media/outblay-logo.svg" height="25" /></Link>
          <form className="sign-up">
            <h2>Sign up</h2>
            <input type="text" value="" name="FirstName" className="text-input" id="first-name" placeholder="First name" required />
            <input type="text" value="" name="LastName" className="text-input" id="last-name" placeholder="Last name" required />
            <input type="email" value="" name="Email" className="text-input" id="email" placeholder="Email" required />
            <input type="submit" value="Join Outblay" name="Join" id="Join" className="button primary" />
            <span className="help-link"><a href="#">Privacy policy</a> | <Link to="#">Terms of Service</Link></span>
          </form>
        </aside>
        <main className="log-in">
          <section className="hero-section">
              <div className="overlaid-content">
                <form className="log-in">
                <input type="email" value="" name="EMAIL" className="text-input" id="mce-EMAIL" placeholder="Email" required />
                <input type="email" value="" name="EMAIL" className="text-input" id="mce-EMAIL" placeholder="Password" required />
                <input type="submit" value="Log in" name="subscribe" id="mc-embedded-subscribe" className="button primary" />
                <div className="clear-fix"></div>
                <span className="help-link"><Link to="#">Forgot password</Link></span>
              </form>
                <div className="title-section">
                <h1>One social network.<span className="subtitle"> Many adventure sport communities.</span></h1>
                <ul className="why-join">
                  <li><img src="static/media/icons/compass.svg" /><strong>Easily find and review</strong> exciting experiences in your sport</li>
                  <li><img src="static/media/icons/media.svg" /><strong>Save and share memories</strong> with friends and other athletes</li>
                  <li><img src="static/media/icons/social-network.svg" /><strong>Follow other athletes</strong> in your sport</li>
                </ul>
              </div>
            </div> 
          </section>
        </main>
      </div>
      </Router>
    );
  }
}

export default Main;