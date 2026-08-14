import React from 'react';

import './education-entry.css';

function EducationEntry({ entry, labels }) {
  return (
    <div className="education-entry">
      <div className="education-entry__title">
        <div className="education-entry__institute">{entry.institute}</div>
        <div className="education-entry__name">{entry.degree}</div>
      </div>
      <div className="education-entry__duration">
        <div className="education-entry__from">{entry.from}</div>
        <div className="education-entry__to">{entry.to || labels.ongoing}</div>
      </div>
      {entry.fallback && <small className="content-language-note">{labels.fallback}</small>}
    </div>
  )
};

export default EducationEntry;
