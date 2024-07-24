import React from 'react'
import { ActualNav } from './ActualNav'
// import ActualCarousel from './ActualCarousel'
import { projects } from '@/lib/data'

import ActualItem from './ActualItem'

function ActualContent() {
  return (
    <main>


      <section id='proyectos'>


        <h2>Proyectos</h2>

        <ul className="projects-grid">
          {projects && projects.map((item, index) => {

            return (

              <li key={index}>
                <ActualItem
                  cover={item.cover}
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



      <section id="extras">

      </section>
    </main>
  )
}

export default ActualContent