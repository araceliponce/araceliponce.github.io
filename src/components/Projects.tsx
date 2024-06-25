"use client"
import React from 'react';

// import Image from 'next/image';
import { Image } from '@a_r_a_c_e_l_i/library';
import { Heading } from '@a_r_a_c_e_l_i/library';
import { Tag } from '@a_r_a_c_e_l_i/library';

import { Icon } from '@iconify/react';
import { Magnetic } from './Magnetic';
import ClassSwitcher from './ClassSwitcher';

const projects = [

  {
    year: 2024,
    title: 'Excel To Charts',
    subtitle: 'Gráficos al instante',
    url: 'https://excel-to-charts.vercel.app',
    description: 'Generador de gráficos, a partir de los datos de tu archivo .xlsx. \nLos archivos no dejan tu computadora (o celular, o tablet...).\nIncluye visualizador de tablas.',
    image: '/images/excel1.png',
    image2: '/images/excel2.png',
    tags: ['React', 'CSS3', 'TypeScript']
  },
  {
    year: 2023,
    title: 'Notenook',
    subtitle: 'Un espacio confortable para tus notas',
    url: 'https://araceliponce.github.io/notenook/',
    repo: 'https://github.com/araceliponce/notenook',
    description: 'Aplicación web al estilo de Google Keep. \nPuedes: \nCrear notas, que se guardan en el localStorage de tu navegador. \nAlternar entre temas claro y oscuro.\nHacer cambios de layout. \nY más.',
    image: '/images/notenook.png',
    tags: ['React', 'HTML5', 'CSS3', 'Mantine', 'TypeScript']
  },
  {
    year: 2023,
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
  year: number
  title: string
  subtitle?: string
  description: string
  url: string
  repo?: string
  image: string
  image2?: string
  tags: string[]
}

interface dataProps {
  data: oneArticleProps
}

const Article = ({ data }: dataProps) => {

  return (
    <article

      className="article p-5 gap-3 "
    >
      <div className='relative rounded-md overflow-hidden project-image-container'>
        {/* <Image width={400} height={400} src={data.image} className='' alt="" /> */}
        <Image loading="lazy" ratio={5 / 3.5} src={data.image} alt="screenshot" />
        {data.image2 && <Image loading="lazy" ratio={5 / 3.5} src={data.image2} alt="screenshot" />}
        <figcaption>
          <ul className='tags'>
            {data.tags && data.tags.map((tag, index) => (
              <Tag key={index} icon={tag} />
            ))}
          </ul>
        </figcaption>
      </div>
      <div className="grid items-start relative">
        <small className='year p-0'>{data.year}</small>
        <h3 className='px-[0.2rem] pb-0'>
          <span >{data.title}</span>
        </h3>
        {data.subtitle && <p className='subtitle'>{data.subtitle}</p>}
        {data.description && <p className='description'>{data.description}</p>}

        <div className="pt-2 grid sm:grid-flow-col w-fit gap-2 *:rounded-lg">
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

export default function Projects() {

  // const classes: string[] = ['grid gap-5 childs-outlined', 'grid gap-5 childs-outlined'];

  return (
    <section id='proyectos' className=''>
      <div className="text-center">
        <Heading>Proyectos destacados</Heading>
        <p>
          <span>Una selección de mis proyectos públicos del 2024.</span>
        </p>
      </div>
      <div className="grid gap-5 childs-outlined">
        {projects.map((project, index) => (
          <Article key={index} data={project} />
        ))}
      </div>
      {/* <ClassSwitcher classes={classes}>
        {projects.map((project, index) => (
          <Article key={index} data={project} />
        ))}
      </ClassSwitcher> */}

    </section>

  );
};