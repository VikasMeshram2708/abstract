export default function Navbar() {
  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto p-5 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Company Logo"
            className="w-20 md:w-24"
          />
          <h2 className="ml-3 text-lg font-normal">
            <span className="hidden md:inline-block">|</span> Help Center
          </h2>
        </div>
        <div>
          <button
            type="button"
            className="bg-[--btnDark] text-lg border rounded-lg py-2 px-4 hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Submit a request"
          >
            Submit a request
          </button>
        </div>
      </nav>
    </header>
  );
}
