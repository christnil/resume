import ExperienceList from "./experience/experience-list";
import data from '../data';

import './index.css';

const Resume = function() {
  return (
    <div className="main">
      <div className="experience-section">
        <h2 className="section-title">{data.sv.experience.title}</h2>
        <ExperienceList experiences={data.sv.experience.list} />
      </div>
    </div>
  )
}

export default Resume;
