"use client";
import React from "react";

export default function Competitions({ES}) {
  return (
    <article id="competitions" className="flex flex-col bg-[#242A42] p-5 gap-10">
      <section className="flex justify-between mx-20">
        <div className="flex flex-col gap-5">
          <span>
            <h3 className="text-lg font-bold">{!ES ?"Education":"Educación"}</h3>
            <h3 className="text-[#CCDDF1]">{!ES ?"Secondary":"Secundario"}</h3>
            <h4 className="text-sm">Ipem N° 37 Cnel. Hilario Ascasubi.</h4>
            <p className="text-xs w-72">
            {!ES ?"Certificate in Business Administration. Finish date":"Certificado en Administración de Empresas. Fecha de finalización"} 10/12/21.
            </p>
          </span>
          <span>
            <h3 className="text-[#CCDDF1]">Superior</h3>
            <h4 className="text-sm">Bootcamp Soy Henry.</h4>
            <p className="text-xs w-60">
            {!ES ?"Certified in Full Stack Developer. Finish date":"Certificado en Full Stack Developer. Fecha de finalización"} 1/7/23
            </p>
            <a href='https://certificates.soyhenry.com/new-cert?id=f475681bc6eb140e244bcd4b1fde476adc1569581701a0ab4de91aa1ac809022' target="_blank" className="bg-[#354673] hover:bg-[#303e66] text-xs py-1 px-2 rounded">{!ES ?"Certificate":"Certificado"}</a>
          </span>
        </div>
        <span>
          <h3 className="text-lg font-bold text-end">{!ES ?"Skills":"Habilidades"}</h3>
          <div className="flex flex-col text-xs font-semibold ">
            <ul className="flex flex-col items-end gap-1">
              <li>{!ES ?"Technical":"Tecnico"}</li>
              <li>{!ES ?"Collaborative":"Colaborativo"}</li>
              <li>{!ES ?"Autodidact":"Autodidacta"}</li>
              <li>{!ES ?"Proactive":"Proactivo"}</li>
              <li>Scrum</li>
              <li>{!ES ?"Dedicated":"Dedicado"}</li>
              <li>{!ES ?"Autonomous":"Autonomo"}</li>
              <li>{!ES ?"Creative":"Creativo"}</li>
              <li>{!ES ?"Basic english":"Ingles basico"}</li>
            </ul>
          </div>
        </span>
      </section>
      <section className="flex flex-col items-center gap-1">
        <h3 className="text-lg text-center font-bold">{!ES ?"Goals and objectives":"Metas y objetivos"}</h3>
        <p className="text-start mx-28 ">
        {!ES ?"My goal as a programmer is to create the best websites interactive, functional and attractive for the user and follow learning in this process.":"Mi objetivo como programador es crear los mejores sitios web interactivos, funcionales y atractivos para el usuario y seguir aprendiendo en este proceso."}
        </p>
      </section>
    </article>
  );
}
/*   <div className='flex flex-col w-full items-center rounded bg-[#242A42]'>
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
                </div>
            </div>  */
