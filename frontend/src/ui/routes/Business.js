import React, { Component } from "react";
import { render } from "react-dom";
import ProfileHero from '../components/ProfileHero';
import ProfileAside from '../components/ProfileAside';
import ProfileDescription from '../components/ProfileDescription';
import ProfileReviews from '../components/ProfileReviews';

const Business = props => {
  return (
    <div id="container" className="container hero-page">
      <ProfileHero />
      <ProfileAside />
      <main className="canvas">
      <ProfileDescription />
      <ProfileReviews />
      </main>
    </div>
  );
};

export default Business;