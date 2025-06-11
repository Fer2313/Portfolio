"use client";
import React, { useState } from "react";
import Cards from "./Cards";
import CardsI from "./CardsI";

export default function ProjectsSection({ ES }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen1, setIsModalOpen1] = useState(false);
  return (
    <article className="flex flex-col p-10 gap-10">
      <section id="projects" className="flex flex-col text-center gap-6">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl text-white font-semibold">
          {!ES ? "Proyects" : "Proyectos"}
        </h1>
        <div className="flex justify-center">
          <Cards
            ES={ES}
            isModalOpen1={isModalOpen1}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          ></Cards>
        </div>
      </section>
    </article>
  );
}
