import { useCallback } from "react";
import debounce from 'lodash.debounce';
//move to hooks, file name for hooks, jsx for xml, study usecallback again, arguments
const useDebouncedCallback = (callback, delay) => {
  const debouncedCallback = useCallback(
    debounce((...args) => callback(...args), delay),
    [callback, delay]
  );
  return debouncedCallback;
};

export default useDebouncedCallback;
