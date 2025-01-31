import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="acerca">
      <motion.section
        className="bg-white min-h-screen py-8 px-4 sm:py-16 sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-4 mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black">
            Sobre mí
          </h2>
        </div>

        <div className="max-w-3xl sm:max-w-4xl mx-auto">
          <p className="text-base sm:text-lg text-black mb-4 sm:mb-6">
            Soy un Ingeniero en Tecnologías de la Información con especialidad en Desarrollo y Gestión de Software. Me apasiona crear soluciones tecnológicas que mejoren la vida de las personas, combinando creatividad y conocimientos técnicos.
          </p>
          <p className="text-base sm:text-lg text-black mb-4 sm:mb-6">
            Mi enfoque está en la innovación constante y el aprendizaje continuo, adaptándome a nuevas tecnologías y metodologías. A lo largo de mi carrera, he trabajado con herramientas como React, Next.js, Firebase y Node.js, y me gusta enfrentar desafíos técnicos que requieren pensamiento crítico y resolución de problemas.
          </p>
          <p className="text-base sm:text-lg text-black mb-4 sm:mb-6">
            Me encanta colaborar en equipo y participar en proyectos que tengan un impacto real en la sociedad, buscando siempre mejorar la productividad y eficiencia en las aplicaciones que desarrollo.
          </p>
          <p className="text-base sm:text-lg text-black">
            En mi tiempo libre, disfruto explorar nuevas tecnologías, compartir mis conocimientos con la comunidad de desarrollo y mantenerme al tanto de las tendencias del mundo tech.
          </p>
        </div>
      </motion.section>
    </section>
  );
};

export default AboutMe;
