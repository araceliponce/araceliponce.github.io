"use client";
import React from "react";
import Link from "next/link";
import { highlightWords } from "@/lib/functions";

import { Icon } from "@iconify/react/dist/iconify.js";
import { Tag } from "@a_r_a_c_e_l_i/library";
import ProjectCarousel from "../ui/ProjectCarousel";


type ItemProps = {
  cover: any[]
  slug: string
  stack?: string[]
  from: string
  to?: string
  url?: string
  repo?: string
  title?: string
  desc: string
  did: string[]
};

export default function ActualItem({
  cover,
  slug = '',
  from,
  to,
  url,
  repo,
  // role,
  stack,
  desc,
  did,
  // company,
  title
}: ItemProps) {




  return (
    <article>

      <div>


        <div className="project__carousel-wrapper changes-color">
          {cover && cover.length > 0 ? (
            <div
            >
              <ProjectCarousel slides={cover} />
            </div>
          ) : null
          }



        </div>



        <div className="project__text text-sm">

          <h3 className="">{title}</h3>

          <div className="desc">
            <p>{desc}</p>
          </div>

          <time className="tracking-tighter">{from}</time>
        </div>

        <div className="project__footer gap-1">

          <a href={url} className="link-inline">
            <span>Ver online</span>
            <Icon icon='solar:link-bold-duotone' />
          </a>

          <Link href={`/project/${slug}`} className="link-inline link-inline--secondary">
            <span>Ver detalles</span>
            <Icon icon='solar:document-bold-duotone' />
          </Link>
        </div>


      </div>
    </article>
  );
};
