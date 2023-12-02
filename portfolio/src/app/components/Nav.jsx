'use client'
import React from 'react'
 export default function Nav({ES}) {
    return (
      <div className='flex justify-center'>
        <nav class="breadcrumb flex px-3 py-2 rounded-md mt-2 fixed bg-[#354673c5] items-center">
        <ol class="breadcrumb list-reset flex">
          <li class="text-white">
            <a
              href="#about"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >{!ES ?"About me":"Sobre mi"}</a
            >
          </li>
          <li>
            <span class="mx-2 text-slate-300">/</span>
          </li>
          <li class="text-white">
            <a
              href="#projects"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >{!ES ?"Projects":"Proyectos"}</a
            >
          </li>
          <li>
            <span class="mx-2 text-slate-300">/</span>
          </li>
          <li class="text-white">  <a
              href="#competitions"
              class="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >{!ES ?"Competitions":"Competiciones"}</a
            ></li>
        </ol>
      </nav>
      </div>
    )
    }