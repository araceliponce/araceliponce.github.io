import React from 'react'
import { ActualNav } from './ActualNav'
// import ActualCarousel from './ActualCarousel'
import { experiencia_laboral, projects } from '@/lib/data'

import ActualItem from './ActualItem'

import ReactPlayer from 'react-player'
import LocalVideoPlayer from './LocalVideo'
import { highlightWords } from '@/lib/functions'
import Image from 'next/image'

function ActualContent() {

  const words = ['componentes funcionales', 'documentación técnica', 'colaboración', 'sorting', 'renderizado personalizado de valores', 'sistema de diseño', 'flujos de usuarios', 'usabilidad', 'accesibilidad', 'crud', 'dashboards web interactivos', 'responsividad', 'correos usando html', 'ui de tareas multipasos', 'enviar cambios', 'producción ', 'pdf', 'nuevo'];


  return (
    <main>


      <section id='proyectos' className='pb-[10rem]'>


        <h2>Proyectos</h2>

        <ul className="projects-grid">
          {projects && projects.map((item, index) => {

            return (

              <li key={index}>
                <ActualItem
                  cover={item.cover}
                  videoUrl={item.videoUrl}
                  stack={item.stack}
                  from={item.from}

                  url={item.url}
                  repo={item.repo}
                  slug={item.slug}

                  title={item.title}
                  desc={item.desc}
                  did={item.did} />
              </li>
            )
          })}

        </ul>



      </section>



      {/* <section id="extras">

      </section> */}




      <section id='experiencia-laboral' className=''>


        <h2>Experiencia-laboral</h2>
        <small className='bg-gray-100/50 text-xs py-[.2em] px-[.4em] rounded-md mx-auto block w-fit'>(en construcción)</small>

        {/* <a
          className='link'
        >
          <span className="link__icon">
            <Image src='blue.png' width="25" height="25" alt="" className="icon" />
          </span>
          <span className="link__text">
            <span className="link__text__title">Descarga mi CV</span>
            <span className="link__text__desc">
              Aquí detallo mi experiencia profesional
            </span>
          </span>
        </a> */}

        <ul className="grid  lg:grid-cols-2 pt-[2rem]">
          {experiencia_laboral && experiencia_laboral.map((item, index) => {

            return (

              <li key={index} className={`max-w-[60ch] ${index == 1 ? 'ms-auto' : ''}`}>
                <article className=' bg- grid grid-rows-[auto,1fr]'>
                  <div className="leading-none text-sm pb-1">
                    <h3>{item.role}</h3>
                    <p>en {item.company}, {item.from} - {item.to}</p>
                    {item.summary && <p>{item.summary}</p>}
                  </div>
                  <ul className='list changes-color '>
                    {item.did.map((item, index) => (
                      <li key={index}>
                        {highlightWords(item, words)}
                      </li>
                    ))}
                  </ul>
                </article>
              </li>
            )
          })}

        </ul>



      </section>


    </main>
  )
}

export default ActualContent