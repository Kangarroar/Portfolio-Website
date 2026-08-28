import React from 'react';
import { skillCategories } from '../data/portfolioData';

export function SkillsSection() {
  return (
    <section id="habilidades" className="section">
      <div className="wrap">
        <h2 className="section__heading">Habilidades</h2>

        <div className="skills-grid">
          {skillCategories.map((cat, i) => (
            <div key={i}>
              <p className="skill-group__heading">{cat.category}</p>
              <ul className="skill-list">
                {cat.skills.map((skill, j) => (
                  <li key={j} className="skill-item">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
