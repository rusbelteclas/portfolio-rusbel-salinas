import React, { useState } from 'react';
import { FaLaptopCode, FaMobileAlt, FaSearch } from 'react-icons/fa';
import { AiOutlineAppstoreAdd } from 'react-icons/ai';
import { motion } from 'framer-motion';

const Services = () => {
    const [hoveredService, setHoveredService] = useState(null);

    const services = [
        {
            icon: FaLaptopCode,
            title: 'Desarrollo Web',
            description: 'Soluciones web personalizadas que impulsan la presencia digital de tu negocio.',
            details: [
                'Diseño responsivo',
                'Desarrollo frontend y backend',
                'Integración de sistemas',
                'Experiencia de usuario optimizada'
            ]
        },
        {
            icon: AiOutlineAppstoreAdd,
            title: 'Landing Pages',
            description: 'Páginas de conversión diseñadas para maximizar tus tasas de captación y ventas.',
            details: [
                'Diseño de alta conversión',
                'Optimización de llamadas a la acción',
                'Diseño minimalista y atractivo',
                'Integración de herramientas de marketing'
            ]
        },
        {
            icon: FaSearch,
            title: 'Optimización SEO',
            description: 'Estrategias para mejorar tu visibilidad y ranking en motores de búsqueda.',
            details: [
                'Análisis de palabras clave',
                'Optimización técnica',
                'Mejora de contenido',
                'Seguimiento de rendimiento'
            ]
        },
        {
            icon: FaMobileAlt,
            title: 'Diseño Responsivo',
            description: 'Experiencias web fluidas y adaptables en todos los dispositivos y tamaños de pantalla.',
            details: [
                'Diseño móvil first',
                'Compatibilidad multiplataforma',
                'Tiempos de carga optimizados',
                'Interfaz adaptable'
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <section id='servicios' className="bg-gradient-to-b from-gray-50 to-gray-100 py-24">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Servicios</h2>
                    <p className="text-xl text-gray-600">
                        Soluciones digitales integrales diseñadas para impulsar el crecimiento de tu negocio.
                    </p>
                </div>

                <motion.div
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseEnter={() => setHoveredService(index)}
                            onMouseLeave={() => setHoveredService(null)}
                            className={`
                                bg-white 
                                rounded-2xl 
                                shadow-lg 
                                p-8 
                                transform 
                                transition-all 
                                duration-300
                                ${hoveredService === index
                                    ? 'scale-105 shadow-2xl bg-gradient-to-br from-blue-50 to-white'
                                    : 'hover:scale-105 hover:shadow-xl'}
                            `}
                            variants={itemVariants}
                        >
                            <div className="flex justify-center mb-6">
                                <service.icon
                                    className={`h-16 w-16 
                                        ${hoveredService === index
                                            ? 'text-blue-600'
                                            : 'text-gray-500'}
                                        transition-colors duration-300`}
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                                {service.title}
                            </h3>
                            <p className="text-center text-gray-600 mb-6">
                                {service.description}
                            </p>
                            {hoveredService === index && (
                                <motion.ul
                                    className="text-center text-gray-700 space-y-2"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {service.details.map((detail, idx) => (
                                        <li key={idx} className="text-sm">
                                            • {detail}
                                        </li>
                                    ))}
                                </motion.ul>
                            )}
                            <div className="text-center mt-6">
                                <a
                                    href="#contact"
                                    className={`
                                        px-6 py-3 
                                        rounded-full 
                                        font-semibold 
                                        transition-all 
                                        ${hoveredService === index
                                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                                            : 'text-blue-600 border border-blue-600 hover:bg-blue-50'}
                                    `}
                                >
                                    Contratar Servicio
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

export default Services;