import React from 'react'
import ExperienceListItem from "./experience-list-item";

const ExperienceList = function({ experiences, ...rest }) {
  return (
    <div className="experience-list">
      {experiences.map(experience => (
        <div className="experience-list__item" key={`${experience.customerName} - ${experience.projectName}`}>
          <ExperienceListItem experience={experience} {...rest} />
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
