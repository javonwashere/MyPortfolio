import React from "react";
import { Link } from "react-router-dom";

const Projects = ({projects}) => {
  const projectsList = Object.values(projects).map((obj) => {
    const { title, info, route, thumbnail } = obj;
    return ( 
      <div>
        <div class="project">
          <img alt={title} class="thumbnail" src={thumbnail} />
          <div class="project-preview">
            <h6 class="project-title">{title}</h6>
            <p class="project-info">{info}</p>
            <Link to={`projects/${route}`}>Read More</Link>
          </div>
        </div>
      </div>
    );
  });
  return <React.Fragment>{projectsList}</React.Fragment>;
};

export default ({projects}) => {
    console.log("what do projects look like", projects)

  return (
    <React.Fragment>
      <h3 style={{ textAlign: "center" }}>My Projects</h3>
      <div class="projects-wrapper">
          <Projects projects={projects} />
      </div>
    </React.Fragment>
  );
};
