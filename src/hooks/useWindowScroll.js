import { useEffect, useState } from 'react';

export const useWindowScroll = () => {
  const [sticky, setSticky] = useState({ isSticky: false });

  const OnScroll = () => {
    if (window.scrollY > 0) {
      setSticky({ isSticky: true });
    } else {
      setSticky({ isSticky: false });
    }
  };

  useEffect(() => {
    const OnScrollEvent = () => {
      OnScroll();
    };

    window.addEventListener('scroll', OnScrollEvent);

    return () => {
      window.removeEventListener('scroll', OnScrollEvent);
    };
  }, [sticky]);

  return { sticky };
};
