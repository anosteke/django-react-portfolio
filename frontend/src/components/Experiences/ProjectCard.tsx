import { useState, useEffect } from "react";
import '../../styles/project.scss';

export interface ProjectProps
{
    title : string;
    description : string;
    skills : JSON;
    url : string;
    imageUrl : string;
}

const Project = (project : ProjectProps) => {


  return (
    <div onClick = {() => window.open(project.url)} className="project-card width-on-small">
        <img className="project-image" src={project.imageUrl}></img>
        <div className="project">
            <h3 className="project-title font-bold">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="skills">
                {Object.values(project.skills).map(skill => (
                    <span className="skill">{skill}</span>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Project;
