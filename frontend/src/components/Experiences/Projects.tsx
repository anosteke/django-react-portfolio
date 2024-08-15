import { useState, useEffect } from "react";
import Project, { ProjectProps } from "./ProjectCard";
import axios from "axios";
import '../../styles/projects.scss';

const Projects = () => {

  const [projects, setProjects] = useState<ProjectProps[]>([]);

  useEffect(() => {
    axios.get('https://prw.pythonanywhere.com/api/projects/')
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the projects!', error);
      });
  }, []);

  return (
    <div className="projects-container">
      <h3 className="section-title font-extrabold">Personal Projects 🎮</h3>
      <div className="projects-grid">
        {projects.map(project => (<Project title={project.title} description={project.description} imageUrl={project.imageUrl} url={project.url} skills={project.skills} />))}
      </div>
    </div>
  );
};


export default Projects;
