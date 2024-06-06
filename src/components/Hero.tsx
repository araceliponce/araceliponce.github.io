import { li } from "@/definitions";
import { Icon } from "@iconify/react";
import Marquee from "./Marquee";
import { Magnetic } from "./Magnetic";
export default function Hero() {
  return (
    <section id="hero" className="relative ">

      {/* bg-[#037b82] text-white  */}
      <div className="lg hero-inner pt-[13rem]">

        <div className="flow">

          <h1 className="text-gradient inline-block">Araceli Ponce Sanga
          </h1>
          <p className="availability">Desarrolladora web</p>
          <p className="availability">Disponible para nuevos proyectos</p>


          <div className="flex-group w-fit gap-4 pt-10">

            <div className="text-center email">
              <Magnetic>
                <a href="mailto:aponcesanga@gmail.com" className="mx-auto w-fit btn-cta rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center justify-center gap-2 p-2 px-5">
                  <span>Contactar</span>
                  <Icon icon="ooui:recent-changes-ltr" />
                </a>
              </Magnetic>
              <small className="block pt-1 text-violet hero-email">aponcesanga@gmail.com</small>
            </div>


            <Magnetic>
              <a href={li} className="linkedin h-fit rounded-md btn-secondary duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center justify-center gap-2 p-2 px-5 backdrop-blur-sm">
                <span>Ver LinkedIn</span>
                <Icon icon="ooui:link-external-ltr" />
              </a>
            </Magnetic>
          </div>
        </div>

        <svg aria-hidden="true" width="0" height="0">
          <filter id="marquee" primitiveUnits="objectBoundingBox" x="0" y="0" width="700%" height="100%">
            <feTile width="1"></feTile>
            <feTile></feTile>
          </filter>
        </svg>

        <div className="marquee-container pt-4">
          {/* <div className="dx-text" data-separator="✦">
            <span>Disponible para nuevos proyectos</span>
          </div> */}
          <Marquee />
        </div>
      </div>
    </section>
  );
}
