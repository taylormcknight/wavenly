import React, { Component } from "react";
import { render } from "react-dom";
import ReviewerProfileImg from '../media/user-headshot.jpg';
import PositiveReview from '../media/positive-reviews.svg';

import {
  Link
} from "react-router-dom";

class ProfileReviews extends Component {
  render() {
    return (
    	<section classNameName="reviews">
			<h2>Reviews</h2>
			<ul>
				<li className="review">
					<div className="reviewer-wrapper">
						<img src={ReviewerProfileImg} className="profile-img" />
						<div className="reviewer-data">
							<Link to="#" className="name">Taylor McKnight</Link> <span className="subtle">• February 2020</span>
							<div className="stars">&#9733; &#9733; &#9733; &#9733;</div>
						</div>
					</div>
					<p>Grateful to the staff for their support during a difficult time.</p>
				</li>
			</ul>
		</section>
    );
  }
}

export default ProfileReviews;
