"use client"
import AboutMe from "./components/AboutMe";
import BarraDI from "./components/BarraDI";
import Card from "./components/Card";
import Competitions from "./components/Competitions";
import Nav from "./components/Nav";
import ProjectsSection from "./components/ProjectsSection";
import { useState } from "react";

//palete ["#777d71", "#bbd48c", "#f8f6e6", "#e0ddc6", "#bef509"]
export default function Home() {
  const [mostrarComponenteNuevo, setMostrarComponenteNuevo] = useState(true);
  const [ES, setESP] = useState(false)
  return (
    <div>
      <div className="flex flex-col items-center p-10">
      <div className="flex w-full flex-row justify-between">
        <Card ES={ES}></Card>
        <Nav ES={ES} setMostrarComponenteNuevo={setMostrarComponenteNuevo}></Nav>       
        <BarraDI setESP={setESP}></BarraDI>
      </div>
      <AboutMe ES={ES}></AboutMe>
      <ProjectsSection ES={ES}></ProjectsSection>
      </div>
      <Competitions ES={ES} mostrarComponenteNuevo={mostrarComponenteNuevo} setMostrarComponenteNuevo={setMostrarComponenteNuevo}></Competitions>
    </div>
  )
}
