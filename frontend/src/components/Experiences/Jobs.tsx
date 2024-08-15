
import WaveSeparator from "../WaveSeparator";
import "../../styles/jobs.scss"
import ExperienceCard, { ExperienceCardProps } from "./ExperienceCard";
import { useEffect, useState } from "react";
import axios from "axios";

const Jobs = () => {

  const [experiences, setExperiences] = useState<ExperienceCardProps[]>([]);

  useEffect(() => {
      axios.get('https://prw.pythonanywhere.com/api/jobs/')
          .then(response => {
            setExperiences(response.data.sort((a : ExperienceCardProps, b : ExperienceCardProps) => new Date(b.startDate).getTime() - new Date(a.startDate).getTime()));
          })

          .catch(error => {
              console.error('There was an error fetching the jobs!', error);
          });
  }, []);


  return (
    <div className="jobs">
      <h3 className="section-title font-extrabold">Professional Experience 🧑🏽‍💻</h3>
      <div className="jobs-list">
            {experiences.map(experience => (<ExperienceCard company={experience.company} description={experience.description} startDate={experience.startDate?.substring(0, 4)} endDate={experience.endDate?.substring(0, 4)} job={experience.job} url={experience.url} location={experience.location} skills={experience.skills}/>))}
            {/* <ExperienceCard title='Software Engineer' company='INSEE' description={jobDescInsee} duration='2024 - now' link='insee.com' location='Lille' skills={['Python', 'React', 'Java', 'Spring']}/>
            <ExperienceCard title='Intern Software Engineer' company='SteelSeries' description={jobDescSteelSeries} duration='2023 - 2024' link='steelseries.com' location='Lille' skills={['Python', 'React', 'Pywebview', 'OpenCV', 'TypeScript', 'Redux']}/>
            <ExperienceCard title='Intern R&D Engineer' company='LIG' description={jobDescLig} duration='2022' link='liglab.fr' location='Grenoble' skills={['Python', 'Pytorch', 'Scikit-Learn', 'Pygad']}/> */}

      </div>
    </div>
  );
};

export default Jobs;
