import React from 'react'

import './personal.css';

const Personal = function({ personal }) {
  return (
    <div className="personal">
      <h1 className="name">{personal.name}</h1>
      <p>{personal.personal}</p>
      <p>{personal.professional}</p>
      <p>{personal.favoriteProject}</p>
    </div>
  );
};

export default Personal;
