// "use client";

import { li } from "@/definitions";

export default function Hero() {
  return (
    <section id="hero" className="relative mt-5 mx-[.5rem] lg:mx-[1rem]   bg-[#07939b] text-white has-noise">


      <div className="">

        <h1 className="">Araceli Ponce Sanga </h1>
        <p className="subheading text-white pt-3 pb-5">Desarrolladora web</p>

        <div className="flex flex-wrap items-start gap-3 ">
          <div className="text-center">
            <a href="mailto:aponcesanga@gmail.com" className="grid-row btn-cta">Contactar</a>
            <small className="block pt-1">aponcesanga@gmail.com</small>
          </div>
          <a href={li} className="grid-row btn-outlined"> Ver LinkedIn</a>
        </div>
      </div>



    </section>
  );
}
