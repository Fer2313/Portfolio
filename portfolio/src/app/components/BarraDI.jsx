'use client'
import React, { useState } from 'react'

export default function BarraDI({setESP}) {
  const [boolean, setBoolean] = useState({
    button1: true,
    button2: false
  })
  return (
    <nav>
      <div
        class="inline-flex rounded-md shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        role="group">
        <button
          type="button"
          onClick={()=>setBoolean({
            button1: true,
            button2: false
          })}
          onClickCapture={()=>setESP(false)}
          class={`${boolean.button1 ? 'bg-[#144272]' : "bg-[#2C74B3]"} inline-block rounded-l px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#144272] focus:bg-[#144272] focus:outline-none focus:ring-0 active:bg-[#144272]`}
          data-te-ripple-init
          data-te-ripple-color="light">
          English
        </button>
        <button
          type="button"
          onClick={()=>setBoolean({
            button1: false,
            button2: true
          })}
          onClickCapture={()=>setESP(true)}
          class={`inline-block rounded-r-md ${boolean.button2 ? 'bg-[#144272]' : "bg-[#2C74B3]"} px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-[#144272] focus:bg-[#144272] focus:outline-none focus:ring-0 active:bg-[#144272]`}
          data-te-ripple-init
          data-te-ripple-color="light">
          Español
        </button>
      </div>
    </nav>
  )
}
