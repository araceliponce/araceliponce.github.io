"use client"
import React from 'react';

// import Image from 'next/image';
import { Image } from '@a_r_a_c_e_l_i/library';
import { Heading } from '@a_r_a_c_e_l_i/library';
import { Tag } from '@a_r_a_c_e_l_i/library';

import { Icon } from '@iconify/react';
import { gh } from '@/definitions';

const projects = [

  {
    title: 'Notenook',
    subtitle: 'Un espacio confortable para tus notas',
    url: 'https://araceliponce.github.io/notenook/',
    repo: 'https://github.com/araceliponce/notenook',
    description: 'Aplicación web al estilo de Google Keep. \nPuedes: \nCrear notas, que se guardan en el localStorage de tu navegador. \nAlternar entre temas claro y oscuro.\nHacer cambios de layout. \nY más.',
    image: '/images/notenook.png',
    tags: ['React', 'HTML5', 'CSS3', 'Mantine', 'TypeScript']
  },
  {
    title: 'WICON',
    subtitle: 'Weather It Changes Or Not.',
    description: 'El clima: ¿cambia? ¿o no?\nDashboard interactivo con data de las estaciones metereológicas de la región Tacna - Perú (de 1960 a 2015).\nLas selecciones que hagas son añadidas al url. \nAsí, puedes guardarlo como un bookmark o compartirlo, manteniendo tus selecciones.',
    url: 'https://wicon.vercel.app/',
    image: '/images/wicon.png',
    tags: ['NextJS', 'React', 'CSS3', 'TailwindCSS', 'HTML5', 'TypeScript'],
  },
  {
    title: 'Rooster',
    subtitle: 'Landing page',
    description: 'Semi-clon de la página de inicio de: www.redroostercoffee.com\nUsando Vue3, implementé modo oscuro y dos sidebars (derecho e izquierdo).\nAdemás, es responsive.',
    url: 'https://araceliponce.github.io/rooster/',
    repo: 'https://github.com/araceliponce/rooster',
    image: '/images/rooster.png',
    tags: ['Vue', 'CSS3', 'Vuetify', 'JavaScript']
  },
];


interface oneArticleProps {
  // [key: string]: string
  title: string
  subtitle?: string
  description: string
  url: string
  repo?: string
  image: string
  tags: string[]
}

interface dataProps {
  data: oneArticleProps
}

const Article = ({ data }: dataProps) => {

  return (
    <article

      className="article p-5 md:grid-cols-2 gap-3 "
    >
      <figure className='relative rounded-md overflow-hidden'>
        {/* <Image width={400} height={400} src={data.image} className='' alt="" /> */}
        <Image loading="lazy" ratio={5 / 4} src={data.image} alt="screenshot" />
        <figcaption>
          <ul className='tags'>
            {data.tags && data.tags.map((tag, index) => (
              <Tag key={index} icon={tag} />
            ))}
          </ul>
        </figcaption>
      </figure>
      <div className="grid items-start">
        <h3 className='heading-2 px-[0.2rem]'>

          <span >{data.title}</span>

        </h3>
        {data.subtitle && <p className='subtitle text-sm'>{data.subtitle}</p>}
        {data.description && <p className='description'>{data.description}</p>}

        <div className="pt-3 grid sm:grid-flow-col w-fit gap-2 *:rounded-lg">
          <a href={data.url} className="grid-row btn-primary">
            <span className=''>Ver demo de  {data.title}</span>
            <Icon icon="ooui:link-external-ltr" />
          </a>

          {data.repo && <a href={data.repo} className='grid-row btn-secondary '>
            <span className=''>Repositorio</span>
            <Icon icon="ooui:link-external-ltr" />
          </a>}
        </div>


      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <section id='proyectos' className='px-5 '>
      <div className="text-center">
        <Heading>Proyectos destacados</Heading>
        <p className="subheading">
          <span>Una selección de mis proyectos públicos del 2024.</span>
        </p>
      </div>
      <div className="grid gap-5 childs-outlined">
        {projects.map((project, index) => (
          <Article key={index} data={project} />
        ))}
      </div>

      <div className="pt-10 ">
        <a href={gh} className="mx-auto w-fit btn-secondary rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-2 px-5">
          <span>Ver Github</span>
          <Icon icon="ooui:link-external-ltr" />
        </a>
      </div>

    </section>

  );
};