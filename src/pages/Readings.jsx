import { Link } from "react-router-dom";

function Readings() {
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
            <span className="text-cyan-400 font-medium text-sm border-b-2 border-cyan-400 pb-1">Readings</span>
            <Link to="/uses" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl font-bold text-white mb-8">Readings</h1>
        <div className="bg-gray-800 rounded-lg p-12">
          <h2 className="text-4xl font-bold text-cyan-400 mb-6">Coming Soon</h2>
          <p className="text-gray-300 text-xl leading-relaxed mb-8">
            Discover my curated collection of books, articles, and resources that have 
            shaped my journey as a developer. From technical deep-dives to inspiring 
            stories, find your next great read here.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/" 
              className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              Back to Home
            </Link>
            <Link 
              to="/about" 
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 mt-16">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/about" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
            <Link to="/blog" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Blog</Link>
            <Link to="/projects" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Projects</Link>
            <Link to="/ai" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">AI</Link>
            <Link to="/lab" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Lab</Link>
            <span className="text-cyan-400 font-medium text-sm border-b-2 border-cyan-400 pb-1">Readings</span>
            <Link to="/uses" className="text-white font-medium text-sm hover:text-cyan-400 transition-colors cursor-pointer">Uses</Link>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Adnan Jamil. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Readings;
