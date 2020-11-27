import React, { Component } from "react";
import ReactDOM from "react-dom";
import '../styles/scss/App.scss'
import App from "../components/App";
import Home from '../routes/Home';
import Contact from '../routes/Contact';
import About from '../routes/About';
import Business from '../routes/Business';
import CX from '../routes/CX';
import Blog from '../routes/Blog';
import Layout from '../routes/Layout';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

ReactDOM.render(
	<Router>
    	<div className="site-overlay"></div>
	    <Layout>
		<Switch>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/contact">
				<Contact />
			</Route>
			<Route exact path="/about">
				<About />
			</Route>
			<Route exact path="/business">
				<Business />
			</Route>
			<Route exact path="/cx">
				<CX />
			</Route>
			<Route exact path="/blog">
				<Blog />
			</Route>
		</Switch>
	  	</Layout>
	</Router>,
  document.getElementById('root')
);