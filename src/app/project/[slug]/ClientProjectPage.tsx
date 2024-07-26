"use client";

import LocalVideoPlayer from '@/components/actual/LocalVideo';
import ProjectCarousel from '@/components/ui/ProjectCarousel';
import { Tag } from '@a_r_a_c_e_l_i/library';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Project, getProject } from './ProjectServer';


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




  return (
    <main className='main--project'>


      <section>
        <article className=''>
          <div className="grid md:grid-cols-[minmax(30vw,1.8fr),1fr] gap-[2rem]">

            <div className='md:sticky md:top-[6rem] h-fit'>

              <div className="flex items-center gap-2 pb-2">
                <Link href="/" className='grid place-content-center'>
                  <span className="sr-only">Regresar</span>
                  <ArrowLeftIcon />
                </Link>
                <h1>{project.title}</h1>
              </div>

              <div className=" changes-color">
                {project.videoUrl && project.videoUrl.length > 0 ? (
                  <div
                  >
                    <LocalVideoPlayer videoUrl={project.videoUrl} />
                  </div>
                ) : null
                }
              </div>





            </div>


            {/* {project.cover.map((image, index) => (
                <Image key={index} src={image.img} alt={`Cover ${index + 1}`} width='350' height='400' className='mx-auto' />
              ))} */}



            <div className='grid gap-[1rem] pt-[2rem]'>

              <div className=" changes-color">
                {project.cover && project.cover.length > 0 ? (
                  <div
                  >
                    <ProjectCarousel slides={project.cover} />
                  </div>
                ) : null
                }
              </div>

              <div
                // className="changes-color"
                className='desc grid gap-2'
              >
                <p>Trabajé en este proyecto en {project.from}.</p>

                <div>
                  <p>Descripción:</p>
                  <ul className='list'>
                    {project.did.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                </div>
                <div className='grid gap-1 pt-[1rem]'>
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

                  {/* {project.repo && (
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" className='link--inline link-inline--secondary'>Ver repositorio</a>
                  )} */}
                </div>
              </div>


            </div>



          </div>

        </article>
      </section>
    </main >
  );
}
