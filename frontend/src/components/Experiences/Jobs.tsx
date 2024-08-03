
import WaveSeparator from "../WaveSeparator";
import "../../styles/jobs.scss"
import ExperienceCard from "./ExperienceCard";
import { useRef } from "react";

const jobDescInsee = `
More coming...`

const jobDescSteelSeries = `
- Working for a US/French team in SteelSeries, one of the world leaders in gaming hardware
- Design and development with React and Python of a software tool for generating configurations from images and videos for automated video clip captures
- Close collaboration with the team to ensure seamless integration of the tool into the existing ecosystem`

const jobDescLig = `
- Research into new methods for processing VAD (Voice Activity Detection) output data to create speech segmentation
- Development and training of supervised learning models
- Writing of a scientific article`

const Jobs = () => {

  return (
    <div className="jobs">
      <h3 className="job-title font-extrabold">Professional Experience 🧑🏽‍💻</h3>
      <div className="jobs-list">
            <ExperienceCard title='Software Engineer' company='INSEE' description={jobDescInsee} duration='2024 - now' link='insee.com' location='Lille' skills={['Python', 'React', 'Java', 'Spring']} key={'clé'}/>
            <ExperienceCard title='Intern Software Engineer' company='SteelSeries' description={jobDescSteelSeries} duration='2023 - 2024' link='steelseries.com' location='Lille' skills={['Python', 'React', 'Pywebview', 'OpenCV', 'TypeScript', 'Redux']} key={'clé'}/>
            <ExperienceCard title='Intern R&D Engineer' company='LIG' description={jobDescLig} duration='2022' link='liglab.fr' location='Grenoble' skills={['Python', 'Pytorch', 'Scikit-Learn', 'Pygad']} key={'clé'}/>

      </div>
    </div>
  );
};

export default Jobs;
