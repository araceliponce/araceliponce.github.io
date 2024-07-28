import { ENLACES } from '@/lib/data'
import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'

function ActualFooter() {
  return (
    <footer>

      <div className="grid justify-center py-[5rem] text-sm">
        {/* <div>
          <p className='relative flex items-center w-fit'>
            <Icon icon='solar:adhesive-plaster-bold-duotone' />
            <span> Diseño y desarrollo por Araceli</span>
            <span className="inline-block absolute bottom-0 right-0 translate-x-[100%]">  <Icon icon="mynaui:click" /></span>
          </p>
        </div> */}
        {/* <span></span> */}

        <div className="text-center pb-3 grid gap-1">
          <p className=''>Diseñado y desarrollado por mí</p>
          <p className="text-xs">en construcción al 28/07/24</p>
        </div>
        <div className='flex flex-wrap justify-center gap-2'>


          <a className='button' href={`mailto:${ENLACES.email}`}>{ENLACES.email}</a>

          <a className='button' href={ENLACES.github} target="_blank" rel="noopener noreferrer">
            <span>Github</span>
            <Icon icon="solar:incognito-bold-duotone" />

          </a>
          <a className='button' href={ENLACES.linkedin} target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <Icon icon="solar:suitcase-bold-duotone" />
          </a>

          {/* 
          
            <Icon icon='ic:outline-arrow-outward' />

               <Icon icon="mynaui:click" />

                <Icon icon='ic:round-copy-all' />
            
            */}

        </div>
      </div>
    </footer>
  )
}

export default ActualFooter