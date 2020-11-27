import React, { Component } from "react";
import { render } from "react-dom";

const BlogPost = props => {
  return (
    <div id="container" className="container hero-page">
    	<article className="article">
	        <div className="article-header-wrapper">
	        <span className="article-label">{label}</span>
	        <h1>{title}</h1>
	        <p>{description}</p>
	        </div>
	        <cite className="byline">
	            By {author} | <time datetime="{date}">{date}</time>
	        </cite>
	        <PostContent content={content} />
	    </article>
    </div>
  );
};

export default BlogPost;