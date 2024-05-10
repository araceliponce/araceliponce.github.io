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
        <p className="subheading">
          <span>Principales habilidades como desarrolladora.</span>
        </p>



        <div className="grid gap-5 md:grid-cols-2  childs-outlined">

          <div>
            <div className="mx-auto grid place-content-center bg-ghost text-[1.5rem] rounded-md h-[4rem] w-[4rem] -translate-y-8">
              <Icon icon="mynaui:click" />
            </div>
            <p className='heading-card -translate-y-3'><b>Diseño de interfaces UX/UI</b></p>
            <ul className='star-list'>
              <li>Planeación basada en <strong>mejores prácticas de UX y UI</strong>.</li>
              <li><strong>Benchmarking</strong>.</li>
              <li><strong>Prototipos</strong> de alta, mediana, y baja fidelidad.</li>
            </ul>

          </div>
          <div>
            <div className="mx-auto grid place-content-center bg-ghost text-[1.5rem] rounded-md h-[4rem] w-[4rem] -translate-y-8">
              <Icon icon="mynaui:code-square" />
            </div>
            <p className='heading-card -translate-y-3'><b>Desarrollo FrontEnd</b></p>
            <ul className='star-list'>
              <li> <strong>Páginas responsive</strong> fluidas.</li>
              <li> <strong>Accesibilidad </strong>en contraste de colores, y tamaños: de letra y de elementos interactivos.</li>
              <li>Creación de <strong>librerías de componentes</strong>.</li>
              <li>Código <strong>CSS sin problemas de especificidad</strong>.</li>
              <li><strong>Optimización de carga y SEO</strong> con Lighthouse y Google PageSpeed Insights.</li>
            </ul>
          </div>


        </div>
      </div>
    </section>
  );
}

