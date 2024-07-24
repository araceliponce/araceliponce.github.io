'use client'
import { useEffect, useState } from 'react';

const useIntersectionObserver = (callback: () => void, options = {}) => {
  const [target, setTarget] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!target) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          //
          callback();
        }
      });
    }, options);

    observer.observe(target);

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, [target, options, callback]);

  return { setTarget };
};

export default useIntersectionObserver;
