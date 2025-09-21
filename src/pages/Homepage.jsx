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
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-full p-4 flex justify-center items-center gap-8">
            <Link to="/about" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
            <Link to="/blog" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link>
            <Link to="/projects" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Projects</Link>
            <Link to="/ai" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link>
            <Link to="/lab" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link>
            <Link to="/readings" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Readings</Link>
            <Link to="/uses" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            {/* Profile Section */}
            <div className="text-center lg:text-left">
              <img
                src={user_info.main.photo}
                className="w-32 h-32 rounded-full mx-auto lg:mx-0 mb-6 object-cover"
                alt="Profile"
              />
              <h1 className="text-2xl font-bold text-white mb-2">
                {user_info.main.name}
              </h1>
              <h2 className="text-lg text-gray-300 mb-4">
                {user_info.main.role}
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                {user_info.main.description}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <MdEmail className="text-lg" />
                <span>{user_info.main.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={user_info.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaGithub className="text-2xl" />
              </a>
              <a
                href={user_info.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaLinkedin className="text-2xl" />
              </a>
              <a
                href={user_info.socials.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaSquareXTwitter className="text-2xl" />
              </a>
            </div>

          </div>

          {/* Right Column - Experience */}
          <div className="space-y-8">
            {/* Experience */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold text-white">Experience</h3>
                <button
                  onClick={() => window.location.href = 'https://docs.google.com/document/d/15NxlxduDKeHn9tYhA7P0-MCchyGxtxA6qwNJkMvz5GE/edit?tab=t.0'}
                  className="inline-flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium"
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
                  <div key={index} className="relative pl-8 pb-8">
                    {/* Timeline dot */}
                    <div className="absolute left-0 w-4 h-4 bg-blue-400 rounded-full border-2 border-gray-800 transform -translate-x-1/2"></div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-1">
                        <div>
                          <h4 className="font-semibold text-white">
                            {exp.title}
                          </h4>
                          <p className="text-gray-300 font-medium">
                            {exp.company}
                          </p>
                          {exp.location && (
                            <div className="flex items-center gap-1 mt-1">
                              <MdLocationOn className="text-gray-400 text-sm" />
                              <span className="text-gray-400 text-sm">
                                {exp.location}
                              </span>
                            </div>
                          )}
                        </div>
                        <span className="text-gray-400 text-sm">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed">
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
      <footer className="border-t border-gray-700 py-8 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/about" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
            <Link to="/blog" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link>
            <Link to="/projects" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Projects</Link>
            <Link to="/ai" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link>
            <Link to="/lab" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link>
            <Link to="/readings" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Readings</Link>
            <Link to="/uses" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Adnan Jamil. All Rights Reserved
            </p>
            <button
              onClick={scrollToTop}
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaArrowCircleUp />
              Back to top
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;