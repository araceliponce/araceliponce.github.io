import { useState } from 'react'
import { experiencia_laboral, projects } from '@/lib/data'
import ActualItem from './ActualItem'
import { highlightWords } from '@/lib/functions'
import CanvasBoard from './CanvasBoard'

function ActualContent() {

  const words = ['creación', 'sistema de diseño', 'flujos de usuarios', 'componentes funcionales', 'documentación técnica', 'tabla con renderizado personalizado', 'procesos crud', 'dashboards', 'interactivos', 'responsividad', 'correos usando html', 'ui de tareas multipasos', 'enviar', 'cambios', 'reportes en formato pdf',];


  const [canvasClass, setCanvasClass] = useState('')
  return (
    <main>


      <section id='proyectos' className='pb-[10rem]' aria-labelledby='ph'>


        <h2 className='main-heading' id='ph'>Proyectos</h2>

        <ul className="projects-grid">
          {projects && projects.map((item, index) => {

            return (

              <li key={index} className={`colors${index + 1}`}>
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




      <section id='experiencia-laboral' className='' aria-labelledby='eh'>


        <h2 className='main-heading' id='eh'>Experiencia laboral</h2>
        {/* <small className='bg-gray-100/50 text-xs py-[.2em] px-[.4em] rounded-md mx-auto block w-fit'>(en construcción)</small> */}


        <ul className="grid  lg:grid-cols-2 text-sm">
          {experiencia_laboral && experiencia_laboral.map((item, index) => {

            return (

              <li key={index} className={`max-w-[60ch] pb-[5rem] ${index == 1 ? 'ms-auto' : ''}`}>
                <article className=' bg- grid grid-rows-[auto,1fr]'>
                  <div className="pb-1">
                    <h3>{item.role}</h3>
                    <p>en <span className="border-b border-dashed">{item.company}</span>, {item.from} - {item.to}</p>
                    {/* <p className='pt-1'>{item.from} - {item.to}</p> */}
                    {item.summary && <p className='pt-[.5rem] text-sm opacity-85 show-on-hover'>{item.summary}</p>}
                  </div>
                  <div
                    className={`aa relative changes-color-container border text-sm text-to-read colors${index + 5}`}
                  // onMouseEnter={() => setCanvasClass('erasing')}
                  >



                    <CanvasBoard
                      container='aa'
                    >
                      <div>
                        <ul className='list'>
                          {item.did.map((item, index) => (
                            <li key={index}>
                              {highlightWords(item, words)}
                            </li>
                          ))}
                        </ul>
                      </div>

                    </CanvasBoard>
                    <div className="main-words-only" aria-hidden='true'>
                      <ul className='list '>
                        {item.did.map((item, index) => (
                          <li key={index}>
                            {highlightWords(item, words)}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

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