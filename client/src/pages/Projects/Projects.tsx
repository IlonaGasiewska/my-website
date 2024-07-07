import Project from '../../components/Project/Project';
import { projects } from '../../consts/projects';

import './Projects.css';

function Projects() {
  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul className="projects-holder">
        {projects.map((project, index) => (
          <li key={index}>
            <Project
              index = {index}
              name={project.name}
              link={project.link}
              description={project.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
