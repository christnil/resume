import React from 'react'

import './personal.css';

import { renderMarkdown } from '../../markdown';

const Personal = function({ personal, fallback }) {
  return (
    <div className="personal">
      <h1 className="name">{personal.name}</h1>
      {personal.description.map((paragraph, index) => <p key={index} dangerouslySetInnerHTML={{ __html: renderMarkdown(paragraph) }} />)}
      {fallback && <small className="content-language-note">{fallback}</small>}
    </div>
  );
};

export default Personal;
