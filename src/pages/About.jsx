import { AppContext } from "../App.jsx";
import { useContext } from "react";
import user_info from "../data/user_info.js";
import { Link } from "react-router-dom";
import { FaCode, FaServer, FaCloud, FaMobile, FaDatabase, FaPalette, FaRocket, FaBrain, FaGamepad, FaMusic, FaCamera, FaBook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

function About() {
  const { theme } = useContext(AppContext);

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      {/* Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-full p-2 sm:p-4 flex justify-center items-center gap-2 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto">
            <Link to="/" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Home</Link>
            <span className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">About</span>
            {/* <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Blog</Link> */}
            <Link to="/projects" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Projects</Link>
            {/* <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">AI</Link> */}
            {/* <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Lab</Link> */}
            {/* <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Readings</Link> */}
            {/* <Link to="/uses" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer whitespace-nowrap">Uses</Link> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
          
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            
            {/* Introduction */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                I'm {user_info.main.name}. I'm a {user_info.main.role} with expertise in building modern web applications and scalable systems.
              </h1>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                {user_info.main.description} Currently, I'm working at Revotic AI as a Full Stack Developer, 
                leading frontend development for AI-powered applications and integrating cutting-edge AI capabilities 
                into web applications while ensuring optimal user experience and performance.
              </p>
            </div>

            {/* Technical Expertise */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Technical Expertise</h2>
              
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">Frontend Development</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    I specialize in modern frontend technologies including React.js, Next.js, and TypeScript. 
                    With expertise in Tailwind CSS and modern UI frameworks, I create responsive and interactive 
                    user interfaces. I focus on building scalable frontend architectures and implementing 
                    best practices for optimal performance and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">Backend & Database</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    I work with Node.js, Express.js, and various databases including PostgreSQL, MongoDB, and Supabase. 
                    I have experience in designing database schemas, optimizing queries, and building RESTful APIs. 
                    I also work with modern backend technologies and cloud platforms to ensure scalable and robust applications.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-cyan-400 mb-2 sm:mb-3">AI Integration</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Currently focused on integrating AI capabilities into web applications. I work on building 
                    AI-powered features and ensuring seamless integration between frontend interfaces and AI services. 
                    This includes working with machine learning APIs and creating user-friendly AI-driven experiences.
                  </p>
                </div>
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Tools & Technologies I Use</h2>
              
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Development & Version Control</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    I use Git and GitHub for version control, managing both public and private projects. 
                    I'm proficient with modern development tools and workflows that enhance productivity and collaboration.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-cyan-400 mb-2">Cloud & Deployment</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Experience with cloud platforms and deployment strategies. I work with various hosting 
                    solutions and understand the importance of scalable infrastructure for modern web applications.
                  </p>
                </div>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">Current Interests</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I'm passionate about AI and machine learning integration, modern web technologies, 
                performance optimization, and creating innovative user experiences. I enjoy exploring 
                new frameworks and staying updated with the latest trends in web development.
              </p>
            </div>
          </div>

          {/* Right Column - Profile & Contact */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              {/* Profile Photo */}
              <div className="text-center mb-6 sm:mb-8">
                <img
                  src={user_info.main.photo}
                  className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full mx-auto object-cover border-4 border-cyan-400 shadow-2xl"
                  alt="Adnan Jamil"
                />
              </div>

              {/* Social Links */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <a
                  href={user_info.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                >
                  <FaSquareXTwitter className="text-lg sm:text-xl" />
                  <span>Follow on X</span>
                </a>
                <a
                  href={user_info.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                >
                  <FaGithub className="text-lg sm:text-xl" />
                  <span>Follow on GitHub</span>
                </a>
                <a
                  href={user_info.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base"
                >
                  <FaLinkedin className="text-lg sm:text-xl" />
                  <span>Follow on LinkedIn</span>
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


      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Home</Link>
              <span className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">About</span>
              {/* <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link> */}
              <Link to="/projects" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Projects</Link>
              {/* <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link> */}
              {/* <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link> */}
              {/* <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Readings</Link> */}
              {/* <Link to="/uses" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link> */}
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