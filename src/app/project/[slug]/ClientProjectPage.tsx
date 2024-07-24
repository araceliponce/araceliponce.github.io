"use client";

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { Project, getProject } from './ProjectServer';
import { Tag } from '@a_r_a_c_e_l_i/library';
import Image from 'next/image';
import { highlightWords } from '@/lib/functions';
import { Icon } from '@iconify/react/dist/iconify.js';

export default function ClientProjectPage() {
  const [project, setProject] = useState<Project | undefined>(undefined);
  const params = useParams();
  const router = useRouter();

  useEffect(() => {
    const project = getProject(params.slug as string);
    if (!project) {
      router.replace('/404');
    } else {
      setProject(project);
    }
  }, [params.slug]);

  if (!project) {
    return <div>Cargando...</div>;
  }


  // const words = ['componentes destacados', 'librería de componentes con react', 'documentación', 'colaboración', 'sorting', 'renderizado personalizado de valores', 'sistema de diseño', 'historias de usuarios', 'usabilidad', 'accesibilidad', 'crud', 'dashboards web interactivos', 'responsividad', 'correos usando html', 'optimicé tareas multipasos', 'enviar cambios', 'a producción en servidores remotos', 'nuevo'];


  return (
    <main>


      <section>
        <article className=''>
          <h1>{project.title}</h1>


          <div className="grid md:grid-cols-2 gap-[4vw]">
            <div className='mx-auto'>
              {project.cover.map((image, index) => (
                <Image key={index} src={image.img} alt={`Cover ${index + 1}`} width='350' height='400' />
              ))}

            </div>
            <div className='sticky top-[6rem] desc grid gap-2 h-fit'>

              <p>Trabajé en este proyecto en {project.from}.</p>

              <div>
                <p>Descripción:</p>
                <ul className='list'>
                  {project.did.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>

                {/* <ul className="list">
                  {project.did?.map((item) => (
                    <li key={item} className="">
                      {highlightWords(item, words)}
                    </li>
                  ))}
                </ul> */}

              </div>
              <div className='grid gap-1'>
                <p>Tecnologías usadas:</p>
                <ul className='flex flex-wrap gap-2'>
                  {project.stack.map((tech, index) => (
                    <Tag key={index} icon={tech} />
                  ))}
                </ul>
              </div>
              <div className='grid gap-1'>
                <p>Enlaces:</p>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className='link-inline'>
                  <span>Ver online</span>
                  <Icon icon='ic:outline-arrow-outward' />

                </a>

                {project.repo && (
                  <a href={project.repo} target="_blank" rel="noopener noreferrer" className='link--inline link-inline--secondary'>View repository</a>
                )}



              </div>
            </div>
          </div>

        </article>
      </section>
    </main>
  );
}
