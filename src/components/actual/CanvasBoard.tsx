'use client'
import useDivDimensions from '@/lib/useDivDimensions';
// import useDivDimensions from '@/hooks/useDivDimensions';
/* 
https://youtu.be/6hlzQNlyv60 tutorial

*/
// import useWindow from '@/hooks/useWindow';
import React, { ReactNode, useEffect, useRef, useState } from 'react'


interface CanvasBoardProps {
  children: React.ReactNode;
  className?: string
  container: string
}


export default function CanvasBoard({ container, children, className = '', ...props }: CanvasBoardProps) {

  // const { dimension } = useDivDimensions('canvas-wrapper')
  const { dimension } = useDivDimensions(`.${container}`);

  const canvas = useRef<HTMLCanvasElement | null>(null);
  const prevPosition = useRef<{ x: number; y: number } | null>(null);
  const [savedDrawing, setSavedDrawing] = useState<ImageData | null>(null)


  const BG_CANVAS = 'white'
  const ERASER_RADIUS = 40

  useEffect(() => {

    if (dimension.width > 0 && dimension.height > 0) {
      console.log(dimension, 'dimension')
      if (savedDrawing) {
        restoreCanvas(savedDrawing);
      } else {
        init();
      }
    }

  }, [dimension])


  const init = () => {
    const ctx = canvas.current?.getContext("2d");

    if (ctx) {
      ctx.fillStyle = BG_CANVAS;
      ctx.fillRect(0, 0, dimension.width, dimension.height);
      ctx.globalCompositeOperation = "destination-out";
    }
  }

  // const lerp = (x, y, a) => x * (1 - a) + y * a;
  const lerp = (x: number, y: number, a: number): number => x * (1 - a) + y * a;


  // si no aceptase, puedes agregar <HTMLCanvasElement> seguido a react.mousevent
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, movementX, movementY } = e;
    //movements values can go from 0 to (+/-) 400 or more (speed)
    // console.log({ clientX, clientY, movementX, movementY })

    const canvasEl = canvas.current;
    if (!canvasEl) return;

    const rect = canvasEl.getBoundingClientRect();
    const canvasX = clientX - rect.left;
    const canvasY = clientY - rect.top;


    const nbOfCircles = Math.max(Math.abs(movementX), Math.abs(movementY)) / 10;

    if (prevPosition.current != null) {
      const { x, y } = prevPosition.current;
      for (let i = 0; i < nbOfCircles; i++) {
        // const targetX = lerp(x, clientX, (1 / nbOfCircles) * i);
        // const targetY = lerp(y, clientY, (1 / nbOfCircles) * i);
        const targetX = lerp(x, canvasX, (1 / nbOfCircles) * i);
        const targetY = lerp(y, canvasY, (1 / nbOfCircles) * i);
        draw(targetX, targetY, ERASER_RADIUS)
      }
    }

    prevPosition.current = {
      // x: clientX,
      // y: clientY
      x: canvasX,
      y: canvasY
    }
  }

  const draw = (x: number, y: number, radius: number) => {
    const ctx = canvas.current?.getContext("2d");
    if (ctx) {
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, 2 * Math.PI);
      ctx.fill();
    }
  }


  const saveDrawing = () => {
    console.log('SAVING?')
    const ctx = canvas.current?.getContext("2d");
    if (ctx && canvas.current) {
      const data = ctx.getImageData(0, 0, canvas.current.width, canvas.current.height);
      setSavedDrawing(data);
    }
  }
  const restoreCanvas = (data: ImageData) => {
    const ctx = canvas.current?.getContext("2d");
    if (ctx && canvas.current) {
      canvas.current.width = dimension.width;
      canvas.current.height = dimension.height;
      // ctx.putImageData(data, 0, 0);

      // Fill the canvas with bg
      ctx.fillStyle = BG_CANVAS;
      ctx.fillRect(0, 0, dimension.width, dimension.height);
      // Draw the saved image data
      ctx.putImageData(data, 0, 0);

      ctx.globalCompositeOperation = "destination-out";
    }
  }
  useEffect(() => {
    const handleResize = () => {
      saveDrawing();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);


  return (
    <>

      {children}
      {/* children can not be absolute, they are the height of its container */}
      {/* <p className='absolute bottom-1 right-1 text-sm h-0'>{dimension.width} x {dimension.height}</p> */}
      <div
        className={`canvas-wrapper absolute inset-0 w-full h-full ${className}`}
        {...props}
      >


        {dimension.width == 0 && <div className='absolute w-full h-full bg-white' />}
        <canvas ref={canvas} onMouseMove={handleMouseMove} height={dimension.height} width={dimension.width}
          className='h-full w-full'
        />

        {/* <p className='absolute bottom-1 right-1 text-sm'>{dimension.width} x {dimension.height}</p> */}
      </div>
    </>
  )
}