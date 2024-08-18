import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center gap-3 justify-center">
      <h2 className="text-center font-bold text-3xl py-20">
        Request Page Not Found!
      </h2>
      <button
        type="button"
        className="border px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
      >
        <Link to="/">Home</Link>
      </button>
    </div>
  );
}
