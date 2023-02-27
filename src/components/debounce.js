import { useCallback } from 'react';
import { debounce } from 'lodash';

const useDebouncedCallback = (callback, delay) => {
  const debouncedCallback = useCallback(
    debounce((...args) => callback(...args), delay),
    [callback, delay]
  );
  return debouncedCallback;
};

export default useDebouncedCallback;
