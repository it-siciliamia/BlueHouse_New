import { useEffect } from 'react';

export const useClickOutside = (ref, callback) => {
  const handleClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    setTimeout(() => {
      document.addEventListener('click', handleClick);
    }, 300);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
