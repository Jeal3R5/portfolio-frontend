import React from "react";
import { useState, useEffect } from "react";

function Projects(props) {
  //CREATE STATE TO HOLD OBJECTS
  const [projects, setProjects] = useState(null);
  //CREATE FUNCTION TO MAKE API CALL
  const getProjectsData = async () => {
    //MAKE API CALL AND GET THE RESPONSE
    const response = await fetch(props.URL + "projects");
    //TURN RESPONSE INTO JS OBJECT
    const data = await response.json();
    //SET THE PROJECTS STATE TO THE DATA
    setProjects(data);
    console.log(data);
  };

  //MAKE AN INITIAL CALL FOR THE DATA INSIDE A USE EFFECT SO IT ONLY HAPPENS ONCE ON COMPONENT LOAD
  useEffect(() => {
    getProjectsData();
  }, []);
  //DEFINE A FUNCTION THAT WILL RETURN THE JSX NEEDED ONCE WE GET THE DATA
  const loaded = () => {
    return projects.map((project) => (
      <div>
        <h1>{project.name}</h1>
        <img
          src={project.image}
          alt="project screenshot"
          className="projectImage"
        />
        <br />
        <a href={project.git}>
          <button>Github</button>
        </a>
        <a href={project.live}>
          <button>Live Site</button>
        </a>
      </div>
    ));
  };

  return projects ? loaded() : <h1>Loading...</h1>;
}

export default Projects;
