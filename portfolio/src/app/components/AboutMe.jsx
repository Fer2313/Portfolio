import React from "react";
import Image from "next/image";
import Avatar from "../imagenes/Imagen de WhatsApp 2023-06-26 a las 16.25.38.jpg";

export default function AboutMe({ ES }) {
  return (
    <article>
      <section className="flex flex-col text-start gap-2 m-10">
        <div id="about" className="flex flex-col gap-5">
          <div className="flex flex-col gap-3 justify-center items-center">
            <Image className="w-32 rounded-full" src={Avatar} alt="Avatar"></Image>
            <h3 class="text-base sm:text-xl md:text-2xl lg:text-2xl text-center font-bold">{ES?"Desarrollador Full Stack Web React, Angular, Node.js y Diseñador de sitios con WordPress":"Full Stack Web Developer React, Angular, Node.js and WordPress Site Designer"}</h3>
          </div>
          <div className="flex flex-col items-start">
            <h3 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold">
              {!ES ? "About me:" : "Sobre mi"}
            </h3>
            <h5 className="text-xs sm:text-base md:text-lg lg:text-lg">
              {!ES
                ? "My interest in programming started after I graduated from college. and since then I found that this was a perfect fit for my passion for design and logic. During my career as a developer I have acquired Full Stack skills, putting them to the test in challenging projects."
                : "Mi interés por la programación comenzó después de graduarme del colegio. y desde entonces descubrí que esto encajaba perfectamente con mi pasión por el diseño y la lógica. Durante mi carrera como desarrollador he adquirido habilidades Full Stack, poniéndolas a prueba en proyectos desafiantes."}
            </h5>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-base sm:text-lg md:text-xl lg:text-xl font-bold">
              {!ES ? "What do I contribute?" : "Que aporto"}
            </h4>
            <h5 className="text-xs sm:text-base md:text-lg lg:text-lg">
              {!ES
                ? "In this community where everyone is growing and having more and more knowledge, I identify a lot as being self-taught and although it is certainly difficult, I put a lot of dedication to my objectives and goals, and to be honest I do not intend to stop I want to continue learning and always help whoever I need it, since that is my greatest motivation for my growth."
                : "En esta comunidad que cada uno va creciendo y teniendo cada vez más conocimiento, me identifico mucho siendo autodidacta y aunque ciertamente es difícil, le pongo mucha dedicación a mis objetivos y metas, y siendo sincero no pretendo parar quiero seguir aprendiendo e ayudar siempre a quien lo necesite, ya que esa es mi mayor motivación para mi crecimiento."}
            </h5>
          </div>
        </div>
      </section>
    </article>
  );
}
