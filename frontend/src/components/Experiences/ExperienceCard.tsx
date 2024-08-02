import React, { useState } from 'react';
import '../../styles/experiencecard.scss';

interface ExperienceCardProps {
  title: string;
  company: string;
  location: string;
  link: string;
  duration: string;
  description: string;
  skills: string[];
}

const ExperienceCard = ({ title, company, location, link, duration, description, skills } : ExperienceCardProps) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCard = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div>
        <div className={`experience-card`}>
          <div className={`experience-header ${isOpen ? 'open' : ''}`}>
            <div className="title-company">
              <h2>{title} @ {company}</h2>
            </div>
            <div className="duration hide-on-small">{duration}</div>
            <button className="toggle-button" onClick={toggleCard}>
              {isOpen ? '-' : '+'}
            </button>
          </div>
        </div>
        {isOpen && (
          <div className={`experience-card ${isOpen ? 'open' : ''}`}>
            <div className='experience-body'>
              <div className='complementary-information'>
                <a href={`http://${link}`} className="company-link" target="_blank" rel="noopener noreferrer">{link}</a>
                <p className="location"><i className="fas fa-map-marker-alt"></i> {location}</p>
              </div>
              <p className="description">{description}</p>
              <div className="skills">
                {skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };
  
  export default ExperienceCard;