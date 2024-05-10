"use client"

import React from 'react'

import { Tag } from '@a_r_a_c_e_l_i/library'

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


      <div className="intro py-2">
        <p className='heading-card pb-2 opacity-90'>Portafolio de Araceli Ponce Sanga</p>
      </div>



      <nav className=''>
        <ol className='grid gap-2'>
          <li className="list-sidebar-item ">

            <a href="#experiencia" className="card card-1 btn-primary">
              <div className="content grid-row has-noise">

                <span className="text-xl">✦</span>
                <span className=''>
                  <b className='block'>Experiencia</b>
                  {/* <span>¿En qué he trabajado ultimamente?</span> */}
                </span>
              </div>
            </a>

          </li>
          <li className="list-sidebar-item ">
            <a href="#proyectos" className="card card-1 btn-primary">
              <div className="content grid-row has-noise">
                <span className="text-xl">✦</span>
                <span className=''>
                  <b className='block'>Proyectos</b>
                  {/* <span>Una selección de mis proyectos públicos del 2024.</span> */}
                </span>
              </div>
            </a>

          </li>

          <li className="list-sidebar-item ">


            <a href="#habilidades" className="card card-1 btn-primary">
              <div className="content grid-row has-noise">
                <span className="text-xl">✦</span>
                <span className=''>
                  <b className='block'>Habilidades</b>
                  {/* <span>Principales habilidades como desarrolladora.</span> */}
                </span>
              </div>
            </a>

          </li>
          <li className="list-sidebar-item ">
            <a href="#acerca-de-mi" className="card card-1 btn-primary">
              <div className="content grid-row has-noise">

                <span className="text-xl">✦</span>
                <span>
                  <b className='block'>Acerca de mí</b>
                  {/* <span>¿Quién soy?¿Dónde he estudiado? Y más.</span> */}
                </span>
              </div>
            </a>

          </li>
        </ol>
      </nav>

      <div className='time-wrapper flex gap-1 py-5 text-lg opacity-80 uppercase font-serif'>
        <span>Perú</span>
        <span className='ms-auto'>
          {limaTime}
        </span>
      </div>



    </aside>
  )
}
