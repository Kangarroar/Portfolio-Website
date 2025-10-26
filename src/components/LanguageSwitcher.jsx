import { useState } from 'react'

const LanguageSwitcher = ({ currentLanguage, onLanguageChange }) => {
  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-xl rounded-full border border-white/20 p-1">
        <button
          onClick={() => onLanguageChange('es')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentLanguage === 'es'
              ? 'bg-white text-black shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          ES
        </button>
        <button
          onClick={() => onLanguageChange('en')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            currentLanguage === 'en'
              ? 'bg-white text-black shadow-lg'
              : 'text-white hover:bg-white/10'
          }`}
        >
          EN
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher
