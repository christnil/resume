import React from 'react';
import Skill from "./skill";

import './skills.css';

const Skills = function({ experiences }) {
  const categories = {};
  const categoryList = [];
  experiences.forEach(experience => {
    experience.keywords.forEach(skill => {
      if (!categories[skill.category]) {
        categories[skill.category] = {};
        categoryList.push(skill.category);
      }
      if (!categories[skill.category][skill.name] || categories[skill.category][skill.name] < (skill.involvement * skill.usage)) {
        categories[skill.category][skill.name] = (skill.involvement * skill.usage);
      }
    })
  });
  return (
    <div className="skills">
      {categoryList.sort().map(cat => (
        <Skill category={cat} skill={categories[cat]} key={cat} />
      ))}
    </div>
  );
};

export default Skills;
