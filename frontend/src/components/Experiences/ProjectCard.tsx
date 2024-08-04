import { useState, useEffect } from "react";
import '../../styles/project.scss';

interface ProjectCardProps
{
    title : string;
    url : string;
    imgSrc : string;
    description : string;
    skills : string[];
}

const Project = (project : ProjectCardProps) => {


  return (
    <div onClick = {() => window.open(project.url)} className="project-card width-on-small">
        <img className="project-image" src={project.imgSrc}></img>
        <div className="project">
            <h3 className="project-title font-bold">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="skills">
                {project.skills.map(skill => (
                    <span key={skill} className="skill">{skill}</span>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Project;
