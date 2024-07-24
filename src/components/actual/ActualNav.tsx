"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { useState } from "react"
import Image from "next/image"
import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { Icon } from "@iconify/react/dist/iconify.js"
import { ENLACES } from "@/lib/data"



interface NavItem { title: string; href: string; description: string }

const NAV_WORKS: NavItem[] = [
  {
    title: "Projectos",
    href: "/#experiencia-laboral",
    description:
      "Selección de projectos destacados (2023 - 2024).",
  },
  // {
  //   title: "Extras",
  //   href: "/#extras",
  //   description:
  //     "[sección en construcción]",
  // },
]
const SUBNAV_WORKS: NavItem[] = [
  {
    title: "Excel to Charts",
    href: "/project/charts",
    description:
      "Aplicación web. Generador online de visualizaciones de datos (gráficos) a partir de archivos excel.",
  },
  {
    title: "Rooster",
    href: "/project/rooster",
    description:
      "Landing page. Página de inicio inspirada en productores de café.",
  },
]

const NAV_PROFILE: NavItem[] = [
  {
    title: "Experiencia laboral",
    href: "/#experiencia-laboral",
    description:
      "Experiencias laborales más recientes.",
  },

  {
    title: "Educación",
    href: "/#educacion",
    description:
      "[sección en construcción]",
  },
  {
    title: "Habilidades",
    href: "/#habilidades",
    description:
      "[sección en construcción]",
  },
]






export function ActualNav() {


  return (
    <>



      <NavigationMenu
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                <span className="sr-only">Ir a la página Inicio</span>
                <Icon icon='majesticons:home-line' />
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger
            >
              Portafolio
            </NavigationMenuTrigger>
            <NavigationMenuContent
            // forceMount
            >



              <ul className="grid gap-3 p-4 w-[88vw] md:w-[500px] md:grid-cols-[.75fr,1fr]">

                <li></li>
                {/* <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex flex-wrap h-full w-full select-none justify-center items-end gap-2 rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >

                      <span className="">
                        <Image src="/favicon_192.png" alt="logo" width={30} height={30} />
                      </span>
                      <span className="text-sm leading-tight text-muted-foreground">
                       
                      </span>
                    </a>
                  </NavigationMenuLink>
                </li> */}


                {NAV_WORKS.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
                {SUBNAV_WORKS.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                    className="wide"
                  >
                    {component.description}
                  </ListItem>
                ))}

                <li>
                  <a href={ENLACES.npm} className="link">
                    <span className="link__icon">
                      <Icon icon='iconoir:npm' />
                    </span>
                    <span className="link__text">
                      <span className="link__text__title">a_r_a_c_e_l_i/library
                        <Icon icon='ic:outline-arrow-outward' />
                      </span>

                    </span>
                  </a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Acerca de mí</NavigationMenuTrigger>
            <NavigationMenuContent
            // forceMount
            >

              <ul className="grid gap-3 p-4 w-[88vw] md:w-[500px] lg:grid-cols-[.75fr,1fr]">
                {NAV_PROFILE.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

    </>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li
      className={className}
    >
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "link",
            // className
          )}
          {...props}
        >
          <span className="link__icon">
            <Image src="/favicon_192.png" alt="logo" width={50} height={50} />
          </span>
          <span className="link__text">
            <span className="link__text__title">{title}</span>
            <span className="link__text__desc">
              {children}
            </span>
          </span>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
