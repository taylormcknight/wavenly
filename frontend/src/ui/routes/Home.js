import React, { Component } from "react";
import { render } from "react-dom";
import Main from '../components/Main';
import ServiceCallout from '../components/ServiceCallout';

const Home = props => {
  return (
    <div>
      <Main />
      <ServiceCallout />
    </div>
  );
};

export default Home;