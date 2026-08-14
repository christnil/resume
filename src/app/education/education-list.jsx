import React from 'react';

import './education-list.css';
import EducationEntry from "./education-entry";

function EducationList({ list, labels }) {
  return (
    <div className="education-list">
      {list.map(entry => (
        <div className="education-list__entry" key={entry.slug}>
          <EducationEntry entry={entry} labels={labels} />
        </div>
      ))}
    </div>
  )
};

export default EducationList;
