'use client'
import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring';
import { BsChevronCompactDown, BsChevronCompactUp } from 'react-icons/bs'
import { AiFillHtml5 } from 'react-icons/ai';
import { SiSequelize } from 'react-icons/si';
import { FaCss3Alt, FaNode } from 'react-icons/fa';
import { BiLogoJavascript, BiLogoPostgresql, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from 'react-icons/bi';

export default function Competitions({ES ,mostrarComponenteNuevo, setMostrarComponenteNuevo}) {
    const animacion = useSpring({ height: mostrarComponenteNuevo ? '500px' : '25px' });
    const animacion2 = useSpring({ height: !mostrarComponenteNuevo ? '25px' : '500px' });
    return (
        <div id='competitions'>
            {mostrarComponenteNuevo ? <animated.div style={animacion} className='flex flex-col w-full items-center rounded bg-slate-800'>
                <button onClick={() => setMostrarComponenteNuevo(false)} className='flex w-full justify-center hover:rounded hover:bg-slate-600'><BsChevronCompactDown size={30}></BsChevronCompactDown></button>
                <div className='flex w-full justify-around p-5'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='text-2xl'>{!ES?"Education":"Educacion"}</h2>
                        <span className='flex flex-col gap-1'>
                            <h4 className='text-lg text-teal-600'>{!ES?"Secondary education":"Educacion secundaria"}</h4>
                            <p className='text-base text-[#FFA41B]'>Institution Ipem 37</p>
                            <p className='text-xs'>{!ES?"Certificate in Business Administration":"Certificado en Administracion de Empresas"}</p>
                            <p className='text-xs'>{!ES?"Finish date:":"Fecha de finalizacion"} 10/12/21</p>
                        </span>
                        <span className='flex flex-col gap-1'>
                            <h4 className='text-lg  text-teal-600'>Extra</h4>
                            <p className='text-base text-[#FFA41B]'>Bootcamp Soy Henry</p>
                            <p className='text-xs'>{!ES?"Certificate in Full Stack Developer":"Certificado en Full Stack Developer"}</p>
                            <p className='text-xs'>{!ES?"Finish date:":"Fecha de finalizacion"} 1/7/23</p>
                            <a href='https://certificates.soyhenry.com/new-cert?id=f475681bc6eb140e244bcd4b1fde476adc1569581701a0ab4de91aa1ac809022' target="_blank" className='px-2 rounded text-center py-1 bg-[#2C74B3]'>{!ES?"Certificate":"Certificado"}</a>
                        </span>
                    </div>
                    <div>
                        <h2 className='text-2xl mb-2'>{!ES?"Skills":"Habilidades"}</h2>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Techniques":"Tecnicas"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Collaborative":"Colaborativo"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Autodidact":"Autodidacta"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Proactive":"Proactivo"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            Scrum
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Dedication":"Dedicacion"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Autonomous":"Autonomo"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Creativity":"Creatividad"}
                        </div>
                        <div
                            data-te-chip-init
                            data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1] dark:bg-neutral-600 dark:text-neutral-200"
                            data-te-close="true">
                            {!ES?"Very basic english":"Ingles muy basico"}
                        </div>
                    </div>
                    <div>
                        <h2 className='text-2xl'>{!ES?"Goals and objectives":"Metas y objetivos"}</h2>
                        <p className='w-72 text-sm mt-2 text-[#96dfa5]'>{!ES?"My goal as a programmer is to create the best interactive, functional and attractive websites for the user and to continue learning in this process.":"Mi objetivo como programador es crear los mejores sitios web interactivos, funcionales y atractivos para el usuario y seguir aprendiendo en este proceso."}</p>
                    </div>
                    <div>
                    <h2 className='text-2xl'>{!ES?"Technologies learned":"Tecnologias aprendidas"}</h2>
                    <div className='grid grid-cols-4 mt-2'>
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
                </div>
            </animated.div> :
                <animated.div style={animacion2}>
                    <button onClick={() => setMostrarComponenteNuevo(true)} className='flex w-full justify-center bg-slate-800 hover:rounded hover:bg-slate-600'><BsChevronCompactUp size={30}></BsChevronCompactUp></button>
                </animated.div>}
        </div>
    )
}
