// "use client";

import React from "react";
import { Tag } from "@a_r_a_c_e_l_i/library";
import { Heading } from "@a_r_a_c_e_l_i/library";
// import { Tag } from "@/lib/Tag";



export default function AboutMe() {
  return (
    <section id="acerca-de-mi">
      <div className="contained">
        <div className="text-center mx-auto pb-10">
          <Heading>
            Acerca de mí
          </Heading>
          <p className="subheading">
            ¿Quién soy?¿Dónde he estudiado?
            <br /> Y otras preguntas frecuentes de entrevistas.
          </p>
        </div>

        <div className="columns gap-20 childs-outlined">


          <div>
            <h3 className='heading-card pb-2'>Perfil profesional:</h3>
            <ul className="star-list">


              <li>Experiencia profesional: 1.5 años</li>
              <li>Estudios: Sí</li>
              <li>Inglés: Técnico</li>
              <li>Git y Github: Sí</li>
              <li>Mayor proficiencia actual: CSS3</li>
            </ul>

          </div>


          <div>
            <h3 className='heading-card pb-2'>Certificados:</h3>
            <div className="grid sm:grid-cols-2 *:childs-outlined *:grid gap-2 *:gap-2">

              <div>
                {/* <img src='certus_1.webp' loading='lazy' width={300} height={300} />
                <img src='certus_2.webp' loading='lazy' width={300} height={300} /> */}
                <a href={`certus_1.webp?ref=portfolio`}>
                  <img src="certus_1.webp" loading="lazy" alt="" height={500} width={300} />
                </a>
                <a href={`certus_2.webp?ref=portfolio`}>
                  <img src="certus_2.webp" loading="lazy" alt="" height={500} width={300} />
                </a>

              </div>

              <div className="">
                {/* <img src='english.webp' loading='lazy' width={300} height={300} /> */}

                <a href={`english.webp?ref=portfolio`}>
                  <img src="english.webp" loading="lazy" alt="" height={500} width={300} />
                </a>

              </div>
            </div>
          </div>



          <div className=''>
            <h3 className='heading-card pb-2'>Principales herramientas de trabajo:</h3>

            <ul className="tags">
              <Tag icon='Figma' />
              <Tag icon='React' />
              <Tag icon='PHP' />
              <Tag icon='MySQL' />
              <Tag icon='JavaScript' />
              <Tag icon='JQuery' />
              <Tag icon='TypeScript' />
              <Tag icon='CSS3' />
              <Tag icon='Git' />
              <Tag icon='Github' />

            </ul>
          </div>
          <div className=''>

            <h3 className='heading-card pb-2'>Herramientas adicionales:</h3>
            <ul className="tags">
              <Tag icon='Vue' />
              <Tag icon='Jekyll' />
              <Tag icon='Hugo' />
              <Tag icon='Eleventy' />

            </ul>
          </div>

        </div>


      </div>
    </section>
  );
}


