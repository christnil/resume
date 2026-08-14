import React from 'react'

import './experience-role.css';
import { renderMarkdown } from '../../content-loader';

const ExperienceRole = function({ role }) {
  return (
    <div className="role">
      <div className="role__name">{role.name}</div>
      <div className="role__description">
        {role.paragraphs.map((paragraph, index) => <p className="role__description-paragraph" key={index} dangerouslySetInnerHTML={{ __html: renderMarkdown(paragraph) }} />)}
      </div>
    </div>
  );
};

export default ExperienceRole;
