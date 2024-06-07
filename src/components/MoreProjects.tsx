"use client"
import React from 'react';

// import Image from 'next/image';
import { Image } from '@a_r_a_c_e_l_i/library';
import { Heading } from '@a_r_a_c_e_l_i/library';
import { Tag } from '@a_r_a_c_e_l_i/library';

import { Icon } from '@iconify/react';
import { gh, li } from '@/definitions';
import { Magnetic } from './Magnetic';

const projects = [

  {
    title: 'WICON',
    subtitle: 'Weather It Changes Or Not.',
    description: 'Dashboard interactivo con data de las estaciones metereológicas de la región Tacna - Perú (de 1960 a 2015).',
    url: 'https://wicon.vercel.app/',
    image: '/images/wicon.png',
    tags: ['NextJS', 'CSS3', 'TailwindCSS', 'TypeScript'],
  }
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

      className="article-extra p-5 md:grid-cols-2 gap-3 "
    >
      <figure className='relative rounded-md overflow-hidden'>
        <Image loading="lazy" ratio={5 / 3.5} src={data.image} alt="screenshot" />
        <figcaption>
          <ul className='tags'>
            {data.tags && data.tags.map((tag, index) => (
              <Tag key={index} icon={tag} />
            ))}
          </ul>
        </figcaption>
      </figure>
      <div className="grid items-start">
        <h3 className='px-[0.2rem] pb-0'>

          <span >{data.title}</span>

        </h3>
        {data.subtitle && <p className='subtitle'>{data.subtitle}</p>}
        {data.description && <p className='description'>{data.description}</p>}

        <div className="pt-1 *:w-full">
          <Magnetic>
            <a href={data.url} className="grid-row btn-cta">
              <span className=''>Ver demo</span>
              <Icon icon="ooui:link-external-ltr" />
            </a>
          </Magnetic>
          {data.repo && <Magnetic>
            <a href={data.repo} className='grid-row btn-secondary '>
              <span className=''>Repositorio</span>
              <Icon icon="ooui:link-external-ltr" />
            </a>
          </Magnetic>}
        </div>


      </div>
    </article>
  );
};

export default function MoreProjects() {
  return (
    <section id='mas-proyectos' className=''>
      <div className="text-center">
        <Heading>Hay más</Heading>
        <p>
          <span>Proyectos más pequeños, que no pudieron quedarse fuera.</span>
        </p>
      </div>

      <div className="grid relative gap-5 childs-outlined">
        <span className="year p-[1rem]" >{projects.length} proyecto</span>
        <ul className='grid-list'>
          {projects.map((project, index) => (
            <li key={index} className='shadow-md rounded-lg overflow-hidden'>
              <Article data={project} />
            </li>
          ))}

        </ul>
      </div>

      <div className="pt-10 ">
        <Magnetic>
          <a href={gh} className="mx-auto w-fit btn-secondary rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-2 px-5">
            <span>Ver Github</span>
            <Icon icon="ooui:link-external-ltr" />
          </a>
        </Magnetic>
      </div>

    </section>

  );
};