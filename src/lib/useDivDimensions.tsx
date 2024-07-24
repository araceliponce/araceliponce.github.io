

// //to get window dimensions
// import { useEffect, useState } from 'react'

// export default function useDiv(className: string) {
//   const [dimension, setDimension] = useState({ width: 0, height: 0 })

//   const resize = () => {

//     const element = document.querySelector(`.${className}`);
//     if (!element) return;

//     const { width, height } = element.getBoundingClientRect();
//     setDimension({ width, height });

//     // setDimension({
//     //   width: element.innerWidth,
//     //   height: element.innerHeight
//     // })
//   }

//   useEffect(() => {
//     resize();
//     window.addEventListener("resize", resize);
//     return () => window.removeEventListener("resize", resize);
//   }, [])

//   return { dimension }
// }




import { useEffect, useState } from 'react';

const useDivDimensions = (selectorOrElement: string | HTMLElement | null): { dimension: { width: number; height: number } } => {
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const resize = () => {
    const element = typeof selectorOrElement === 'string' ? document.querySelector(selectorOrElement) : selectorOrElement;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    setDimension({
      width: rect.width,
      height: rect.height,
    });
  };

  useEffect(() => {
    resize();
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, [selectorOrElement]);

  return { dimension };
};

export default useDivDimensions;
