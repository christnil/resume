import ExperienceList from "./experience/experience-list";
import data from '../data';

import './index.css';

const Resume = function() {
  return (
    <div className="main">
      <div className="experience-section">
        <h2 className="section-title">{(data.en || data.sv).experience.title}</h2>
        <ExperienceList experiences={(data.en || data.sv).experience.list} />
      </div>
    </div>
  )
}

export default Resume;
