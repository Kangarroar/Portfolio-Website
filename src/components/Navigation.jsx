import { useState } from 'react'
import { textContent } from '../constants/text'

const Navigation = ({ currentLanguage, onLanguageChange }) => {
  const content = textContent[currentLanguage]
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            Pedro Sandoval
          </div>
          <div className="hidden md:flex space-x-8 pr-32">
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300" data-testid="nav-projects-link">
              {content.navigation.projects}
            </a>
            <a href="#resume" className="text-gray-300 hover:text-white transition-colors duration-300" data-testid="nav-resume-link">
              {content.navigation.resume}
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300" data-testid="nav-contact-link">
              {content.navigation.contact}
            </a>
          </div>
        </div>
        {/* Mobile Menu Button - positioned on right border */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden absolute top-4 right-6 text-white p-2 z-50"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#projects" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {content.navigation.projects}
              </a>
              <a 
                href="#resume" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {content.navigation.resume}
              </a>
              <a 
                href="#contact" 
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {content.navigation.contact}
              </a>
            </div>
          </div>
        )}
      </div>
      {/* Language Switcher */}
      <div className="absolute right-6 bottom-0 translate-y-[60%] z-50">
        <div className="bg-white/10 backdrop-blur-xl rounded-full border border-white/20 p-1 shadow-lg">
          <button
            onClick={() => onLanguageChange('es')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
              currentLanguage === 'es'
                ? 'bg-white text-black shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            ES
          </button>
          <button
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 ${
              currentLanguage === 'en'
                ? 'bg-white text-black shadow-lg'
                : 'text-white hover:bg-white/10'
            }`}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
