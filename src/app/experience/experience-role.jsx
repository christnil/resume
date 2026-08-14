import React from 'react'

import './experience-role.css';

const ExperienceRole = function({ role }) {
  return (
    <div className="role">
      <div className="role__name">{role.name}</div>
      <div className="role__description">
        {typeof role.description === 'string' && <p className="role__description-paragraph">{role.description}</p>}
        {Array.isArray(role.description) && role.description.map((paragraph, index) => (
          <p className="role__description-paragraph" key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default ExperienceRole;
