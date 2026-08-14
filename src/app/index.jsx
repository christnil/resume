import ExperienceList from "./experience/experience-list";
import Personal from './personal/personal';

import './index.css';
import EducationList from "./education/education-list";

import { ui } from '../i18n';

const Resume = function({ language, data }) {
  const labels = ui[language];
  const otherLanguagePath = language === 'en' ? '/resume/sv/' : '/resume/';
  return (
    <div className="main">
      <div className="main__links"><a href={`/resume/christoffer-nilsson-${language}.pdf`} target="_blank">{labels.downloadPdf}</a><a href={otherLanguagePath}>{labels.switchLanguage}</a></div>
      <Personal personal={data.personal} fallback={data.personal.fallback ? labels.fallback : null} />
      <h2 className="main__section-title">{labels.experience}</h2>
      <ExperienceList experiences={data.experience} labels={{ ongoing: labels.ongoing, fallback: labels.fallback }} />
      <h2 className="main__section-title">{labels.education}</h2>
      <EducationList list={data.education} labels={{ ongoing: labels.ongoing, fallback: labels.fallback }} />
    </div>
  )
}

export default Resume;
