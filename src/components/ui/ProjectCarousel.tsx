import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carouselv2" //different name in case i install it again
// import { CarouselV2Props } from '@/utils/interfaces'

import { Image } from "@a_r_a_c_e_l_i/library";

export interface CarouselSlide {
  img: string;
  content?: string;
};

export interface CarouselV2Props {
  slides: CarouselSlide[];
  containerClassName?: string;
};

export default function ProjectCarousel({ slides, containerClassName = '' }: CarouselV2Props) {
  return (

    <div
      className={containerClassName}
    >

      <Carousel
        opts={{
          align: "start",
        }}
        orientation="vertical"
        // carousel vertical, necesita un height en carouselContent. y un width para mantener el aspect ratio
        //carousel content tambien define el basis de los slides segun breakpoint: *:md:basis-2/3 *:bg-white *:lg:basis....
        className="max-w-[300px]"
      >

        <CarouselContent
          className='carousel-ratio-wrapper'
        >

          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="card">
                <Image src={slide.img} alt={`Imagen ${index}`} ratio={350 / 250} loading='lazy' />

                {slide.content && <p className='content'>{slide.content}</p>}
              </div>
            </CarouselItem>
          ))}

        </CarouselContent>
        <div
          className='flex gap-1 grid justify-end absolute bottom-0 right-0 p-1'
        >
          <CarouselPrevious title='Diapositiva anterior' />
          <CarouselNext title='Siguiente diapositiva' />
        </div>
      </Carousel>


    </div>
  )
}
