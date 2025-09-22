import {
  FaGithub,
  FaLinkedin,
  FaArrowCircleUp,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import ToggleTheme from "../components/ToggleTheme.jsx";
import { FaCode, FaServer, FaCloud } from "react-icons/fa";
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
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto">
            <Link to="/about" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">About</Link>
            <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Blog</Link>
            <Link to="/projects" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Projects</Link>
            <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">AI</Link>
            <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Lab</Link>
            <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Readings</Link>
            <Link to="/uses" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Uses</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Profile Section - Centered */}
        <div className="text-center mb-12 sm:mb-16">
          <img
            src={user_info.main.photo}
            className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full mx-auto mb-6 sm:mb-8 object-cover border-4 border-cyan-400 shadow-2xl"
            alt="Profile"
          />
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            {user_info.main.name}
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
            {user_info.main.role}
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto mb-8">
            {user_info.main.description}
          </p>
          
          {/* Contact Info */}
          <div className="flex justify-center items-center gap-3 text-gray-300 mb-8">
            <MdEmail className="text-xl" />
            <span className="text-lg">{user_info.main.email}</span>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={user_info.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href={user_info.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href={user_info.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaSquareXTwitter className="text-3xl" />
            </a>
          </div>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 sm:space-y-8">
            {/* Experience */}
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 sm:mb-2 gap-3 sm:gap-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white">Experience</h3>
                <button
                  onClick={() => window.location.href = 'https://docs.google.com/document/d/15NxlxduDKeHn9tYhA7P0-MCchyGxtxA6qwNJkMvz5GE/edit?tab=t.0'}
                  className="inline-flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium w-full sm:w-auto"
                >
                  Download Resume
                  <FaDownload />
                </button>
              </div>
              <div className="w-full h-px bg-gray-600 mb-6"></div>
              <div className="relative">
                {/* Vertical line */}
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-600"></div>
                
                {user_info.experience.map((exp, index) => (
                  <div key={index} className="relative pl-6 sm:pl-8 pb-6 sm:pb-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 rounded-full border-2 border-gray-800 transform -translate-x-1/2"></div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2 sm:mb-1 gap-1 sm:gap-0">
                        <div className="flex-1">
                          <h4 className="font-semibold text-white text-sm sm:text-base">
                            {exp.title}
                          </h4>
                          <p className="text-gray-300 font-medium text-sm sm:text-base">
                            {exp.company}
                          </p>
                          {exp.location && (
                            <div className="flex items-center gap-1 mt-1">
                              <MdLocationOn className="text-gray-400 text-xs sm:text-sm" />
                              <span className="text-gray-400 text-xs sm:text-sm">
                                {exp.location}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="text-gray-400 text-xs sm:text-sm sm:ml-4">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 sm:py-8 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">Home</Link>
              <Link to="/about" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
              <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link>
              <Link to="/projects" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Projects</Link>
              <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link>
              <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link>
              <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Readings</Link>
              <Link to="/uses" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                © 2025 Adnan Jamil. All Rights Reserved
              </p>
              <button
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-xs sm:text-sm"
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