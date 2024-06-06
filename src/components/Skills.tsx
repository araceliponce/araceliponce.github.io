"use client";

import React from "react";

import { Heading } from "@a_r_a_c_e_l_i/library";
import { Tag } from "@a_r_a_c_e_l_i/library";
import { Icon } from "@iconify/react";


export default function Skills() {
  return (
    <section id="habilidades">
      <div className="text-center">

        <Heading>Habilidades</Heading>
        <p>
          <span>Principales habilidades como desarrolladora.</span>
        </p>

        <div className="pt-[3rem] grid gap-[4rem] md:gap-5 md:grid-cols-2  childs-outlined">

          <div className="pt-0">
            <div className="mx-auto grid place-content-center text-[1.5rem] rounded-md h-[4rem] w-[4rem] -translate-y-8 bg-white border">
              <Icon icon="mynaui:click" />
            </div>
            <p className='heading-card -translate-y-3'><b>Diseño UX/UI</b></p>
            <ul className='star-list text-start'>
              <li>Diseños basados en <strong>mejores prácticas de UX y UI</strong>.</li>
              <li>Planeación con <b>benchmarking</b> y <b>estudios de usuarios</b>.</li>
              <li>Creación de <strong>wireframes</strong> y <strong>prototipos</strong> interactivos.</li>
            </ul>

          </div>
          <div className="pt-0">
            <div className="mx-auto grid place-content-center text-[1.5rem] rounded-md h-[4rem] w-[4rem] -translate-y-8 bg-white border">
              <Icon icon="mynaui:code-square" />
            </div>
            <p className='heading-card -translate-y-3'><b>Desarrollo FrontEnd</b></p>
            <ul className='star-list text-start'>
              <li> <strong>Páginas responsive</strong> con grid y flexbox.</li>
              <li>Creación de <strong>librerías de componentes y clases</strong> reutilizables.</li>
              <li> <strong>Accesibilidad </strong>en contraste de colores, y tamaños: de letra y de elementos interactivos.</li>
              <li><strong>Optimización de carga y SEO</strong> con Lighthouse y Google PageSpeed Insights.</li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  );
}

