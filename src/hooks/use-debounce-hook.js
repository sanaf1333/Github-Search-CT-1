import { useCallback } from "react";
import debounce from 'lodash.debounce';
const useDebouncedCallback = (callback, delay) => {
  const debouncedCallback = useCallback(
    debounce(callback, delay),
    [callback, delay]
  );
  return debouncedCallback;
};

export default useDebouncedCallback;
