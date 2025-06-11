"use client";

import Competitions from "./components/Competitions";
import ProjectsSection from "./components/ProjectsSection";
import { useState } from "react";
import Carta_de_Presentacion from "./components/Carta_de_presentacion";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";
import { useIsMobile } from "./utils/isMobile";

export default function Home() {
  const [ES, setESP] = useState(true);

  const labels = ES
    ? ["Sobre mí", "Proyectos", "Competencia"]
    : ["About Me", "Projects", "Skills"];

  const sections = [
    { ES: "Sobre Mi", EN: "About Me" },
    { ES: "Proyectos", EN: "Projects" },
    { ES: "Competencias", EN: "Competitions" },
  ];

  const [currentSections, setCurrentSections] = useState(0);

  function nextHandler() {
    setCurrentSections((prev) => (prev + 1) % sections.length);
  }

  function prevHandler() {
    setCurrentSections((prev) => (prev === 0 ? sections.length - 1 : prev - 1));
  }

  // Función para mostrar el texto basado en el idioma
  const getText = (index) => (ES ? sections[index].ES : sections[index].EN);

  return (
    <div>
      <Carta_de_Presentacion
        ES={ES}
        setESP={setESP}
      />{" "}
      <nav className="flex justify-center mt-14 mb-5">
        <div className="flex rounded-md overflow-hidden border border-[#354673] shadow-md backdrop-blur-sm">
          <button onClick={()=>setCurrentSections(0)} className={`px-3 sm:px-4 md:px-4 lg:px-4 py-2 sm:py-2 md:py-2 lg:py-2  text-sm font-semibold hover:bg-[#3546738f] ${currentSections===0 ? "bg-[#151d35]": "bg-transparent" } text-white`}>
            {labels[0]}
          </button>
          <button onClick={()=>setCurrentSections(1)} className={`px-3 sm:px-4 md:px-4 lg:px-4 py-2 sm:py-2 md:py-2 lg:py-2 text-sm font-semibold hover:bg-[#3546738f] ${currentSections===1 ? "bg-[#151d35]": "bg-transparent" } text-white`}>
            {labels[1]}
          </button>
          <button onClick={()=>setCurrentSections(2)} className={`px-3 sm:px-4 md:px-4 lg:px-4 py-2 sm:py-2 md:py-2 lg:py-2 text-sm font-semibold hover:bg-[#3546738f] ${currentSections===2 ? "bg-[#151d35]": "bg-transparent" } text-white`}>
            {labels[2]}
          </button>
        </div>
      </nav>
      <article className="flex  flex-col lg:flex-row items-center lg:items-start justify-around pb-16 mx-0 sm:mx-5 md:mx-10 lg:mx-14">
        <div className="flex w-36 sm:mt-10 md:mt-16 lg:mt-16 justify-center">
          <button
            className="flex px-2 sm:px-4 md:px-4 lg:px-4 py-1 sm:py-2 md:py-2 lg:py-2 text-justify gap-2 border rounded-sm hover:bg-[#3d529054] hover:underline items-center"
            onClick={prevHandler}
          >
            <BsArrowLeft />
            {currentSections !== 0
              ? getText(currentSections - 1)
              : getText(sections.length - 1)}
          </button>
        </div>

        <div
          className="flex flex-col justify-center max-w-3xl"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSections}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              {currentSections === 0 && <AboutMe ES={ES} />}
              {currentSections === 1 && <ProjectsSection ES={ES} />}
              {currentSections === 2 && <Competitions ES={ES} />}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex w-36 sm:mt-10 md:mt-16 lg:mt-16 justify-center">
          <button
            className="flex px-2 sm:px-4 md:px-4 lg:px-4 py-1 sm:py-2 md:py-2 lg:py-2 text-justify gap-2 border rounded-sm hover:bg-[#3d529054] hover:underline items-center"
            onClick={nextHandler}
          >
            {currentSections !== sections.length - 1
              ? getText(currentSections + 1)
              : getText(0)}
            <BsArrowRight />
          </button>
        </div>
      </article>
      <Footer ES={ES} />
    </div>
  );
}
