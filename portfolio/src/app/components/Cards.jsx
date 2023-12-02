import Image from 'next/image'
import React from 'react'
import { projects } from './info/Projects'
import { AiFillPlayCircle } from 'react-icons/ai'
import { useSpring, animated } from 'react-spring';
import ReactPlayer from 'react-player/youtube'
import "./Modal.css"
import Modal from './Modal'
import { BsGithub } from 'react-icons/bs'
export default function Cards({isModalOpen1,ES,isModalOpen, setIsModalOpen}) {
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  console.log(isModalOpen)
  return (
    <div className='flex justify-center w-64'>
        {
          projects.map((p, index) => (
            <div key={index} className="w-64 h-56 bg-[#c6dcfc] pb-2 rounded-md">
              {!isModalOpen1?<button onClick={openModal} className='flex justify-center items-center hover:brightness-50'>
                <Image className='rounded-t-md ' src={p.imagen} width={400} height={200} alt={p.nombre}>
                </Image>
                <AiFillPlayCircle size={40} className='absolute'></AiFillPlayCircle>
              </button>:null}
              <div className='mt-1 mx-5 mb-5 text-black'>
                <h1>{p.nombre}</h1>
                <h2 style={{ fontSize:"12px"}}>{!ES?p.encabezadoI:p.encabezadoE}</h2>
              </div>
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>{p.nombre}</h2>
                <div className='flex justify-center mt-1'>
                <ReactPlayer url={p.video} />
                </div>
                <p className='m-2 text-sm'>{!ES?p.detalleI:p.detalleE}</p>
                <div className='flex'>
                  <a href={p.deployd} className="py-1 px-3 bg-sky-700 rounded hover:bg-[#144272]" target="_blank">Deployd</a>
                  <a href={p.Github} className="flex items-center ml-3" target="_blank"><BsGithub size={25} /></a>
                </div>
              </Modal>
            </div>
          ))
        }
    </div>
  )
}
/*<video class="w-full shadow-lg" autoplay loop controls muted>
  <source
    src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
    type="video/mp4" />
</video>*/