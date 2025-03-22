import { useEffect, useState } from "react";

export const useDebounce = (inputValue, delay) => {
  const [debounce, setDebounce] = useState(inputValue);

  useEffect(() => {
    const timeoutNumber = setTimeout(() => {
      setDebounce(inputValue);
    }, delay);
    return () => clearTimeout(timeoutNumber);
  }, [inputValue, delay]);
  return { debounce };
};
