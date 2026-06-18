import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToHash() {
  const { hash, pathname } = useLocation();

  // Cuando cambia la URL, desplaza suavemente hasta la sección indicada por hash.
  useEffect(() => {
    if (!hash) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      return;
    }

    const timeoutId = setTimeout(() => {
      const element = document.querySelector(hash);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }, 0);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [hash, pathname]);

  return null;
}

export default ScrollToHash;
