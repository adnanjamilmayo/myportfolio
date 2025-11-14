import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import { Link } from "react-router-dom";

function Skills() {
  const { theme } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto shadow-2xl">
            <Link to="/" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Home</Link>
            <Link to="/about" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">About</Link>
            <Link to="/projects" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Projects</Link>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">Skills</span>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">My Skills</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-5 sm:space-y-6">
            {/* Languages */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Languages</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {user_info.skills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Frameworks */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Frameworks & Technologies</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {user_info.skills.frameworks.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Database */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Database</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {user_info.skills.database.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-cyan-400 mb-4">Tools</h2>
                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {user_info.skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 backdrop-blur-sm bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-white rounded-lg text-xs sm:text-sm font-medium hover:from-cyan-500/30 hover:to-blue-500/30 hover:border-cyan-400 hover:scale-105 transition-all duration-300 shadow-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-white/5 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Home</Link>
              <Link to="/about" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">About</Link>
              <Link to="/projects" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Projects</Link>
              <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">Skills</span>
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

export default Skills;
