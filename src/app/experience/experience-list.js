import React from 'react'
import ExperienceListItem from "./experience-list-item";

const ExperienceList = function({ experiences }) {
  return (
    <div className="experience-list">
      {experiences.map(experience => (
        <div className="experience-list__item" key={`${experience.customerName} - ${experience.projectName}`}>
          <ExperienceListItem experience={experience} />
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
