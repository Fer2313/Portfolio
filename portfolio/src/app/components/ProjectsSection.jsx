'use client'
import React, { useState } from 'react'
import Cards from './Cards'
import CardsI from './CardsI'

export default function ProjectsSection({ES}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <div id='projects' className='mt-80 w-2/3'>
            <h1 className=' text-3xl text-[#64ccc5] font-semibold' >{!ES?"Proyects":"Proyectos"}</h1>
            <div className='flex flex-col gap-5 mt-20'>
{/*                 <h1 className=' text-xl font-semibold'>Individual</h1>
                <CardsI ES={ES} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></CardsI> */}
                <h1 className=' text-xl font-semibold'>{!ES?"Group":"Grupal"}</h1>
                <Cards ES={ES} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Cards>
            </div>
        </div>
    )
}
