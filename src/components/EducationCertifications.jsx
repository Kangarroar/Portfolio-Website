import React from 'react';
import { education, certifications } from '../data/portfolioData';

export function EducationCertifications() {
  return (
    <section className="section">
      <div className="wrap">
        <h2 className="section__heading">Formación & Certificaciones</h2>

        <div className="edu-grid">
          <div>
            <p className="edu-label">Título</p>
            <h3 className="edu-title">{education.degree}</h3>
            <p className="edu-institution">{education.institution}</p>
            <p className="edu-date">{education.graduationDate}</p>
            <p className="edu-body">{education.details}</p>
          </div>

          {certifications.map((cert, i) => (
            <div key={i}>
              <p className="edu-label">Certificación Internacional</p>
              <h3 className="edu-title">{cert.level}</h3>
              <p className="edu-institution">{cert.issuer}</p>
              <p className="edu-date">{cert.title}</p>
              <p className="edu-body">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
