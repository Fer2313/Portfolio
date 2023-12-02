'use client'
import React, { useState } from 'react'
import Cards from './Cards'
import CardsI from './CardsI'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiSequelize } from 'react-icons/si';
import { FaCss3Alt, FaNode } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoPostgresql, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from 'react-icons/bi';


export default function ProjectsSection({ES}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen1, setIsModalOpen1] = useState(false);
    return (
        <article className='flex flex-col gap-10 bg-gradient-to-b px-10 pb-10 from-[#242A42] to-[#354673]'>
            <section className="flex flex-col gap-2">
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">
            {!ES ? "Technologies learned" : "Tecnologias aprendidas"}
          </h1>
        </div>
        <div className="flex justify-center">
        <div className="grid grid-cols-9 gap-10">
          <AiFillHtml5 size={45}></AiFillHtml5>
          <FaCss3Alt size={45}></FaCss3Alt>
          <BiLogoJavascript size={45}></BiLogoJavascript>
          <BiLogoReact size={45}></BiLogoReact>
          <BiLogoTailwindCss size={45}></BiLogoTailwindCss>
          <BiLogoRedux size={45}></BiLogoRedux>
          <BiLogoPostgresql size={45}></BiLogoPostgresql>
          <SiSequelize size={45}></SiSequelize>
          <FaNode size={45}></FaNode>
        </div>
        </div>
      </section>
        <section id='projects' className='flex flex-col text-center gap-4'>
            <h1 className=' text-2xl text-white font-semibold' >{!ES?"Proyects":"Proyectos"}</h1>
            <div className='flex justify-center'>
            <div className='grid grid-cols-2 gap-8'>
                <CardsI ES={ES} isModalOpen={isModalOpen1} setIsModalOpen={setIsModalOpen1}></CardsI> 
                <Cards ES={ES} isModalOpen1={isModalOpen1} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Cards>
            </div>
            </div>
        </section>
        </article>
    )
}
