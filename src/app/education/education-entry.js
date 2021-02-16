import React from 'react';

import './education-entry.css';

function EducationEntry({ entry }) {
  return (
    <div className="education-entry">
      <div className="education-entry__title">
        <div className="education-entry__institute">{entry.institute}</div>
        <div className="education-entry__name">{entry.title}</div>
      </div>
      <div className="education-entry__duration">
        <div className="education-entry__from">{entry.from}</div>
        <div className="education-entry__to">{entry.to}</div>
      </div>
    </div>
  )
};

export default EducationEntry;
