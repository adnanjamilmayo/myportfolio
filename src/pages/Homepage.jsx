import {
  FaGithub,
  FaLinkedin,
  FaArrowCircleUp,
  FaDownload,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import { Link } from "react-router-dom";

function Homepage() {
  const { theme, switchTheme } = useContext(AppContext);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto shadow-2xl">
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">Home</span>
            <Link to="/about" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">About</Link>
            <Link to="/projects" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Projects</Link>
            <Link to="/skills" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Skills</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Profile Section - Centered */}
        <div className="text-center mb-16 sm:mb-20">
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <img
              src={user_info.main.photo}
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full mx-auto object-cover border-4 border-cyan-400/50 shadow-2xl hover:border-cyan-400 transition-all duration-300 hover:scale-105"
              alt="Profile"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
            {user_info.main.name}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 mb-6 font-semibold">
            {user_info.main.role}
          </h2>
          <p className="text-gray-300 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-10">
            {user_info.main.description}
          </p>
          
          {/* Contact Info */}
          <div className="flex justify-center items-center gap-3 text-gray-300 mb-8">
            <MdEmail className="text-xl text-cyan-400" />
            <span className="text-lg hover:text-cyan-400 transition-colors">{user_info.main.email}</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={user_info.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href={user_info.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href={user_info.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 transform"
            >
              <FaSquareXTwitter className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* Experience */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3 sm:gap-0">
                <h3 className="text-2xl sm:text-3xl font-bold text-white bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</h3>
                <button
                  onClick={() => window.location.href = 'https://docs.google.com/document/d/15NxlxduDKeHn9tYhA7P0-MCchyGxtxA6qwNJkMvz5GE/edit?tab=t.0'}
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-300 text-sm font-semibold w-full sm:w-auto shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  Download Resume
                  <FaDownload />
                </button>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent mb-8"></div>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-purple-500 opacity-30"></div>
                
                {user_info.experience.map((exp, index) => (
                  <div key={index} className="relative pl-10 sm:pl-11 pb-5 sm:pb-6 last:pb-0 group">
                    {/* Timeline dot with glow */}
                    <div className="absolute left-0 transform -translate-x-1/2 z-10">
                      <div className="absolute inset-0 bg-cyan-400 rounded-full blur-sm opacity-40"></div>
                      <div className="relative w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 rounded-full border-2 border-slate-900 shadow-lg ring-2 ring-cyan-400/30"></div>
                    </div>
                    
                    {/* Beautiful Compact Card */}
                    <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01]">
                      {/* Gradient overlay on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2 sm:gap-0">
                          <div className="flex-1">
                            <h4 className="font-bold text-white text-lg sm:text-xl mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                              {exp.title}
                            </h4>
                            <p className="text-cyan-400 font-semibold text-base sm:text-lg mb-1.5 flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                              {exp.company}
                            </p>
                            {exp.location && (
                              <div className="flex items-center gap-1.5 text-gray-400 text-xs sm:text-sm mt-1">
                                <MdLocationOn className="text-cyan-400 text-sm" />
                                <span>{exp.location}</span>
                              </div>
                            )}
                          </div>
                          <div className="flex-shrink-0">
                            <span className="inline-block bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-medium px-3 py-1 rounded-md backdrop-blur-sm">
                              {exp.period}
                            </span>
                          </div>
                        </div>
                        <div className="mt-3 pt-3 border-t border-white/10">
                          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 backdrop-blur-xl bg-white/5 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">Home</Link>
              <Link to="/about" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">About</Link>
              <Link to="/projects" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Projects</Link>
              <Link to="/skills" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Skills</Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Adnan Jamil. All Rights Reserved
              </p>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm hover:scale-105"
              >
                <FaArrowCircleUp />
                Back to top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
