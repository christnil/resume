import React from 'react';

import './skill.css';

const Skill = function({ category, skill }) {
  const skillList = Object.keys(skill)
    .map(key => ({ name: key, value: skill[key] }))
    .sort((a, b) => {
      if (a.value < b.value) {
        return 1;
      }
      if (a.value > b.value) {
        return -1;
      }
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    })

  return (
    <div className="skill">
      <div className="skill__name">{category}</div>
      <div className="skill__list">
        {skillList.map(skill => (
          <div className="skill__entry">{skill.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
