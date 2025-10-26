const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-white font-bold text-xl">
            Pedro Sandoval
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors duration-300">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors duration-300">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors duration-300">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
