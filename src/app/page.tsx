'use client'
import { Toaster } from "@/components/ui/toaster";
import ActualContent from "@/components/actual/ActualContent";
import { useEffect } from "react";
import Lenis from 'lenis';
import ActualFooter from "@/components/actual/ActualFooter";

export default function Home() {


  useEffect(() => {
    const lenis = new Lenis()

    const raf = (time: number) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    // const resize = () => {
    //   setDimension({width: window.innerWidth, height: window.innerHeight})
    // }

    // window.addEventListener("resize", resize)
    requestAnimationFrame(raf);
    // resize();

    return () => {
      // window.removeEventListener("resize", resize);
    }
  }, [])
  return (


    <>

      <ActualContent />
      <ActualFooter />

      <Toaster />

    </>
  );
}
