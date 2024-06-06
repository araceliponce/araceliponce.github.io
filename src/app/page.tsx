"use client"

/* 
import { jsxs as k, jsx as g, Fragment as me } from "react/jsx-runtime";import S, { useState as ye, useEffect as Ae } from "react";

al parecer cada componente de una libreria npm necesita usar useEffect, en lugar de colocar en cada uno, estará aquí. Poco optimo, pero es solo 1 landing page
*/

import { AboutMe, ApSidebar, Experience, FirstCard, Footer, Header, Hero, Projects, Skills } from "@/components";

export default function Page() {

  return (
    <>

      <div className="may-layout">


        <div id="sidebar" className="relative">

          <ApSidebar />
        </div>
        <div id="main">

          <Header />
          <main>

            <Hero />

            {/* <FirstCard /> */}

            <Experience />

            <Projects />


            <Skills />

            <AboutMe />

          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}
