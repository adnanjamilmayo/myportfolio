import { FaSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0f172a] text-white">
      <div className="flex h-screen justify-center items-center px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto">
          <div className="flex text-3xl sm:text-5xl justify-center font-bold gap-2 sm:gap-4 mb-4 sm:mb-6">
            Oops! <FaSadTear />
          </div>
          <div className="text-center leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg font-light text-gray-300">
            We can&lsquo;t seem to find the page you&lsquo;re looking for.
            <br className="hidden sm:block" />
            <span className="block sm:inline">The requested URL &quot;{window.location.href}&quot; was not found on this server.</span>
          </div>
          <div className="text-center">
            <button
              onClick={() => navigate("/")}
              className="bg-cyan-400 hover:bg-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg sm:rounded-xl transition-colors font-medium text-sm sm:text-base"
            >
              Go back to homepage
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
