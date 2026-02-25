import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 text-center px-6">
      <h1 className="text-6xl font-extrabold text-gray-900">404</h1>
      <p className="mt-4 text-lg text-gray-600">
        Oops! The page you’re looking for doesn’t exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-xl"
      >
        Go Back Home
      </Link>
    </div>
  );
}