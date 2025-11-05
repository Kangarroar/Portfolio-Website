import { useState } from 'react'
import { colors } from './constants/colors'
import { textContent } from './constants/text'
import Navigation from './components/Navigation'
import yemcImage from './assets/yemc.png'
import lfcImage from './assets/lfc.png'

function App() {
  const [language, setLanguage] = useState('es')
  const content = textContent[language]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.background.primary} relative overflow-hidden`}>
      {/* Navigation */}
      <Navigation currentLanguage={language} onLanguageChange={setLanguage} />
    
      {/* */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-28 -left-28 h-96 w-[48rem] rounded-full bg-[#8E05C2]/10 blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-28 -right-28 h-96 w-[48rem] rounded-full bg-[#700B97]/10 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center mb-32">
          <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            {content.hero.name}
          </h1>
          <p className={`text-2xl md:text-4xl ${colors.text.secondary} mb-4 font-light`}>
            {content.hero.title}
          </p>
          <p className={`text-xl md:text-2xl ${colors.text.accent} mb-6 font-light`}>
            {content.hero.subtitle}
          </p>
          <p className={`text-lg md:text-xl ${colors.text.muted} mb-8 max-w-2xl mx-auto`}>
            {content.hero.description}
          </p>
          <div className={`inline-flex items-center space-x-2 ${colors.glass.bg} backdrop-blur-md rounded-full px-6 py-3 ${colors.glass.border}`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`${colors.text.secondary} text-sm`}>{content.hero.status}</span>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-32" id="projects">
          <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${colors.gradientText.heading} bg-clip-text text-transparent text-center mb-16`}>
            {content.projects.title}
          </h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* YEMC Project */}
            <a 
              href={content.projects.yemc.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} hover:${colors.glass.borderHover} rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#000000]">
                <img 
                  src={yemcImage} 
                  alt={content.projects.yemc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`text-2xl font-bold ${colors.text.primary} mb-2`}>
                    {content.projects.yemc.title}
                  </h3>
                  <p className={`${colors.text.secondary} mb-2 text-sm`}>
                    {content.projects.yemc.description}
                  </p>
                  <p className={`${colors.text.muted} text-xs`}>
                    {content.projects.yemc.tech}
                  </p>
                </div>
              </div>
            </a>

            {/* Legion Fan Controller Project */}
            <a 
              href={content.projects.lfc.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block ${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} hover:${colors.glass.borderHover} rounded-2xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#000000]">
                <img 
                  src={lfcImage} 
                  alt={content.projects.lfc.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`text-2xl font-bold ${colors.text.primary} mb-2`}>
                    {content.projects.lfc.title}
                  </h3>
                  <p className={`${colors.text.secondary} mb-2 text-sm`}>
                    {content.projects.lfc.description}
                  </p>
                  <p className={`${colors.text.muted} text-xs`}>
                    {content.projects.lfc.tech}
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Resume Section - Digitalized CV */}
        <div className="mb-32" id="resume">
          <div className="flex flex-col items-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${colors.gradientText.heading} bg-clip-text text-transparent text-center mb-8`}>
              {content.resume.title}
            </h2>
            <a
              href="/src/assets/Pedro_Sandoval_CV.PDF"
              download="Pedro_Sandoval_CV.pdf"
              className={`group relative bg-gradient-to-r ${colors.buttons.primary.bg} text-white px-8 py-3 rounded-full font-semibold hover:${colors.buttons.primary.hover} transition-all duration-300 hover:scale-105 flex items-center gap-2`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              {content.resume.downloadButton}
            </a>
          </div>
          
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Contact Info */}
            <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>
                {content.resume.contact.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p className={`${colors.text.secondary}`}>📍 {content.resume.contact.location}</p>
                <a 
                  href={`mailto:${content.resume.contact.email}`}
                  className={`${colors.text.secondary} hover:${colors.text.primary} transition-colors underline decoration-2 decoration-[#8E05C2]/50 hover:decoration-[#8E05C2] cursor-pointer font-medium`}
                >
                  ✉️ {content.resume.contact.emailLinkText}
                </a>
              </div>
            </div>

            {/* About */}
            <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>
                {content.resume.about.title}
              </h3>
              <p className={`${colors.text.secondary} leading-relaxed`}>
                {content.resume.about.text}
              </p>
            </div>

            {/* Experience */}
            <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>
                {content.resume.experience.title}
              </h3>
              <div className="space-y-6">
                {content.resume.experience.jobs.map((job, index) => (
                  <div key={index} className="border-l-2 border-white/20 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className={`text-xl font-semibold ${colors.text.primary}`}>
                        {job.company}
                      </h4>
                      <span className={`${colors.text.muted} text-sm`}>
                        {job.period}
                      </span>
                    </div>
                    <p className={`${colors.text.secondary} font-medium mb-2`}>
                      {job.role}
                    </p>
                    {job.description && (
                      <p className={`${colors.text.secondary} mb-3 text-sm`}>
                        {job.description}
                      </p>
                    )}
                    {job.achievements.length > 0 && (
                      <ul className="list-disc list-inside space-y-1">
                        {job.achievements.map((achievement, i) => (
                          <li key={i} className={`${colors.text.secondary} text-sm`}>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>
                {content.resume.education.title}
              </h3>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className={`text-xl font-semibold ${colors.text.primary}`}>
                    {content.resume.education.degree}
                  </h4>
                  <p className={`${colors.text.secondary}`}>
                    {content.resume.education.institution}
                  </p>
                </div>
                <span className={`${colors.text.muted} mt-2 md:mt-0`}>
                  {content.resume.education.year}
                </span>
              </div>
            </div>

            {/* Skills */}
            <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-6`}>
                {content.resume.skills.title}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technical Skills */}
                <div>
                  <h4 className={`text-lg font-semibold ${colors.text.primary} mb-3`}>
                    {content.resume.skills.technical.title}
                  </h4>
                  <ul className="space-y-2">
                    {content.resume.skills.technical.items.map((skill, index) => (
                      <li key={index} className={`${colors.text.secondary} flex items-center`}>
                        <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Soft Skills */}
                <div>
                  <h4 className={`text-lg font-semibold ${colors.text.primary} mb-3`}>
                    {content.resume.skills.soft.title}
                  </h4>
                  <ul className="space-y-2">
                    {content.resume.skills.soft.items.map((skill, index) => (
                      <li key={index} className={`${colors.text.secondary} flex items-center`}>
                        <span className="w-2 h-2 bg-white/40 rounded-full mr-3"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8`}>
              <h3 className={`text-2xl font-bold ${colors.text.primary} mb-4`}>
                {content.resume.certifications.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {content.resume.certifications.items.map((cert, index) => (
                  <span 
                    key={index}
                    className={`${colors.glass.bg} ${colors.glass.border} px-4 py-2 rounded-full ${colors.text.secondary}`}
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mb-20" id="contact">
          <h3 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors.gradientText.heading} bg-clip-text text-transparent mb-6`}>
            {content.contact.title}
          </h3>
          <p className={`${colors.text.secondary} mb-12 text-lg`}>{content.contact.subtitle}</p>
          <div className={`${colors.glass.bg} backdrop-blur-xl ${colors.glass.border} rounded-2xl p-8 max-w-2xl mx-auto`}>
            <div className="space-y-6">
              <a 
                href={`mailto:${content.contact.email}`}
                className={`inline-flex items-center gap-2 ${colors.glass.bg} ${colors.glass.border} border rounded-full px-6 py-3 ${colors.text.primary} hover:${colors.text.accent} transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#8E05C2]/20 cursor-pointer font-medium`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {content.contact.emailLinkText}
              </a>
              
              {/* Social Links with Icons */}
              <div className="flex justify-center gap-6 pt-6 border-t border-white/10">
                {/* GitHub */}
                <a 
                  href={`https://${content.contact.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${colors.text.secondary} hover:${colors.text.primary} transition-all duration-300 hover:scale-110`}
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                
                {/* LinkedIn */}
                <a 
                  href={`https://${content.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${colors.text.secondary} hover:${colors.text.primary} transition-all duration-300 hover:scale-110`}
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
