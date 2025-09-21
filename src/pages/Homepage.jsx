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
              <h1 className="text-4xl font-bold text-white mb-2">
                {user_info.main.name}
              </h1>
              <h2 className="text-xl text-gray-300 mb-4">
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

          {/* Right Column - Skills & Experience */}
          <div className="space-y-8">
            
            {/* Core Skills */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Core Skills</h3>
              <div className="w-full h-px bg-gray-600 mb-6"></div>
              
              {/* Languages */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaCode className="text-blue-400" />
                  <span className="text-gray-300 font-medium">Languages</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {user_info.skills.languages.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaServer className="text-blue-400" />
                  <span className="text-gray-300 font-medium">Backend</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {user_info.skills.frameworks.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  {user_info.skills.database.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Cloud */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <FaCloud className="text-blue-400" />
                  <span className="text-gray-300 font-medium">Cloud</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {user_info.skills.tools.map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

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

        {/* Projects Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {user_info.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors"
              >
                <h4 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies && (
                    <img
                      src={project.technologies + (theme === 'dark' ? 'dark' : 'light')}
                      alt="Technologies"
                      className="h-6"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Education</h3>
          <div className="max-w-2xl mx-auto">
            {user_info.education.map((edu, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center gap-4">
                  <img
                    src={edu.image}
                    alt={edu.school}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-white">
                      {edu.school}
                    </h4>
                    <p className="text-gray-300">{edu.degree}</p>
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <p className="text-gray-400 text-sm">
            {user_info.footer}
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <FaArrowCircleUp />
            Back to top
          </button>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;