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
    <article
    // className="grid sm:grid-cols-[minmax(20ch,10vw),1fr] bg-white rounded-md p-[3vw]"
    >

      <header
      // className="bg-pink-00 grid md:grid-cols-[1fr,1fr] items-start pt-[1.5rem] pb-[1rem]"
      >

        {/* <div className="pb-1  opacity-90">
          <h3 className="font-bold text-lg leading-none">{title}</h3>
        </div>

        <ul className="flex flex-wrap md:justify-end gap-1 pt-[.2rem]">
          {stack?.map((item) => (
            <Tag icon={item} key={item} />
          ))}
        </ul> */}

      </header>
      <div
      // className="item__content"
      // className={cover ? 'md:grid md:grid-cols-2 gap-[1rem]' : ''}
      >


        <div>
          {cover && cover.length > 0 ? (
            <div
            >
              <ProjectCarousel slides={cover} />
            </div>
          ) : null
          }



        </div>



        <div className="project__text">


          <h3 className="tracking-tighter  leading-none">
            <span>{title}</span>
          </h3>

          <div className="desc">
            <p className="text-sm">{desc}</p>
            {/* <ul className="flex flex-wrap gap-1 pt-[.5rem]">
              {stack?.map((item) => (
                <Tag icon={item} key={item} />
              ))}
            </ul> */}
          </div>

          <time className="text-sm">{from}</time>
        </div>

        <div className="project__footer gap-1">

          <a href={url} className="link-inline">
            <span>Ver online</span>
            <Icon icon='ic:outline-arrow-outward' />
          </a>

          <Link href={`/project/${slug}`} className="link-inline link-inline--secondary">
            <span>Ver detalles</span>
            <Icon icon='ic:outline-arrow-outward' />
          </Link>
        </div>


      </div>
    </article>
  );
};
