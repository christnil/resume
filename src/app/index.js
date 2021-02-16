import ExperienceList from "./experience/experience-list";
import Personal from './personal/personal';
import Skills from './skills/skills';
import data from '../data';

import './index.css';
import EducationList from "./education/education-list";

const Resume = function() {
  return (
    <div className="main">
      <Personal personal={data.en.personal} />
      <h2 className="main__section-title">{data.en.experience.title}</h2>
      <ExperienceList experiences={data.en.experience.list} labels={{ onGoing: data.en.experience.onGoing }} />
      <h2 className="main__section-title">{data.en.education.title}</h2>
      <EducationList list={data.en.education.list} />
      <h2 className="main__section-title">{data.en.skills.title}</h2>
      <p>{data.en.skills.description}</p>
      <Skills experiences={data.en.experience.list} />
    </div>
  )
}

export default Resume;
