import { li } from "@/definitions";
import { Icon } from "@iconify/react";
export default function Hero() {
  return (
    <section id="hero" className="relative ">


      <div className=" bg-[#07939b] text-white hero-inner pt-[13rem]">

        <div className="flow">
          <h1 className="">Araceli Ponce Sanga </h1>
          <p className="heading-card text-white p-0 pt-2">Desarrolladora web</p>

          <div className="flex-group w-fit gap-4 pt-4">
            <div className="text-center">
              <a href="mailto:aponcesanga@gmail.com" className="mx-auto w-fit btn-cta rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center justify-center gap-2 p-2 px-5">
                <span>Contactar</span>
                <Icon icon="ooui:recent-changes-ltr" />
              </a>
              <small className="block pt-1">aponcesanga@gmail.com</small>
            </div>




            <a href={li} className="h-fit rounded-md btn-outlined duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center justify-center gap-2 p-2 px-5 text-white backdrop-blur-sm">
              <span>Ver LinkedIn</span>
              <Icon icon="ooui:link-external-ltr" />
            </a>



          </div>
        </div>
      </div>



    </section>
  );
}
