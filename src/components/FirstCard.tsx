"use client"

import React from 'react'
import { Image } from '@a_r_a_c_e_l_i/library'



export default function FirstCard() {
  return (
    <div className=" px-[2.5rem]">
      <div className=" hero-card has-noise">
        <div className=" rounded-xl overflow-hidden ">

          <div aria-hidden={true}>
            <Image src="/pattern.png" alt='' ratio={7 / 1} caption='' />
          </div>
          {/* <div className='py-5 px-5 lg:px-16'>
            <b className="text-lg">
              Lorem ipsum dolor sit amet consectetur at
            </b>
            <p className="text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, excepturi sunt dignissimos, error iure te ut consectetur fugit ipsa atque.</p>
          </div> */}

        </div>
      </div>
    </div>
  )
}
