import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export function Hero() {
  return (
    <section className="hero">
      <div className="wrap">

        <h1 className="hero__heading">
          Analista Programador<br />
          & Operaciones <span className="accent">TI</span>
        </h1>

        <p className="hero__body">
          Soy Pedro Sandoval. Me especializo en automatizar lo repetitivo,
          integrar sistemas TI que no se hablan entre sí, y mantener la
          infraestructura funcionando antes de que alguien se dé cuenta de que
          algo falló. Python, APIs REST, PowerBI, Active Directory.
        </p>

        <div className="hero__actions">
          <a href="#trabalhos" className="btn btn--primary">
            Ver Casos de Trabajo <ArrowRight size={15} />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn btn--ghost">
            <Mail size={15} /> Escribirme
          </a>
        </div>
      </div>
    </section>
  );
}
