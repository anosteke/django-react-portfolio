import React, { useState } from 'react';
import '../../styles/experiencecard.scss';
import { Url } from 'url';

export interface ExperienceCardProps {
  job: string;
  company: string;
  location: string;
  url: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: JSON;
}

const ExperienceCard = ({ job, company, location, url, startDate, endDate, description, skills }: ExperienceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`experience-card ${isOpen ? 'open' : ''}`}>
        <div className={`experience-header ${isOpen ? 'open' : ''}`}>
          <div className="title-company">
            <h2>{job} @ {company}</h2>
          </div>
          <div className="duration hide-on-small">{endDate ? `${startDate} - ${endDate}` : `${startDate} - now`}</div>
          <button className="toggle-button" onClick={toggleCard}>
            {isOpen ? '-' : '+'}
          </button>
        </div>
      </div>
      <div className={`experience-body ${isOpen ? 'open' : ''}`}>
        <div className='complementary-information'>
          <a href={url} className="company-link" target="_blank" rel="noopener noreferrer">{url.replace(/^https?\:\/\//i, "")}</a>
          <p className="location"><i className="fas fa-map-marker-alt"></i>{location}</p>
        </div>
        <div className='description'>
          {description.split('-').filter(line => line.trim() !== '').map((line, index) => (
            <p key={index}>- {line.trim()}</p>
          ))}
          </div>
          <div className="skills">
            {Object.values(skills).map((skill, index) => (
              <span key={index} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      </div>
      );
  };

      export default ExperienceCard;