// footer.jsx

import React from "react";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa"; // Importando los iconos

const Footer = () => {
    return (
        <footer className="bg-white text-black text-center py-12 mt-20">
            <div className="container mx-auto px-6">
                <p className="text-lg font-semibold mb-2">
                    &copy; 2025 Rusbel Salinas. Todos los derechos reservados.
                </p>
                <p className="text-sm mb-6">
                    Soluciones: | Desarrollo Web | Desarrollo Móvil
                </p>

                <div className="flex justify-center space-x-8 flex-wrap mb-6">
                    {/* Iconos de redes sociales */}
                    <a
                        href="https://www.facebook.com/share/193GgohyxR/?mibextid=wwXIfr"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                        aria-label="Facebook"
                    >
                        <FaFacebook size={30} />
                    </a>
                    <a
                        href="https://instagram.com/soyrusbel_10"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
                        aria-label="Instagram"
                    >
                        <FaInstagram size={30} />
                    </a>
                    <a
                        href="https://github.com/rusbelteclas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black hover:text-black-400 transition-all duration-300 transform hover:scale-110"
                        aria-label="GitHub"
                    >
                        <FaGithub size={30} />
                    </a>
                    <a
                        href="https://linkedin.com/in/rusbel-salinas-4489882a9"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-700 hover:text-blue-700 transition-all duration-300 transform hover:scale-110"
                        aria-label="LinkedIn"
                    >
                        <FaLinkedin size={30} />
                    </a>
                    <a
                        href="https://wa.me/522213590270"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-500 hover:text-green-500 transition-all duration-300 transform hover:scale-110"
                        aria-label="WhatsApp"
                    >
                        <FaWhatsapp size={30} />
                    </a>
                </div>

                <div className="text-sm text-gray-400 mt-8">
                    <p>Powered by Rusbel Salinas</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
