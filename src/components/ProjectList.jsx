import React, { Fragment, useEffect } from "react";
import projectData from "../data/projectdata";

const ProjectList = () => {
  useEffect(() => {
    const projectContainers = document.querySelectorAll('.project-container');

    projectContainers.forEach(container => {
      container.addEventListener('mouseover', () => {
        container.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        container.style.transform = 'translateY(-10px) scale(1.03)';
        container.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';

        const projectContent = container.querySelector('.project-content');
        if (projectContent) {
          projectContent.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease';
          projectContent.style.opacity = '1';
        }
      });

      container.addEventListener('mouseout', () => {
        container.style.transform = 'translateY(0) scale(1)';
        container.style.boxShadow = 'none';

        const projectContent = container.querySelector('.project-content');
        if (projectContent) {
          projectContent.style.opacity = '1';
        }
      });
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      projectContainers.forEach(container => {
        container.removeEventListener('mouseover', () => {});
        container.removeEventListener('mouseout', () => {});
      });
    };
  }, []);

    return (
        <Fragment>


    {/* {projectData.map((project, index) => ( */}
      {projectData.map((project) => (
        <div className="container my-5" key={project.id}>
          <div className="project-container row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="project-content col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis" id = "projectTitle" style={{ fontFamily: "DM Serif Display, serif" }}>
                {project.title}
              </h1>
              <p className="lead" style={{ fontFamily: "DM Sans, sans-serif" }}>
                {project.description}
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <a href={project.githubLink}>
                  <button type="button" className="btn btn-dark btn-lg px-4 me-sm-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-github" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                  </svg> GitHub
                  </button>
                </a>
                <a href={project.liveLink}>
                  <button type="button" className="btn btn-outline-dark btn-lg px-4 project-btn">
                    View Project
                  </button>
                </a>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3 center" src={project.image} alt={project.title} width="720" style={{ borderRadius: "0%" }} />
            </div>
          </div>
        </div>
      ))}
        </Fragment>
    )

}

export default ProjectList;