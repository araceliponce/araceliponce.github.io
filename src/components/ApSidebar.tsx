import React from 'react'
import { useState, useEffect } from 'react'



export function getLimaTime() {
  const limaOffset = -5; // Lima (UTC-5)
  const now = new Date();
  const utc = now.getTime() + (now.getTimezoneOffset() * 60000); // convierte la hora local a UTC
  const limaTimeUTC = new Date(utc + (3600000 * limaOffset)); // suma el offset y obtiene la hora en Lima
  return limaTimeUTC.toLocaleTimeString('es-PE', { timeZone: 'America/Lima' });
};


export default function ApSidebar() {



  const [limaTime, setLimaTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setLimaTime(getLimaTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <aside className='sidebar align-content-start p-3 outlined text-md leading-tight'>

      <div className="intro pt-2 px-1">
        <p className='text-lg leading-tight pb-2'>Portafolio de Araceli Ponce Sanga</p>
      </div>

      <div className='time-wrapper flex gap-1 px-1  text-md opacity-80 uppercase '>
        <span>Perú</span>
        <span className='ms-auto'>
          {limaTime}
        </span>
      </div>

      <nav className='pt-5'>
        <ol className='grid gap-2'>
          <li className="list-sidebar-item ">

            <a href="#experiencia" className="btn-cta w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Experiencia</span>
            </a>

          </li>
          <li className="list-sidebar-item ">
            <a href="#proyectos" className="btn-cta w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Proyectos</span>
            </a>
          </li>

          <li className="list-sidebar-item ">
            <a href="#habilidades" className="btn-cta w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Habilidades</span>
            </a>

          </li>
          <li className="list-sidebar-item ">
            <a href="#acerca-de-mi" className="btn-cta w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Acerca de mí</span>
            </a>
          </li>
        </ol>
      </nav>





    </aside>
  )
}
