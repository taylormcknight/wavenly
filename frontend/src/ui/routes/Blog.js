import React, { Component } from "react";
import { render } from "react-dom";
import Layout from './Layout'
import BlogRoll from '../components/BlogRoll'

const Blog = props => {
  return (
    <Layout>
        <section className="grid page-header">
            <div className="full-width">
                <h1>Research Briefs</h1>
                <p>Insights and pragmatic solutions from parks and recreation research.</p>
            </div>
        </section>
        <BlogRoll />
    </Layout>
  );
};

export default Blog;