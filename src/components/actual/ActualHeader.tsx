'use client'
import { animate, motion, MotionValue, useMotionValue, useTransform } from 'framer-motion';
import React from 'react'
import { ActualNav } from './ActualNav';



// const MAX_POINT = 150;
const MAX_POINT = 60;
const MAX_POINT_N = MAX_POINT * -1;
// const POINT = 100;
const POINT = 20;
const POINT_N = POINT * -1;

const DROP_THRESHOLD = 20;

interface CircleProps {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

const Circle = ({ x, y }: CircleProps) => {
  return (
    <div
      className="ms-auto "
    >

      <div
        className='relative grid justify-end h-full pr-[min(5vw,100px)]'
      >

        <motion.button
          id="circle"
          className='shadow-sm'
          title="Deslizar para alternar colores (3)"
          style={{
            backgroundColor: 'var(--bg-body, violet)',
            backgroundImage: 'linear-gradient(123deg, var(--bg-body,violet), violet)',
            x,
            y,
            cursor: 'grab',
          }}
          // drag='x'
          drag
          dragConstraints={{ left: -100, right: 100, top: -100, bottom: DROP_THRESHOLD }}
          whileTap={{
            cursor: 'grabbing',
          }}

          onDragEnd={() => {
            const currentX = x.get();
            const currentY = y.get();

            // mas stiffness = rebota mas 

            if (currentY > DROP_THRESHOLD) {
              // Desaparece el círculo y luego lo mueve desde la parte superior
              animate(y, -window.innerHeight, { type: 'spring', stiffness: 155, damping: 25 })
                .then(() => {
                  // const circleElement = document.getElementById('circle');
                  // if (circleElement) {
                  //   circleElement.style.position = 'fixed';
                  //   circleElement.style.top = '10px';
                  //   circleElement.style.right = '10px';
                  //   circleElement.style.transform = 'none';
                  // }
                  animate(y, 0, { type: 'spring', stiffness: 255, damping: 25 });
                });
            } else if (currentX < POINT_N) {
              console.log('ve a -')
              animate(x, MAX_POINT_N, { type: 'spring', stiffness: 155, damping: 25 });
            } else if (currentX > POINT) {
              console.log('ve a +')
              animate(x, MAX_POINT, { type: 'spring', stiffness: 155, damping: 25 });
            } else {
              animate(x, 0, { type: 'spring', stiffness: 155, damping: 25 });

              animate(y, 0, { type: 'spring', stiffness: 155, damping: 25 });
            }
          }}
        />

      </div>

    </div>
  )
}





function ActualHeader() {

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const background = useTransform(
    x,
    [MAX_POINT_N, 0, MAX_POINT],
    ['var(--color1)', 'var(--color2)', 'var(--color3)']

  );

  React.useEffect(() => {
    const unsubscribe = x.on('change', (latest) => {
      // document.documentElement.style.setProperty('--bg-body', background.get());
      document.body.style.setProperty('--bg-body', background.get());
      document.body.classList.add('use-colors')
    });

    return () => unsubscribe();
  }, [x, background]);






  return (
    <header className="header fixed top-0 left-0 right-0">


      <div className="limited">
        <ActualNav />


        <div className="fixed bottom-10 left-[50%] -translate-x-[50%] md:absolute md:translate-x-0 md:w-full md:inset-0 grid items-center">
          <Circle x={x} y={y} />
        </div>

      </div>
    </header>
  )
}

export default ActualHeader