import React from 'react';

import './education-list.css';
import EducationEntry from "./education-entry";

function EducationList({ list }) {
  return (
    <div className="education-list">
      {list.map(entry => (
        <div className="education-list__entry" key={entry.title}>
          <EducationEntry entry={entry} />
        </div>
      ))}
    </div>
  )
};

export default EducationList;
