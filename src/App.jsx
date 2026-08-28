import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { AutomationShowcase } from './components/AutomationShowcase';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactFooter } from './components/ContactFooter';
import './index.css';

export function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app-root">
      <Header theme={theme} onToggleTheme={handleToggleTheme} />
      <main>
        <Hero />
        <Projects />
        <AutomationShowcase />
        <ExperienceTimeline />
        <SkillsSection />
        <EducationCertifications />
      </main>
      <ContactFooter />
    </div>
  );
}

export default App;
