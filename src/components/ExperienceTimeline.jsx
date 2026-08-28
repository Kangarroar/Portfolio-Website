import React from 'react';
import { experience } from '../data/portfolioData';

export function ExperienceTimeline() {
  return (
    <section id="experiencia" className="section">
      <div className="wrap">
        <h2 className="section__heading">Experiencia</h2>

        <div className="exp-list">
          {experience.map(item => (
            <div key={item.id} className="exp-item">
              <div className="exp-item__meta">
                <span className="exp-item__period">{item.period}</span>
                <span className="exp-item__company">{item.company}</span>
              </div>

              <div>
                <h3 className="exp-item__role">{item.role}</h3>
                <p className="exp-item__desc">{item.description}</p>

                <div className="exp-achievements">
                  {item.achievements.map((a, i) => (
                    <div key={i} className="exp-achievement">
                      <span className="exp-achievement__text">{a}</span>
                    </div>
                  ))}
                </div>

                <div className="exp-tools">
                  {item.tools.map((t, i) => (
                    <span key={i} className="tool-pill">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
