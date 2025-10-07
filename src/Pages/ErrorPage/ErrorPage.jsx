import { Link } from "react-router";
import { Home } from "lucide-react";
const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      {/* Illustration GIF */}
      <img
        src="/not-found-page.gif" // 👈 replace with your favorite illustration
        alt="404 Illustration"
        className="w-72 md:w-96 mb-6"
      />

      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
        Oops! Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-gray-600 mb-8 max-w-md">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track!
      </p>

      {/* Home Button */}
      <Link
        to="/"
        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-medium transition-all duration-300 shadow-md"
      >
        <Home size={18} /> Back to Home
      </Link>

      {/* Footer note */}
      <p className="mt-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Ghorer Gari. All rights reserved.
      </p>
    </section>
  );
};

export default ErrorPage;
