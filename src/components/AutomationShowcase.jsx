import React, { useState } from 'react';
import { automationHighlights } from '../data/portfolioData';

export function AutomationShowcase() {
  const [activeId, setActiveId] = useState(automationHighlights[0].id);
  const entry = automationHighlights.find(p => p.id === activeId);

  return (
    <section id="trabalhos" className="section">
      <div className="wrap">
        <h2 className="section__heading">Casos de Automatización</h2>

        <div className="work-tabs">
          {automationHighlights.map(p => (
            <button
              key={p.id}
              className={`work-tab${activeId === p.id ? ' is-active' : ''}`}
              onClick={() => setActiveId(p.id)}
            >
              {p.shortTitle}
            </button>
          ))}
        </div>

        {entry && (
          <article>
            <p className="work-entry__category mono">{entry.category} · {entry.period}</p>
            <h3 className="work-entry__title">{entry.title}</h3>
            <p className="work-entry__desc">{entry.description}</p>

            <div className="work-entry__block">
              <div>
                <p className="work-entry__item-label">El problema</p>
                <p className="work-entry__item-text">{entry.problem}</p>
              </div>
              <div>
                <p className="work-entry__item-label">La solución</p>
                <p className="work-entry__item-text">{entry.solution}</p>
              </div>
            </div>

            <p className="work-entry__item-label" style={{ marginBottom: '0.75rem' }}>Flujo del proceso</p>
            <div className="flow-steps">
              {entry.architectureSteps.map((step, i) => (
                <div key={i} className="flow-step">
                  <div className="flow-step__num">{step.step}</div>
                  <div className="flow-step__name">{step.name}</div>
                  <div className="flow-step__desc">{step.desc}</div>
                </div>
              ))}
            </div>

            <p className="work-entry__item-label" style={{ marginBottom: '0.4rem' }}>Resultado</p>
            <p className="work-entry__item-text" style={{ marginBottom: '1.25rem' }}>{entry.impact}</p>

            <div className="work-entry__tools">
              {entry.tools.map((t, i) => (
                <span key={i} className="tool-pill">{t}</span>
              ))}
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
