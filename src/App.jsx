import { useState } from 'react'
import { colors } from './constants/colors'
import { textContent } from './constants/text'
import LanguageSwitcher from './components/LanguageSwitcher'
import Navigation from './components/Navigation'

function App() {
  const [language, setLanguage] = useState('es')
  const content = textContent[language]

  return (
    <div className={`min-h-screen bg-gradient-to-br ${colors.background.primary} relative overflow-hidden`}>
      {/* Navigation */}
      <Navigation currentLanguage={language} />
      
      <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
    
      <div className="absolute inset-0 overflow-hidden">
     </div>

      {/* Heroj */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h1 className={`text-6xl md:text-8xl font-bold bg-gradient-to-r ${colors.gradientText.hero} bg-clip-text text-transparent mb-4 animate-fade-in`}>
              {content.hero.name}
            </h1>
            <div className={`h-1 w-32 bg-gradient-to-r ${colors.gradientText.accent} mx-auto rounded-full`}></div>
          </div>
          <p className={`text-xl md:text-3xl ${colors.text.secondary} mb-8 mt-6 font-light`}>
            {content.hero.title}
          </p>
          <div className={`inline-flex items-center space-x-2 ${colors.glass.bg} backdrop-blur-md rounded-full px-6 py-3 ${colors.glass.border}`}>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className={`${colors.text.secondary} text-sm`}>{content.hero.status}</span>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-20" id="projects">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors.gradientText.heading} bg-clip-text text-transparent text-center mb-16`}>
            {content.projects.title}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className={`group relative overflow-hidden rounded-2xl ${colors.glass.bg} backdrop-blur-xl hover:${colors.glass.hover} transition-all duration-500 cursor-pointer ${colors.glass.border} hover:${colors.glass.borderHover} hover:scale-105 hover:shadow-2xl hover:${colors.projects.card1.hover}`}>
              <div className={`aspect-square bg-gradient-to-br ${colors.projects.card1.bg} flex items-center justify-center relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.projects.card1.overlay}`}></div>
                 <div className="text-center relative z-10">
                   <p className={`${colors.text.primary} text-xl font-semibold mb-2`}>{content.projects.card1.title}</p>
                   <p className={`${colors.text.muted} text-sm`}>{content.projects.card1.tech}</p>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className={`bg-gradient-to-r ${colors.projects.card1.icon} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}>
                  {content.projects.label}
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className={`group relative overflow-hidden rounded-2xl ${colors.glass.bg} backdrop-blur-xl hover:${colors.glass.hover} transition-all duration-500 cursor-pointer ${colors.glass.border} hover:${colors.glass.borderHover} hover:scale-105 hover:shadow-2xl hover:${colors.projects.card2.hover}`}>
              <div className={`aspect-square bg-gradient-to-br ${colors.projects.card2.bg} flex items-center justify-center relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.projects.card2.overlay}`}></div>
                 <div className="text-center relative z-10">
                   <p className={`${colors.text.primary} text-xl font-semibold mb-2`}>{content.projects.card2.title}</p>
                   <p className={`${colors.text.muted} text-sm`}>{content.projects.card2.tech}</p>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className={`bg-gradient-to-r ${colors.projects.card2.icon} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}>
                  {content.projects.label}
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className={`group relative overflow-hidden rounded-2xl ${colors.glass.bg} backdrop-blur-xl hover:${colors.glass.hover} transition-all duration-500 cursor-pointer ${colors.glass.border} hover:${colors.glass.borderHover} hover:scale-105 hover:shadow-2xl hover:${colors.projects.card3.hover}`}>
              <div className={`aspect-square bg-gradient-to-br ${colors.projects.card3.bg} flex items-center justify-center relative`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.projects.card3.overlay}`}></div>
                 <div className="text-center relative z-10">
                   <p className={`${colors.text.primary} text-xl font-semibold mb-2`}>{content.projects.card3.title}</p>
                   <p className={`${colors.text.muted} text-sm`}>{content.projects.card3.tech}</p>
                 </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className={`bg-gradient-to-r ${colors.projects.card3.icon} text-white px-6 py-3 rounded-full font-semibold shadow-lg`}>
                  {content.projects.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-20" id="about">
          <h2 className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${colors.gradientText.heading} bg-clip-text text-transparent text-center mb-16`}>
            {content.about.title}
          </h2>
          <div className={`${colors.glass.bg} backdrop-blur-xl rounded-3xl p-8 md:p-16 ${colors.glass.border} relative overflow-hidden`}>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 to-gray-800/5"></div>
            <div className="relative z-10">
              {content.about.content.map((paragraph, index) => (
                <p key={index} className={`${colors.text.secondary} text-lg leading-relaxed mb-6`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center" id="contact">
          <h3 className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${colors.gradientText.heading} bg-clip-text text-transparent mb-6`}>
            {content.contact.title}
          </h3>
          <p className={`${colors.text.secondary} mb-12 text-lg`}>{content.contact.subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className={`group relative bg-gradient-to-r ${colors.buttons.primary.bg} text-white px-10 py-4 rounded-full font-semibold hover:${colors.buttons.primary.hover} transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:${colors.buttons.primary.shadow}`}>
              <span className="relative z-10">{content.contact.primaryButton}</span>
              <div className={`absolute inset-0 bg-gradient-to-r ${colors.buttons.primary.hover} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
            </button>
            <button className={`group relative border-2 ${colors.buttons.secondary.border} text-white px-10 py-4 rounded-full font-semibold hover:${colors.buttons.secondary.bg} hover:${colors.buttons.secondary.hover} transition-all duration-300 hover:scale-105 backdrop-blur-sm`}>
              <span className="relative z-10">{content.contact.secondaryButton}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
