import { useEffect, useState } from 'react';

const useIntersectionObserver = (
  targetRefs: React.RefObject<HTMLElement>[]
) => {
  const [visibleRefs, setVisibleRefs] = useState<React.RefObject<HTMLElement>[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // setVisibleRefs((prevVisibleRefs) => {
            //   if (!prevVisibleRefs.includes(entry.target as React.RefObject<HTMLElement>)) {
            //     return [...prevVisibleRefs, entry.target as React.RefObject<HTMLElement>];
            //   }
            //   return prevVisibleRefs;
            // });
            /* 
            Conversion of type 'Element' to type 'RefObject<HTMLElement>' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first: */
            setVisibleRefs((prevVisibleRefs) => {
              if (!prevVisibleRefs.includes(entry.target as unknown as React.RefObject<HTMLElement>)) {

                entry.target.classList.add('revealed');

                return [...prevVisibleRefs, entry.target as unknown as React.RefObject<HTMLElement>];
              }
              return prevVisibleRefs;
            });

          } else {
            setVisibleRefs((prevVisibleRefs) => prevVisibleRefs.filter((ref) => ref !== entry.target as unknown as React.RefObject<HTMLElement>));
          }
        });
      },
      { rootMargin: '0px', threshold: 0 }
    );

    targetRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      targetRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [targetRefs]);

  return visibleRefs;
};

export default useIntersectionObserver;
