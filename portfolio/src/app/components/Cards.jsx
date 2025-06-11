import Image from "next/image";
import React, { useState } from "react";
import { projects } from "./info/Projects";
import { AiFillPlayCircle } from "react-icons/ai";
import ReactPlayer from "react-player/youtube";
import "./Modal.css";
import Modal from "./Modal";
import { BsGithub } from "react-icons/bs";
import { useSpring, animated } from "@react-spring/web";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaStripe } from "react-icons/fa";
import { SiPostgresql } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { SiMercadopago } from "react-icons/si";
import { LiaCookieSolid } from "react-icons/lia";
import { FaWordpress } from "react-icons/fa";

export default function Cards({
  isModalOpen1,
  ES,
  isModalOpen,
  setIsModalOpen,
}) {
  const tecnologies = {
    Pet_Bridge: [
      SiNextdotjs,
      SiRedux,
      SiTypescript,
      FaNode,
      SiTailwindcss,
      FaStripe,
      SiPostgresql,
      SiSequelize,
    ],
    Countries_App: [FaReact, SiRedux, SiExpress, SiPostgresql, SiSequelize],
    Your_Best_Self: [
      FaAngular,
      SiTypescript,
      SiTailwindcss,
      SiExpress,
      SiMysql,
      FaNode,
      SiJsonwebtokens,
    ],
    Tienda_Nube_App: [
      SiNextdotjs,
      SiTypescript,
      SiChakraui,
      SiTailwindcss,
      SiExpress,
      SiSequelize,
      SiMercadopago,
      LiaCookieSolid,
      SiMysql,
    ],
    Informatic_Web: [FaWordpress],
  };
  const [current, setCurrent] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const openModal = (index) => {
    setCurrent(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex justify-center flex-wrap gap-5">
      {projects.map((p, index) => {
        const springStyles = useSpring({
          transform:
            hoveredIndex === index ? "translateY(-10px)" : "translateY(0px)",
          config: { tension: 300, friction: 15 },
        });

        return (
          <article>
            <animated.div
              style={springStyles}
              id={p.nombre}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-col justify-between max-w-xs h-full bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <section>
                {!isModalOpen1 && (
                  <button
                    onClick={() => openModal(index)}
                    className="flex justify-center items-center hover:brightness-50 relative"
                  >
                    <Image
                      className="rounded-t-md"
                      src={p.imagen}
                      alt={p.nombre}
                    />
                    <AiFillPlayCircle size={40} className="absolute" />
                  </button>
                )}

                <div className="px-5 pt-5">
                  <h5 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900">
                    {p.nombre}
                  </h5>
                  <p className="mb-3 text-xs sm:text-sm md:text-base font-normal text-slate-700">
                    {!ES ? p.encabezadoI : p.encabezadoE}
                  </p>
                </div>
              </section>
              <span className="text-black flex flex-wrap justify-center px-5 pb-5 gap-2">
                {tecnologies[p.nombre.replace(/ /g, "_")]?.map(
                  (Tecno, index) => (
                    <Tecno key={index} size={20}></Tecno>
                  )
                )}
              </span>
            </animated.div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
              <article>
                <h2 className="text-2xl">{projects[current].nombre}</h2>
                <div className="w-full max-w-3xl mx-auto relative pt-[56.25%] mt-2">
                  <ReactPlayer
                    style={{ position: "absolute", top: 0, left: 0 }}
                    height="100%"
                    width="100%"
                    url={projects[current].video}
                  />
                </div>
                <p className="m-2 text-xs sm:text-sm md:text-base lg:text-base">
                  {!ES
                    ? projects[current].detalleI
                    : projects[current].detalleE}
                </p>
                    <div>
                      <h2 className="text-2xl">
                        {ES ? "Tecnologias utilizadas" : "Technologies used"}
                      </h2>
                      <span className="text-white flex flex-wrap justify-center p-2 gap-2">
                        {tecnologies[projects[current].nombre.replace(/ /g, "_")]?.map(
                          (Tecno, index) => (
                            <Tecno key={index} size={28}></Tecno>
                          )
                        )}
                      </span>
                    </div>
                <div className="flex">
                  <a
                    href={projects[current].deployd}
                    className="py-1 px-3 bg-sky-700 rounded hover:bg-[#144272]"
                    target="_blank"
                  >
                    Deployd
                  </a>
                  {projects[current].Github && (
                    <a
                      href={projects[current].Github}
                      className="flex items-center ml-3"
                      target="_blank"
                    >
                      <BsGithub size={25} />
                    </a>
                  )}
                </div>
              </article>
            </Modal>
          </article>
        );
      })}
    </div>
  );
}
/*<video class="w-full shadow-lg" autoplay loop controls muted>
  <source
    src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4"
    type="video/mp4" />
</video>*/
