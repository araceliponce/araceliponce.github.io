import { ReactNode } from "react"

export interface ScrollingPoint {

  id: string
  type?: 'section' | 'collage'
  title?: string
  subtitle?: string
  cover?: any[]

  content?: Array<any>
  // content: any
}

export interface CarouselSlide {
  img: string;
  content?: string;
};

export interface CarouselV2Props {
  slides: CarouselSlide[];
  containerClassName?: string;
};
