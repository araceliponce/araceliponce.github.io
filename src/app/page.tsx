"use client"

/* 
import { jsxs as k, jsx as g, Fragment as me } from "react/jsx-runtime";import S, { useState as ye, useEffect as Ae } from "react";

al parecer cada componente de una libreria npm necesita usar useEffect, en lugar de colocar en cada uno, estará aquí. Poco optimo, pero es solo 1 landing page
*/

import { AboutMe, Experience, FirstCard, Footer, Header, Hero, Projects, Skills } from "@/components";
import MoreProjects from "@/components/MoreProjects";
import useIntersectionObserver from "@/lib/useObserver";
import { useRef } from "react";

export default function Page() {



  const revealRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const areVisible = useIntersectionObserver(revealRefs);


  return (
    <>

      <div className="layout">



        <div id="main" className="px-4">

          <Header />
          <main>

            <div className="reveal" ref={revealRefs[0]}>
              <Hero />
            </div>

            <div className="reveal" ref={revealRefs[1]}>

              <Experience />
            </div>

            <div className="reveal" ref={revealRefs[2]}>
              <Projects />
            </div>

            <div className="reveal" ref={revealRefs[3]}>
              <MoreProjects />
            </div>


            <div className="reveal" ref={revealRefs[4]}>
              <Skills />

            </div>
            <div className="reveal" ref={revealRefs[5]}>
              <AboutMe />
            </div>

          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
