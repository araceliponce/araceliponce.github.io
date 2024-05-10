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
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a

        href={href}
        // target={href ? "_blank" : "_self"}
        className="font-medium"
      >
        {children}
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

  // useEffect(() => {
  //   function handleScroll() {
  //     if (window.scrollY > 0) {
  //       setIsScrolling(true);
  //     } else {
  //       setIsScrolling(false);
  //     }
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (

    <header

      className={`fixed lg:sticky top-0 right-0 left-0 z-50  px-2 pt-2 transition-colors `}
    >
      {/* <div className={`
       contained mx-auto px-2 py-1 h-[3rem]  rounded-md flex items-center justify-between transition-colors
      ${isScrolling ? "bg-none backdrop-blur-sm text-gray-700 has-filter-hue" : "bg-white "} 
      `}> */}
      <div className={`
       contained mx-auto px-2 py-1 h-[3rem]  rounded-md flex items-center justify-between transition-colors header-inner`}>
        <a
          className="logo"
          href="#"
          target="_blank"
        >
          <img src="favicon.png" alt="logo de Araceli" />
          <span className="sr-only">Volver al inicio</span>
        </a>

        <div className="desktop-nav"></div>

        <button
          onClick={handleOpen}
          className="ml-auto grid rounded-md lg:hidden bg-white"
        >

          {open ? (

            <Icon icon="material-symbols:menu" />
          ) : (

            <Icon icon="material-symbols:menu" />
          )}
        </button>
        <div className="desktop-items hidden lg:flex gap-2 text-sm">

          <Tag icon='LinkedIn' href={li}>
            <span className="">araceliponcesanga</span>
          </Tag>
          <Tag icon='Github' href={gh}>
            <span className="">araceliponce</span>
          </Tag>
        </div>

      </div>
      <Collapse open={open} className={open ? "block" : "hidden"}>
        <div className="contained mx-auto mt-2 rounded-lg border mobile-nav px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="#">Inicio</NavItem>
            <NavItem href="#experiencia">Experiencia</NavItem>
            <NavItem href="#proyectos">Proyectos</NavItem>
            <NavItem href="#habilidades">Habilidades</NavItem>
            <NavItem href="#acerca-de-mi">Acerca de mí</NavItem>
            <li>
              <div className="flex flex-wrap gap-3">
                <Tag icon='LinkedIn' href="https://www.linkedin.com/in/araceliponcesanga">
                  <span className="sr-only">araceliponcesanga</span>
                </Tag>
                <Tag icon='Github' href="https://www.linkedin.com/in/araceliponcesanga">
                  <span className="sr-only">araceliponcesanga</span>
                </Tag>

              </div>
            </li>
          </ul>
        </div>
      </Collapse>
    </header>

  );
}

