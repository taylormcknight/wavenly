import React, { Component } from "react";
import { render } from "react-dom";
import ConventionalCemeteryImg from '../media/services/conventional-cemetery.jpg';
import NaturalBurialGroundImg from '../media/services/natural-burial-ground.jpg';
import ConservationCemeteryImg from '../media/services/conservation-cemetery.jpg';

import {
  Link
} from "react-router-dom";

class ServiceCallout extends Component {
  render() {
    return (
        <div id="service-callout">
          <section className="grid-wrapper">
            <ul className="grid photo-grid grid-3">
              <li className="card-media goal">
                <Link to="#">
                  <figure style={{backgroundImage: "url(" + ConventionalCemeteryImg + ")" }}>
                    <figcaption>
                      <span className="card-title">Conventional Cemeteries</span>
                      <span className="card-info">View providers</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
              <li className="card-media goal">
                <Link to="#">
                  <figure style={{backgroundImage: "url(" + NaturalBurialGroundImg + ")" }}>
                    <figcaption>
                      <span className="card-title">Natural Burial Grounds</span>
                      <span className="card-info">View providers</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
              <li className="card-media goal">
                <Link to="#">
                  <figure style={{backgroundImage: "url(" + ConservationCemeteryImg + ")" }}>
                    <figcaption>
                      <span className="card-title">Conservation Cemeteries</span>
                      <span className="card-info">View providers</span>
                    </figcaption>
                  </figure>
                </Link>
              </li>
            </ul>
          </section>
        </div>
    );
  }
}

export default ServiceCallout;