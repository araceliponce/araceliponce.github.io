'use client'
import { useEffect } from 'react';

export const useIntersectionSection = (callback: (entry: IntersectionObserverEntry) => void, options = {}) => {
  useEffect(() => {


    const elements = document.querySelectorAll('.section');


    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        callback(entry);
      });
    }, options);

    elements.forEach((element) => {
      if (element instanceof HTMLElement) {
        observer.observe(element);
      } else {
        console.error('Element is not an instance of HTMLElement:', element);
      }
    });

    // Clean up observer on component unmount
    return () => {
      elements.forEach((element) => {
        if (element instanceof HTMLElement) {
          observer.unobserve(element);
        }
      });
    };
  }, [callback, options]);
};


