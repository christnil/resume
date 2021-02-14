import React from 'react'

import './experience-list-item.css';
import ExperienceRole from "./experience-role";

const ExperienceListItem = function({ experience }) {
  return (
    <div className="experience">
      <div className="experience__title">
        <div className="experience__customer-name">{experience.customerName}</div>
        {!!experience.projectName && <div className="experience__project-name">{experience.projectName}</div>}
      </div>
      <div className="experience__duration">
        <div className="experience__from">{experience.from}</div>
        {!!experience.to && <div className="experience__to">{experience.to}</div>}
      </div>
      {!!experience.customerDescription && (
        <p className="experience__customer-description">
          {experience.customerDescription}
        </p>
      )}
      {!!experience.projectDescription && (
        <p className="experience__project-description">
          {experience.projectDescription}
        </p>
      )}
      {!!experience.roles && experience.roles.length > 0 && (
        <div className="experience__roles">
          {experience.roles.map(role => (
            <div className="experience__role" key={role.name}>
              <ExperienceRole role={role} />
            </div>
          ))}
        </div>
      )}
      {!!experience.keywords && experience.keywords.length > 0 && (
        <div className="experience__keywords">
          {experience.keywords.map(keyword => (
            <div
              className="experience__keyword"
              key={keyword.name}>
              {keyword.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceListItem;
