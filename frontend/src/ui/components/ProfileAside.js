import React, { Component } from "react";
import { render } from "react-dom";

import {
  Link
} from "react-router-dom";

class ProfileAside extends Component {
  render() {
    return (
    	<aside>
    		<Link className="button primary" to="/">Book virtual appointment</Link>
			<section className="profile">
				<ul className="meta-info">
					<li><span className="meta-info location">Penn Laird, Virginia</span></li>
				</ul>
				<h3>Plot types</h3>
				<ul>
					<li>Natural</li>
					<li>Renewable</li>
				</ul>
				<h3>Perpetual care cost</h3>
				<ul>
					<li>Included</li>
				</ul>
				<h3>Internment cost</h3>
				<ul>
					<li>Included</li>
				</ul>
				<h3>Burial containers</h3>
				<ul>
					<li>Shroud burial is available. Casket or shroud must be made of natural biodegradable non-toxic materials.</li>
				</ul>
				<h3>Grave markers</h3>
				<ul>
					<li>Native fieldstone set flush to the ground</li>
				</ul>
				<h3>Suggest an update</h3>
				<p><Link to="/">Contact us</Link></p>
			</section>
		</aside>
    );
  }
}

export default ProfileAside;