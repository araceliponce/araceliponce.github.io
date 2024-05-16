// "use client";

import React from "react";
import { Tag } from "@a_r_a_c_e_l_i/library";
import { Heading } from "@a_r_a_c_e_l_i/library";
import { li } from "@/definitions";
import { Icon } from "@iconify/react";

export default function AboutMe() {
  return (
    <section id="acerca-de-mi" className="pb-20">
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
            <h3 className='heading-card pb-2'>Certificados recientes:</h3>
            <div className="grid sm:grid-cols-2  *:grid gap-2 *:gap-2">

              <div className="*:border">

                <a href={`certus_1.webp?ref=portfolio`} title="Certificado Certus, página 1">
                  <img src="certus_1.webp" loading="lazy" alt="Certificado Certus, página 1" height={500} width={300} />
                </a>
                <a href={`certus_2.webp?ref=portfolio`} title="Certificado Certus, página 2">
                  <img src="certus_2.webp" loading="lazy" alt="Certificado Certus, página 2" height={500} width={300} />
                </a>

              </div>

              <div className="">
                <a href={`english.webp?ref=portfolio`} className="border" title="Certificado de inglés">
                  <img src="english.webp" loading="lazy" alt="Certificado de inglés" height={500} width={300} />
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


