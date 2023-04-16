import { useRef, useCallback } from "react";


export const useDebouncedCallback = (func:any, wait:number) => {
  const timeout = useRef<any>();

  return useCallback(
    (...args:any) => {
      const later = () => {
        clearTimeout(timeout.current);
        func(...args);
      };

      clearTimeout(timeout.current);
      timeout.current = setTimeout(later, wait);
    },
    [func, wait]
  );
};