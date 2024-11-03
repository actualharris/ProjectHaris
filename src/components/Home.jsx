import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";

const Home = () => {
    return (
        <Fragment>
            {/* Hero */}
            <div className="container" id="hero">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                <Profile/>
                    <div className="col-lg-6 d-flex flex-column align-items-center text-center">
                        <div className="heading-wrapper">
                            <p className="tiny">you've reached,</p>
                            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 heading">Mohammed Haris</h1>
                        </div>
                        {/* <p className="tiny">you've reached,</p>
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 heading">Mohammed Haris</h1> */}
                        <p className="lead describe">
                            Hello and welcome! <b>I'm</b>, a <span className="imp">B.Tech graduate, Web Developer</span>, and an aspiring <span className="imp">Cybersecurity Researcher</span>. 
                            I'm thrilled to present my <a href="/projects" style={{ color: 'black', textDecoration: 'none' }}><span className="imp">Projects</span></a>, which highlight my passion for creating 
                            innovative and impactful solutions. Be sure to check out the <a href="/about" style={{ color: 'black', textDecoration: 'none' }}><span className="imp">About Me </span></a> section to dive deeper 
                            into my journey and goals in both web development and cybersecurity.
                        </p>
                        <Navigation/>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Home;