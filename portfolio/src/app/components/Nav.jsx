'use client'
import Link from 'next/link';
import React,{useState} from 'react'
 export default function Nav({ES ,setMostrarComponenteNuevo}) {
    const [boolean, setBoolean] = useState({
        button1: true,
        button2: false,
        button3: false
      })
    return (
      <div className='flex justify-center'>
        <nav class="breadcrumb flex px-3 py-2 rounded-md fixed bg-[#0B2321] items-center">
        <ol class="breadcrumb list-reset flex">
          <li class={`${boolean.button1 ? "text-[rgb(32,82,149)] breadcrumb-item" : "text-white"}`}>
            <a
            onClick={()=>setBoolean({
                button1: true,
                button2: false,
                button3: false
            })}
              href="#about"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >{!ES ?"About me":"Sobre mi"}</a
            >
          </li>
          <li>
            <span class="mx-2 text-slate-300">/</span>
          </li>
          <li class={`${boolean.button2 ? "text-[rgb(32,82,149)] breadcrumb-item" : "text-white"}`}>
            <a
            onClick={()=>setBoolean({
                button1: false,
                button2: true,
                button3: false
            })}
              href="#projects"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >{!ES ?"Projects":"Proyectos"}</a
            >
          </li>
          <li>
            <span class="mx-2 text-slate-300">/</span>
          </li>
          <li class={`${boolean.button3 ? "text-[rgb(32,82,149)] breadcrumb-item" : "text-white"}`}>  <a
              onClick={()=>setBoolean({
                button1: false,
                button2: false,
                button3: true
            })}
              href="#competitions"
              onClickCapture={()=>setMostrarComponenteNuevo(true)}
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >{!ES ?"Competitions":"Competiciones"}</a
            ></li>
        </ol>
      </nav>
      </div>
    )
    }