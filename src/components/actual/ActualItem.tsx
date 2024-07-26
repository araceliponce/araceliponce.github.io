"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import ProjectCarousel from "../ui/ProjectCarousel";


type ItemProps = {
  cover: any[]
  videoUrl?: string
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
  videoUrl,
  slug = '',
  from,
  url,
  desc,
  title
}: ItemProps) {




  return (
    <article>

      <div>


        {/* <div className=" changes-color">
          {videoUrl && videoUrl.length > 0 ? (
            <div
            >
              <LocalVideoPlayer videoUrl={videoUrl} />
            </div>
          ) : null
          }
        </div> */}

        <div className=" changes-color">
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
