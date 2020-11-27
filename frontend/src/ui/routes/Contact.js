import React from 'react';
import {
  Link
} from "react-router-dom";

const Contact = props => {
  return (
  	<section class="grid page-header">
	  	<div class="full-width">
	  		<h1>How can we help?</h1>
		    <ul>
		    	<li>Customer service | contact@wavenly.com</li>
		      	<li>1-888-352-7075</li>
		      	<li>6am-6pm PT</li>
		      	<li>Visit the Wavenly <Link to="/help-center">Help Center</Link></li>
		    </ul>
	  	</div>
  	</section>
  );
};

export default Contact;