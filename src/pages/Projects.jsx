import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import { Link } from "react-router-dom";

function Projects() {
  const { theme } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto">
            <Link to="/" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Home</Link>
            <Link to="/about" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">About</Link>
            <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Blog</Link>
            <span className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">Projects</span>
            <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">AI</Link>
            <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Lab</Link>
            <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Readings</Link>
            <Link to="/uses" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Uses</Link>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 text-center">My Projects</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {user_info.projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-4 sm:p-6 hover:bg-gray-750 transition-colors"
            >
              <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
                {project.title}
              </h4>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies && (
                  <img
                    src={project.technologies + (theme === 'dark' ? 'dark' : 'light')}
                    alt="Technologies"
                    className="h-5 sm:h-6"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Home</Link>
              <Link to="/about" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
              <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link>
              <span className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">Projects</span>
              <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link>
              <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link>
              <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Readings</Link>
              <Link to="/uses" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Adnan Jamil. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Projects;
