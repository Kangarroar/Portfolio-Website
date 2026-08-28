import React from 'react';
import { personalInfo } from '../data/portfolioData';

export function ContactFooter() {
  return (
    <footer id="contacto" className="contact-section">
      <div className="wrap">
        <h2 style={{ marginBottom: '1rem' }}>Contacto</h2>
        <p className="contact-intro">
          Abierto a posiciones en soporte TI, automatización de procesos,
          integración de sistemas y desarrollo. Respondo rápido.
        </p>

        <div className="contact-row">
          <div>
            <p className="contact-item__label">Correo</p>
            <a href={`mailto:${personalInfo.email}`} className="contact-item__value">
              {personalInfo.email}
            </a>
          </div>

          <div>
            <p className="contact-item__label">LinkedIn</p>
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item__value"
            >
              pedro-sandoval-munoz
            </a>
          </div>

          <div>
            <p className="contact-item__label">GitHub</p>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item__value"
            >
              Kangarroar
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            &copy; {new Date().getFullYear()} Pedro Sandoval Muñoz
          </span>
          <div className="footer-links">
            <a
              href={personalInfo.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
            <a
              href={personalInfo.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              GitHub
            </a>
            <a
              href={personalInfo.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              psandoval.pages.dev
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
