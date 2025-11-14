import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function About() {
  const { theme } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto shadow-2xl">
            <Link to="/" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Home</Link>
            <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">About</span>
            <Link to="/projects" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Projects</Link>
            <Link to="/skills" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer whitespace-nowrap hover:scale-105">Skills</Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            
            {/* Introduction */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  I'm {user_info.main.name}. I'm a {user_info.main.role} with expertise in building modern web applications and scalable systems.
                </h1>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  {user_info.main.description} Currently, I'm working at Revotic AI as a Full Stack Developer, 
                  leading frontend development for AI-powered applications and integrating cutting-edge AI capabilities 
                  into web applications while ensuring optimal user experience and performance.
                </p>
              </div>
            </div>

            {/* Technical Expertise */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Technical Expertise</h2>
                
                <div className="space-y-4 sm:space-y-5">
                  <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Frontend Development</h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      I specialize in modern frontend technologies including React.js, Next.js, and TypeScript. 
                      With expertise in Tailwind CSS and modern UI frameworks, I create responsive and interactive 
                      user interfaces. I focus on building scalable frontend architectures and implementing 
                      best practices for optimal performance and user experience.
                    </p>
                  </div>

                  <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">Backend & Database</h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      I work with Node.js, Express.js, and various databases including PostgreSQL, MongoDB, and Supabase. 
                      I have experience in designing database schemas, optimizing queries, and building RESTful APIs. 
                      I also work with modern backend technologies and cloud platforms to ensure scalable and robust applications.
                    </p>
                  </div>

                  <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2">AI Integration</h3>
                    <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                      Currently focused on integrating AI capabilities into web applications. I work on building 
                      AI-powered features and ensuring seamless integration between frontend interfaces and AI services. 
                      This includes working with machine learning APIs and creating user-friendly AI-driven experiences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Tools & Technologies I Use</h2>
                
                <div className="space-y-3 sm:space-y-4">
                  <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Development & Version Control</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      I use Git and GitHub for version control, managing both public and private projects. 
                      I'm proficient with modern development tools and workflows that enhance productivity and collaboration.
                    </p>
                  </div>

                  <div className="relative backdrop-blur-sm bg-gradient-to-br from-white/5 to-white/5 border border-white/10 rounded-lg p-4 hover:bg-white/10 hover:border-cyan-400/30 transition-all duration-300">
                    <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Cloud & Deployment</h3>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      Experience with cloud platforms and deployment strategies. I work with various hosting 
                      solutions and understand the importance of scalable infrastructure for modern web applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
              <div className="relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Current Interests</h2>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                  I'm passionate about AI and machine learning integration, modern web technologies, 
                  performance optimization, and creating innovative user experiences. I enjoy exploring 
                  new frameworks and staying updated with the latest trends in web development.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Profile & Contact */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              {/* Profile Photo */}
              <div className="text-center mb-8 relative backdrop-blur-xl bg-gradient-to-br from-white/10 via-white/5 to-white/5 border border-white/20 rounded-xl p-4 sm:p-5 hover:border-cyan-400/50 hover:bg-gradient-to-br hover:from-white/15 hover:via-white/10 hover:to-white/5 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 hover:scale-[1.01] group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-xl transition-all duration-300 pointer-events-none"></div>
                <div className="relative z-10">
                <div className="relative inline-block mb-4">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 rounded-full blur-lg opacity-30"></div>
                  <img
                    src={user_info.main.photo}
                    className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full mx-auto object-cover border-2 border-cyan-400/50 shadow-xl hover:border-cyan-400 transition-all duration-300 hover:scale-105"
                    alt="Adnan Jamil"
                  />
                </div>

                  {/* Social Links */}
                  <div className="space-y-3 mb-4">
                    <a
                      href={user_info.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs sm:text-sm"
                    >
                      <FaSquareXTwitter className="text-lg" />
                      <span className="font-medium">Follow on X</span>
                    </a>
                    <a
                      href={user_info.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs sm:text-sm"
                    >
                      <FaGithub className="text-lg" />
                      <span className="font-medium">Follow on GitHub</span>
                    </a>
                    <a
                      href={user_info.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-105 backdrop-blur-sm bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs sm:text-sm"
                    >
                      <FaLinkedin className="text-lg" />
                      <span className="font-medium">Follow on LinkedIn</span>
                    </a>
                  </div>

                  {/* Contact Email */}
                  <div className="text-center">
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {user_info.main.email.replace('@', '[at]').replace('.', '[dot]')}
                    </p>
                  </div>
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
              <span className="text-cyan-400 font-semibold text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">About</span>
              <Link to="/projects" className="text-white/80 font-medium text-xs sm:text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer hover:scale-105">Projects</Link>
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

export default About;
