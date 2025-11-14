import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import { Link } from "react-router-dom";

function Projects() {
  const { theme } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto shadow-2xl">
            <Link to="/" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Home</Link>
            <Link to="/about" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">About</Link>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">Projects</span>
            <Link to="/skills" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Skills</Link>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">My Projects</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {user_info.projects.map((project, index) => (
            <div
              key={index}
              className="group relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="mb-3">
                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies && (
                      <img
                        src={project.technologies + (theme === 'dark' ? 'dark' : 'light')}
                        alt="Technologies"
                        className="h-5 sm:h-6"
                      />
                    )}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-cyan-300 text-xs sm:text-sm font-medium transition-colors duration-300 hover:underline"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-white/5 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Home</Link>
              <Link to="/about" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">About</Link>
              <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">Projects</span>
              <Link to="/skills" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Skills</Link>
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
