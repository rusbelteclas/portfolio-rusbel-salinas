import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const socialLinks = [
    { Icon: FaFacebook, href: "https://www.facebook.com/share/193GgohyxR/?mibextid=wwXIfr", color: "text-blue-600 hover:text-blue-800", label: "Facebook" },
    { Icon: FaInstagram, href: "https://instagram.com/soyrusbel_10", color: "text-pink-600 hover:text-pink-800", label: "Instagram" },
    { Icon: FaGithub, href: "https://github.com/rusbelteclas", color: "text-gray-800 hover:text-gray-600", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://linkedin.com/in/rusbel-salinas-4489882a9", color: "text-blue-700 hover:text-blue-900", label: "LinkedIn" },
    { Icon: FaWhatsapp, href: "https://wa.me/522213590270", color: "text-green-500 hover:text-green-700", label: "WhatsApp" }
];

const Contact = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [formStatus, setFormStatus] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const formRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );

        const section = document.getElementById('contact');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await emailjs.sendForm(
                'service_vj72kii',
                'template_jokt6gb',
                e.target,
                'sHWSgPmLbuz369nQd'
            );
            
            setFormStatus('success');
            setIsModalVisible(true);
            formRef.current.reset();
            
            setTimeout(() => {
                setFormStatus(null);
                setIsModalVisible(false);
            }, 4000);
        } catch (error) {
            setFormStatus('error');
            setIsModalVisible(true);
            
            setTimeout(() => {
                setFormStatus(null);
                setIsModalVisible(false);
            }, 4000);
        }
    };

    return (
        <section id='contacto' className="py-20 bg-white">
            <div className="container mx-auto px-6 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-8">
                        <div className="h-px w-24 bg-gray-300"></div>
                        <span className="px-4 py-2 bg-blue-500 text-white rounded-lg mx-4 text-sm font-semibold">
                            CONTACTO
                        </span>
                        <div className="h-px w-24 bg-gray-300"></div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        ¡Ponte en contacto conmigo!
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Estoy disponible para nuevos proyectos y colaboraciones. ¡Me encantaría escuchar tus ideas!
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                Conéctate conmigo
                            </h3>
                            <p className="text-gray-600 mb-6">
                                Sígueme en mis redes sociales para mantenerte actualizado sobre mis últimos proyectos.
                            </p>
                            
                            <div className="flex space-x-6">
                                {socialLinks.map(({ Icon, href, color, label }) => (
                                    <motion.a
                                        key={label}
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${color} transition-all duration-300`}
                                        whileHover={{ scale: 1.2, rotate: 5 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Icon size={28} />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <form 
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6 bg-white p-8 rounded-2xl shadow-xl"
                            aria-labelledby="contact-form"
                        >
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    placeholder="Ingresa tu nombre"
                                    aria-label="Nombre"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                                    Correo Electrónico
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    placeholder="Ingresa tu correo electrónico"
                                    aria-label="Correo Electrónico"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="message">
                                    Mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                    placeholder="Escribe tu mensaje aquí"
                                    aria-label="Mensaje"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full py-3 bg-gradient-to-r from-cyan-400 to-sky-500 hover:text-black text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
                                >
                                    Enviar Mensaje
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>

            <AnimatePresence>
                {isModalVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
                    >
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-lg w-80 max-w-full"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0 }}
                        >
                            {formStatus === 'success' ? (
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-green-500">¡Mensaje Enviado!</h3>
                                    <p className="text-gray-600">Gracias por ponerte en contacto, me comunicaré pronto contigo.</p>
                                </div>
                            ) : (
                                <div className="text-center">
                                    <h3 className="text-xl font-semibold text-red-500">Hubo un Error</h3>
                                    <p className="text-gray-600">Por favor, intenta nuevamente más tarde.</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Contact;
