"use client"

import React from 'react'
import { Heading, HoverCard, SelectableCards } from '@a_r_a_c_e_l_i/library'
import { Tag } from '@a_r_a_c_e_l_i/library'
import { Image } from '@a_r_a_c_e_l_i/library'
import { li } from '@/definitions'

export default function Experience() {
  return (
    <section id="experiencia" className=''>
      <Heading>Experiencia</Heading>
      <p className="subheading">
        <span>¿En qué he trabajado ultimamente?</span>
      </p>



      <ol className='lg:px-3 grid gap-[3rem] *:border *:border-gray-300 *:p-5 *:rounded-lg'>
        <li className="outlined">
          <div className='grid md:grid-cols-[1fr,2fr] gap-4'>
            <div>
              <time >febrero 2024 - marzo 2024</time>
              <h3 >Desarrolladora Web Figma + React</h3>
              <small>Onerami </small>
            </div>

            <ul className='star-list'>
              <li>
                Diseñé componentes y planteé flujos de usuario, en Figma.
              </li>
              <li>
                Desarrollé la librería interna de componentes desde cero, con React, Typescript y CCS en JS.
              </li>
              <li>Creación de componente tabla con funcionalidades de sorting y transformación de valores (strings, números, etc.) en fragmentos (checkboxes, botones, etc.) .</li>
              <li>Creación de componentes como breadcrumbs automáticos y tooltips, y más.</li>
              <li>
                Colaboré en la creación de las vistas de Inicio de Sesión y Registro.
              </li>
              <li className='not-decorations'>
                <ul className="tags">
                  <Tag icon='UX' />
                  <Tag icon='UI' />
                  <Tag icon='React' />
                  <Tag icon='TypeScript' />
                  <Tag icon='Styled Components' />
                  <Tag icon='TailwindCSS' />
                  <Tag icon='NPM' />
                  <Tag icon='Vite' />
                  <Tag icon='Bitbucket' />
                </ul>
              </li>
            </ul>
          </div>
        </li>
        <li className="outlined">
          <div className='grid md:grid-cols-[1fr,2fr] gap-4 '>
            <div>
              <time>septiembre 2023 - enero 2024</time>
              <h3 >Desarrolladora Web Full Stack</h3>
              <small>Fundación Calma </small>
            </div>


            <ul className='star-list'>
              <li>Mejoré los procesos CRUD, considerando roles de usuario y permisos de acceso.</li>
              <li>Optimicé la experiencia de usuario en procesos multipasos.</li>
              <li>Hice dashboards web con gráficos y cifras destacadas.
              </li>
              <li>Realicé revisiones y depuraciones de código CSS.</li>
              <li>Escribí algunos correos usando HTML.</li>
              <li>Me encargué de enviar los cambios del repositorio hacia el servidor remoto, para ver y comprobar cambios al instante en el sitio web final.</li>
              <li className='not-decorations'>
                <ul className="tags ">
                  <Tag icon='UX' />
                  <Tag icon='UI' />
                  <Tag icon='PHP' />
                  <Tag icon='MySQL' />
                  <Tag icon='JavaScript' />
                  <Tag icon='JQuery' />
                  <Tag icon='CSS3' />
                  <Tag icon='GitLab' />
                  <Tag icon='Linux' />
                </ul>
              </li>
            </ul>

          </div>
        </li>
      </ol>

      <div className="pt-10 ">
        <a href={li} className="mx-auto grid-row btn-secondary">
          Ver LinkedIn
        </a>
      </div>
    </section>
  )
}

