import { Link } from "react-router-dom";

function Uses() {
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
            <span className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1 whitespace-nowrap">Uses</span>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-32 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6 sm:mb-8">Uses</h1>
        <div className="bg-gray-800 rounded-lg p-6 sm:p-12">
          <h2 className="text-2xl sm:text-4xl font-bold text-cyan-400 mb-4 sm:mb-6">Coming Soon</h2>
          <p className="text-gray-300 text-base sm:text-xl leading-relaxed mb-6 sm:mb-8">
            Get a behind-the-scenes look at my development setup, tools, and workflow. 
            Discover the hardware, software, and productivity tools I use daily to 
            build amazing applications and stay productive.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Link 
              to="/" 
              className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-colors font-medium text-sm sm:text-base"
            >
              Back to Home
            </Link>
            <Link 
              to="/about" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium text-sm sm:text-base"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-6 sm:py-8 mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 lg:gap-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 lg:gap-8">
              <Link to="/about" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
              <Link to="/blog" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link>
              <Link to="/projects" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Projects</Link>
              <Link to="/ai" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link>
              <Link to="/lab" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link>
              <Link to="/readings" className="text-white font-medium text-xs sm:text-sm hover:text-cyan-400 transition-colors cursor-pointer">Readings</Link>
              <span className="text-cyan-400 font-medium text-xs sm:text-sm border-b-2 border-cyan-400 pb-1">Uses</span>
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

export default Uses;
