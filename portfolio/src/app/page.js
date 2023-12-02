"use client"

import Competitions from "./components/Competitions";
import ProjectsSection from "./components/ProjectsSection";
import { useState } from "react";
import Carta_de_Presentacion from "./components/Carta_de_presentacion";
import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";

//palete ["#777d71", "#bbd48c", "#f8f6e6", "#e0ddc6", "#bef509"]
export default function Home() {
  const [ES, setESP] = useState(false)
  return (
    <div>
      <Nav ES={ES}></Nav>
      <Carta_de_Presentacion ES={ES} setESP={setESP}></Carta_de_Presentacion>
      <div className="flex flex-col pt-10 gap-10">
      <AboutMe ES={ES}></AboutMe>
      <ProjectsSection ES={ES}></ProjectsSection>
      </div>
      <Competitions ES={ES}></Competitions>
      
    </div>
  )
}
