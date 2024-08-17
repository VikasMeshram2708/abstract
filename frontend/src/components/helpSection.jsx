import { FaLongArrowAltRight } from "react-icons/fa";

export default function HelpSection() {
  return (
    <section className="flex items-center justify-center w-full h-96 bg-[--hero]">
      <div className="w-full max-w-xl px-4">
        <h2 className="mb-8 text-4xl font-semibold text-center text-black">
          How can we help?
        </h2>
        <form className="relative">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            id="search"
            type="text"
            name="search"
            placeholder="Search"
            className="w-full px-6 py-3 text-lg text-black bg-white rounded-lg shadow-md outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            aria-label="Search"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-black"
          >
            <FaLongArrowAltRight />
          </button>
        </form>
      </div>
    </section>
  );
}
