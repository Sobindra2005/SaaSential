
import { useEffect } from 'react';

export function useOutsideClick<T extends HTMLElement>(
  ref: React.RefObject<T>,
  callback: () => void
) {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    };
    document.addEventListener('click', handler, true); // use capture phase
    return () => {
      document.removeEventListener('click', handler, true);
    };
  }, [ref, callback]);
};
