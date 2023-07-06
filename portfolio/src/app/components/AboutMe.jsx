import React from 'react'

export default function AboutMe({ES}) {
    return (
        <div  className='flex flex-col text-center mt-56 gap-2 w-2/3'>
            <h1 className='text-4xl'>{!ES?"Hi! 👋,":"Hola! 👋,"}</h1>
            <div className='flex gap-2 justify-center'>
                <h2 className='text-3xl'>{!ES?"My name is":"Me llamo"}</h2>
                <h2 className='text-3xl font-semibold text-[#64ccc5]'>Fernando</h2></div>
            <h5 className='text-lg text-[#96dfa5]'>
                {!ES?"A self-taught Full Stack developer with a passion for creating amazing web experiences, My main focus has been in the Front-End realm, where I feel most comfortable and can express my creativity...":"Un desarrollador Full Stack autodidacta apasionado por crear experiencias web increíbles. Mi enfoque principal ha sido en el ámbito Front-End, donde me siento más cómodo y puedo expresar mi creatividad..."}
            </h5>
            <div id='about' className='flex flex-col gap-2 items-center mt-80'>
            <h3 className='text-3xl font-bold text-[#92b9e7]'>{!ES?"About me:":"Sobre mi"}</h3>
            <h5>{!ES?"My interest in programming started after I graduated from college. and since then I found that this was a perfect fit for my passion for design and logic. During my career as a developer I have acquired Full Stack skills, putting them to the test in challenging projects.":" Mi interés por la programación comenzó después de graduarme del colegio. y desde entonces descubrí que esto encajaba perfectamente con mi pasión por el diseño y la lógica. Durante mi carrera como desarrollador he adquirido habilidades Full Stack, poniéndolas a prueba en proyectos desafiantes."}</h5>
                <h4 className='text-lg font-semibold text-[#3277c5]'>{!ES?"What do I contribute?":"Que aporto"}</h4>
            <h5>
                {!ES?"In this community where everyone is growing and having more and more knowledge, I identify a lot as being self-taught and although it is certainly difficult, I put a lot of dedication to my objectives and goals, and to be honest I do not intend to stop I want to continue learning and always help whoever I need it, since that is my greatest motivation for my growth.":"En esta comunidad que cada uno va creciendo y teniendo cada vez más conocimiento, me identifico mucho siendo autodidacta y aunque ciertamente es difícil, le pongo mucha dedicación a mis objetivos y metas, y siendo sincero no pretendo parar quiero seguir aprendiendo e ayudar siempre a quien lo necesite, ya que esa es mi mayor motivación para mi crecimiento."}</h5>
                <h4 className='text-lg font-semibold text-[#3277c5]'>{!ES?"Experience":"Experiecia"}</h4>
            <h5>
            {!ES?"My experience as a programmer is at least 8 months, I started with Html, Css and JavaScript websites which (it took me around 5 months to learn these languages and their usage in depth) then I continued with more professional projects using new technologies and learning in the process.":"Mi experiencia como programador es de al menos 8 meses, comencé con sitios web Html, Css y JavaScript lo que (me llevó alrededor de 5 meses aprender estos lenguajes y su uso en profundidad) luego continué con proyectos más profesionales usando nuevas tecnologías y aprendiendiendo en el proceso."}</h5>
                </div>
        </div>
    )
}
