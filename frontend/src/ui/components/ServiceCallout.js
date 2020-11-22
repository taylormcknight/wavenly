import React, { Component } from "react";
import { render } from "react-dom";
import CremationImg from '../media/services/cremation.jpg';
import GreenBurialImg from '../media/services/green-burial.jpg';
import AquamationImg from '../media/services/aquamation.jpg';

import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from "react-router-dom";

class ServiceCallout extends Component {
  render() {
    return (
      <Router>
        <div id="service-callout" style="max-width:1440px;">
          <section className="grid-wrapper">
            <ul className="grid photo-grid grid-3">
              <li className="card-media goal">
                <Link to="#">
                  <figure style={{backgroundImage: "url(" + CremationImg + ")" }}>
                    <figcaption>
                      <span className="card-title">Cremation</span>
                      <span className="card-info">View providers</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
              <li className="card-media goal">
                <Link to="#">
                  <figure style={{backgroundImage: "url(" + GreenBurialImg + ")" }}>
                    <figcaption>
                      <span className="card-title">Green Burials</span>
                      <span className="card-info">View providers</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
              <li className="card-media goal">
                <Link to="#">
                  <figure style={{backgroundImage: "url(" + AquamationImg + ")" }}>
                    <figcaption>
                      <span className="card-title">Aquamations</span>
                      <span className="card-info">View providers</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </Router>
    );
  }
}

export default ServiceCallout;