import React from 'react'
import { Tag } from '@a_r_a_c_e_l_i/library'

function Marquee() {
  return (
    <div className="relative flex overflow-x-hidden">
      <div className="py-2 animation-marquee whitespace-nowrap">
        <Tag icon='Figma' />
        <Tag icon='CSS3' />
        <Tag icon='React' />
        <Tag icon='NextJS' />
        <Tag icon='Vue' />
        <Tag icon='TypeScript' />
        <Tag icon='PHP' />
      </div>

      <div className="absolute top-0 py-2 animation-marquee2 whitespace-nowrap">
        <Tag icon='Figma' />
        <Tag icon='CSS3' />
        <Tag icon='React' />
        <Tag icon='NextJS' />
        <Tag icon='Vue' />
        <Tag icon='TypeScript' />
        <Tag icon='PHP' />
      </div>
    </div>

  )
}

export default Marquee