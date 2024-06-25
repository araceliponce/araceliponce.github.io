"use client"
import React from "react";
import { useState, useEffect } from "react";
import {
  Collapse
} from "@material-tailwind/react";

import { Tag } from "@a_r_a_c_e_l_i/library";
import { Icon } from "@iconify/react";
import { gh, li } from "@/definitions";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void
}
function NavItem({ children, href, onClick }: NavItemProps) {
  return (
    <li>
      <a

        href={href}
        // target={href ? "_blank" : "_self"}
        className="font-medium text-sm rounded-md  duration-300  active:translate-y-1 active:scale-x-110 active:scale-y-90 flex items-center gap-2 p-2 link"
        onClick={onClick}
      >

        <span className="text-lg" aria-hidden={true}>✦</span>

        <span> {children}</span>
      </a>
    </li>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  // const [isScrolling, setIsScrolling] = useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);



  return (

    <header

      className={`fixed top-0 right-0 left-0 z-50 `}
    // style={{ height: '0' }}
    >
      {/* <div className={`
       contained mx-auto px-2 py-1 h-[3rem]  rounded-md flex items-center justify-between transition-colors
      ${isScrolling ? "bg-none backdrop-blur-sm text-gray-700 has-filter-hue" : "bg-white "} 
      `}> */}
      <div className={`
       contained mx-auto  px-2 pt-1 pb-2  flex items-center justify-between transition-colors header-inner`}>
        <a
          className="btn-secondary logo"
          href="#"
        >
          <img src="favicon.png" alt="logo de Araceli" />
          <span className="sr-only">Volver al inicio</span>
        </a>

        <div className="desktop-nav hidden lg:block">

          <nav>
            <ul className="flex flex-wrap gap-2">
              <NavItem href="#">Inicio</NavItem>
              <NavItem href="#experiencia">Experiencia</NavItem>
              <NavItem href="#proyectos">Proyectos</NavItem>
              <NavItem href="#habilidades">Habilidades</NavItem>
              <NavItem href="#acerca-de-mi">Acerca de mí</NavItem>
            </ul>
          </nav>
        </div>

        <button
          onClick={handleOpen}
          className="ml-auto grid rounded-md lg:hidden btn-secondary "
        >
          <span className="sr-only">Abrir navegación</span>

          {open ? (

            <Icon icon="material-symbols:menu" />
          ) : (

            <Icon icon="material-symbols:menu" />
          )}
        </button>

      </div>
      <Collapse open={open} className={open ? "block" : "hidden"}>
        <div className="contained mx-auto mt-3 mobile-nav px-3 py-5">
          <ul className="flex flex-col gap-2">
            <NavItem href="#" onClick={handleOpen}>Inicio</NavItem>
            <NavItem href="#experiencia" onClick={handleOpen}>Experiencia</NavItem>
            <NavItem href="#proyectos" onClick={handleOpen}>Proyectos</NavItem>
            <NavItem href="#habilidades" onClick={handleOpen}>Habilidades</NavItem>
            <NavItem href="#acerca-de-mi" onClick={handleOpen}>Acerca de mí</NavItem>
            <li>
              <div className="flex flex-wrap gap-3">
                {/* <Tag icon='LinkedIn' className="" href={li}>
                  <span className="">araceliponcesanga</span>
                  <Icon icon="ooui:link-external-ltr" />
                </Tag> */}
                <Tag icon='Github' href={gh} className="text-sm">
                  <span className="">araceliponce</span>
                  <Icon icon="ooui:link-external-ltr" />
                </Tag>

              </div>
            </li>
          </ul>
        </div>
      </Collapse>
    </header>

  );
}

