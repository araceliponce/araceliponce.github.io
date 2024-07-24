'use client'
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';
import React, { useEffect } from 'react'
import { ActualNav } from './ActualNav';



// const MAX_POINT = 150;
const MAX_POINT = 60;
const MAX_POINT_N = MAX_POINT * -1
// const POINT = 100;
const POINT = 20;
const POINT_N = POINT * -1;

const Circle = ({ x }: any) => {
  return (
    <div
      className="ms-auto overflow-hidde"
    >

      <div
        className='relative grid place-content-end h-full pr-[min(5vw,100px)]'
      >

        <motion.button
          id="circle"
          className='shadow-sm'
          title="Deslizar para cambiar colores"
          style={{
            backgroundColor: 'var(--bg-body, violet)',
            backgroundImage: 'linear-gradient(123deg, var(--bg-body,violet), violet)',
            // outline: '1px solid white',
            x,
            cursor: 'grab',
          }}
          drag='x'
          // dragConstraints={{ left: -200, right: 200, }}
          dragConstraints={{ left: -100, right: 100, }}
          whileTap={{
            cursor: 'grabbing',
          }}

          // onDragEnd={() => {
          //   const currentX = x.get();
          //   if (currentX < -100) {
          //     animate(x, -150, { type: 'spring', stiffness: 150, damping: 25 });
          //   } else if (currentX > 100) {
          //     animate(x, 150, { type: 'spring', stiffness: 150, damping: 25 });
          //   } else {
          //     animate(x, 0, { type: 'spring', stiffness: 150, damping: 25 });
          //   }
          // }}
          onDragEnd={() => {
            const currentX = x.get();
            if (currentX < POINT_N) {
              console.log('ve a -')
              animate(x, MAX_POINT_N, { type: 'spring', stiffness: 155, damping: 25 });
            } else if (currentX > POINT) {
              console.log('ve a +')
              animate(x, MAX_POINT, { type: 'spring', stiffness: 155, damping: 25 });
            } else {
              animate(x, 0, { type: 'spring', stiffness: 155, damping: 25 });
            }
          }}
        />

      </div>

    </div>
  )
}





function ActualHeader() {





  const x = useMotionValue(0);
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


        <div className="absolute w-full inset-0 grid items-center">
          <Circle x={x} />
        </div>

      </div>
    </header>
  )
}

export default ActualHeader