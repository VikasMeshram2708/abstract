import { useEffect, useState } from "react";

export default function useDebounce(delay = 500, value) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [delay, value]);
  return debouncedValue;
}
