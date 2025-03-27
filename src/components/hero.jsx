import React, { useState, useEffect } from 'react';
import { FaGithub, FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import ReactTypingEffect from 'react-typing-effect';
import { motion, useAnimation } from 'framer-motion';

// Datos de enlaces sociales
const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com/abass-dev' },
  { Icon: FaFacebook, href: 'https://www.facebook.com/share/193GgohyxR' },
  { Icon: FaWhatsapp, href: 'https://wa.me/522213590270' },
  { Icon: FaLinkedin, href: 'https://linkedin.com/in/rusbel-salinas-4489882a9' },
];

const ProfileCard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (scrolled) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: -20 });
    }
  }, [scrolled, controls]);

  return (
    <section id='inicio'>
    <div className="font-sans bg-gray-50">
      {/* Overlay para el menú móvil */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent">
                RS
              </span>
            </div>

            {/* Botón del menú móvil */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 flex items-center justify-center z-50"
                aria-label="Menu"
              >
                <div className="flex flex-col justify-between w-6 h-5 transform transition-all duration-300">
                  <span
                    className={`h-0.5 w-full bg-black transform transition-all duration-300 ${
                      isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                    }`}
                  ></span>
                  <span
                    className={`h-0.5 w-full bg-black transition-all duration-300 ${
                      isMenuOpen ? 'opacity-0' : ''
                    }`}
                  ></span>
                  <span
                    className={`h-0.5 w-full bg-black transform transition-all duration-300 ${
                      isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''
                    }`}
                  ></span>
                </div>
              </button>
            </div>

            {/* Navegación de escritorio */}
            <div className="hidden md:flex md:items-center md:space-x-8">
              {['Inicio', 'Acerca', 'Proyectos', 'Servicios', 'Contacto'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-gray-500 px-3 py-2 text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 relative group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    {item}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </motion.div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Menú móvil */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 text-3xl"
              aria-label="Close Menu"
            >
              &times;
            </button>
          </div>

          <div className="flex flex-col pt-20 px-4">
            {['Inicio', 'Acerca', 'Proyectos', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="py-3 text-base font-medium text-gray-700 hover:text-black border-b border-gray-100 transition-all duration-300 transform hover:scale-105 active:scale-95"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sección de perfil */}
      <div className="min-h-screen pt-16 px-4 flex items-center bg-gradient-to-r from-cyan-50 to-sky-50">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen de perfil y enlaces sociales */}
            <div className="space-y-8 flex flex-col items-center md:items-start">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative rounded-full overflow-hidden h-64 w-64 border-4 border-white">
                  <img
                    src="/images/yo.webp"
                    alt="Rusbel Salinas"
                    className="object-cover w-full h-full transform group-hover:scale-110 transition duration-500"
                  />
                </div>
              </motion.div>

              {/* Enlaces sociales */}
              <motion.div
                className="flex gap-4"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {socialLinks.map(({ Icon, href }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
                    aria-label={href}
                  >
                    <Icon className="h-6 w-6 text-gray-700 hover:text-cyan-400" />
                  </a>
                ))}
              </motion.div>
            </div>

            {/* Contenido */}
            <motion.div
              className="space-y-6 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-xl text-gray-600">Hola 👋, yo soy</h2>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800">Rusbel Salinas</h1>
              <ReactTypingEffect
                text={['Desarrollador Web.']}
                speed={100}
                eraseSpeed={100}
                typingDelay={1000}
                eraseDelay={2000}
                className="text-3xl md:text-4xl font-semibold text-gray-800"
              />
              <p className="text-lg text-gray-600 leading-relaxed">
                Ingeniero en Desarrollo y Gestión de Software, egresado de la Universidad Tecnológica de Izúcar de Matamoros (UTIM).
              </p>

              <div className="flex items-center gap-2 justify-center md:justify-start text-gray-600">
                <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Disponible para nuevos proyectos
              </div>

              <div className="flex justify-center md:justify-start">
                <a
                  href="/images/CV_Rusbel_Salinas.pdf"
                  download
                  className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-500 hover:to-sky-600 text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Descargar mi CV
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ProfileCard;