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


  const images = [
    'Frame(10).png',
    'Frame(11).png',
    'Frame(12).png',
  ]

  const [limaTime, setLimaTime] = useState('');
  useEffect(() => {
    const interval = setInterval(() => {
      setLimaTime(getLimaTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);



  return (
    <aside className='sidebar align-content-start p-3 outlined text-md leading-tight'>


      <div className="intro py-2 px-1">
        <p className='text-lg leading-tight pb-2 opacity-90'>Portafolio de Araceli Ponce Sanga</p>
      </div>

      <nav className=''>
        <ol className='grid gap-2'>
          <li className="list-sidebar-item ">

            <a href="#experiencia" className="btn-primary w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Experiencia</span>
            </a>

          </li>
          <li className="list-sidebar-item ">
            <a href="#proyectos" className="btn-primary w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Proyectos</span>
            </a>
          </li>

          <li className="list-sidebar-item ">
            <a href="#habilidades" className="btn-primary w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Habilidades</span>
            </a>

          </li>
          <li className="list-sidebar-item ">
            <a href="#acerca-de-mi" className="btn-primary w-100 has-noise rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-5">
              <span className="text-xl" aria-hidden={true}>✦</span>
              <span>Acerca de mí</span>
            </a>
          </li>
        </ol>
      </nav>

      <div className='time-wrapper flex gap-1 px-1  py-5 text-md opacity-80 uppercase '>
        <span>Perú</span>
        <span className='ms-auto'>
          {limaTime}
        </span>
      </div>



    </aside>
  )
}
