import React, { Fragment } from "react";
import Navigation from "./Navigation";
import Profile from "./Profile";
import ProjectList from "./ProjectList";

const Projects = () => {
    return (
        <Fragment>
            {/* <div id="page-overlay"> */}
                {/* project hero  */}
                <div className="container">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <Profile/>
                    <div className="col-lg-6 d-flex flex-column align-items-center text-center">
                        <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3 heading">Projects</h1>
                        <p className="lead describe">As a web developer and an aspiring cybersecurity researcher currently honing my skills, 
                            I'm excited to share my projects with you. These projects showcase my dedication to crafting innovative and practical solutions. 
                            Each one reflects my passion for combining creativity with technical expertise. Explore the <span className="imp">About Me</span> section to learn more about my 
                            journey and aspirations in both web development and cybersecurity.</p>
                            <Navigation/>
                        </div>
                    </div>
                </div>


            <ProjectList/>
        </Fragment>
    )
}

export default Projects;
