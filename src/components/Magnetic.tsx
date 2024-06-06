import React, { ReactNode, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/* 
https://www.youtube.com/watch?v=Sb00VR5N-fw

MouseEvent is not generic... add 'React.' before
*/
type OneChildren = {
  children: ReactNode
}

export function Magnetic({ children }: OneChildren) {

  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {

    if (ref.current) {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      //Obtenemos los puntos centrales:
      const middleX = clientX - (left + width / 2);
      const middleY = clientY - (top + height / 2);

      // console.log(clientX, clientY, top, left, middleX, middleY)
      setPosition({ x: middleX, y: middleY })
    }


  }

  //reset
  const handleMouseLeave = (e: React.MouseEvent) => {
    setPosition({ x: 0, y: 0 })
  }


  const { x, y } = position;

  //+ stiffness = the el moves around more
  return (
    <motion.div

      ref={ref}

      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={(e) => handleMouseLeave(e)}
      animate={{ x, y }}
      // transition={{ type: "spring", stiffness: 150, damping: 20, mass: 0.3 }}
      transition={{ type: "spring", stiffness: 25, damping: 10, mass: 0.3 }}

      className='relative'
    >
      {children}

    </motion.div>
  )
}

