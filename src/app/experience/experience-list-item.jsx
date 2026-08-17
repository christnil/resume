import React from 'react'

import './experience-list-item.css';
import ExperienceRole from "./experience-role";

const ExperienceListItem = function({ experience, labels }) {
  return (
    <div className="experience">
      <div className="experience__title">
        <div className="experience__customer-name">{experience.company}</div>
        {!!experience.project && <div className="experience__project-name">{experience.project}</div>}
        {!!experience.via && <div className="experience__via">via {experience.via}</div>}
      </div>
      <div className="experience__duration">
        <div className="experience__from">{experience.from}</div>
        <div className="experience__to">{experience.to || labels.ongoing}</div>
      </div>
      {!!experience.tags.length && <div className="experience__tags">{experience.tags.join(' · ')}</div>}
      {experience.description.map((paragraph, index) => <MarkdownParagraph key={index} className="experience__customer-description" markdown={paragraph} />)}
      {!!experience.roles.length && (
        <div className="experience__roles">
          {experience.roles.map(role => (
            <div className="experience__role" key={role.name}>
              <ExperienceRole role={role} />
            </div>
          ))}
        </div>
      )}
      {experience.fallback && <small className="content-language-note">{labels.fallback}</small>}
    </div>
  );
};

import { renderMarkdown } from '../../markdown';
const MarkdownParagraph = ({ className, markdown }) => <p className={className} dangerouslySetInnerHTML={{ __html: renderMarkdown(markdown) }} />;

export default ExperienceListItem;
