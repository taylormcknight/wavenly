import React, { Component } from "react";
import { render } from "react-dom";
import GalleryImg1 from '../media/clients/duck-run-cemetery-1.jpg';
import GalleryImg2 from '../media/clients/duck-run-cemetery-2.jpg';
import GalleryImg3 from '../media/clients/duck-run-cemetery-3.jpg';
import GalleryImg4 from '../media/clients/duck-run-cemetery-4.jpg';
import GalleryImg5 from '../media/clients/duck-run-cemetery-5.jpg';

class ProfileHero extends Component {
  render() {
    return (
    	<section className="hero">
			<h1>Duck Run Cemetery</h1>
			<section className="gallery">
				<figure className="gallery__item gallery__item--1">
					<img src={GalleryImg1} className="gallery__img" alt="Image 1" />
				</figure>
				<figure className="gallery__item gallery__item--2">
					<img src={GalleryImg2} className="gallery__img" alt="Image 2" />
				</figure>
				<figure className="gallery__item gallery__item--3">
					<img src={GalleryImg3} className="gallery__img" alt="Image 3" />
				</figure>
				<figure className="gallery__item gallery__item--4">
					<img src={GalleryImg4} className="gallery__img" alt="Image 4" />
				</figure>
				<figure className="gallery__item gallery__item--5">
					<img src={GalleryImg5} className="gallery__img" alt="Image 5" />
				</figure>
			</section>
		</section>
    );
  }
}

export default ProfileHero;