import { useEffect, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import useDebounce from "../helpers/useDebounce";
import { services } from "../../seed/backend";

export default function HelpSection() {
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [loading, setLoading] = useState(false);

  const debouncedValue = useDebounce(500, searchText);

  useEffect(() => {
    if (debouncedValue) {
      setLoading(true);
      const results = services?.filter((item) => {
        return item?.title.toLowerCase().includes(debouncedValue.toLowerCase()) ||
          item?.description
            .toLowerCase()
            .includes(debouncedValue.toLowerCase());
      });
      setFilteredItems(results);
      setLoading(false);
    } else {
      setFilteredItems([]);
      setLoading(false);
    }
  }, [debouncedValue]);

  return (
    <section className="flex items-center justify-center w-full h-96 bg-[--hero]">
      <div className="w-full max-w-xl px-4">
        <h2 className="mb-8 text-4xl font-semibold text-center text-black">
          How can we help?
        </h2>
        <div className="relative">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <input
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            id="search"
            type="text"
            name="search"
            placeholder="Search"
            className="w-full px-6 py-3 text-lg text-black bg-white rounded-lg shadow-md outline-none focus:ring-2 focus:ring-black"
          />
          <FaLongArrowAltRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xl text-black" />
        </div>
        {/* Display loading spinner */}
        {loading && (
          <div className="flex justify-center mt-4">
            <div className="w-8 h-8 border-4 border-t-transparent border-black border-solid rounded-full animate-spin"></div>
          </div>
        )}
        {/* Display search results or no results message */}
        {!loading && debouncedValue && (
          <div className="mt-4">
            {filteredItems.length > 0 ? (
              <ul>
                {filteredItems.map((item) => (
                  <li key={item.id} className="text-black">
                    {item.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-black">No results found.</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
