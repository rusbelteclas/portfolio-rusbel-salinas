import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaHtml5, FaLink, FaNodeJs, FaReact } from "react-icons/fa";
import { SiMongodb, SiFirebase, SiArduino, SiMysql, SiJavascript, SiBootstrap, SiPhp } from "react-icons/si";
import { AiOutlineLink, AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";

const technologyIcons = {
    Html: { icon: <FaHtml5 className="text-xl" />, color: "text-red-500", bg: "bg-red-50" },
    NodeJs: { icon: <FaNodeJs className="text-xl" />, color: "text-green-500", bg: "bg-green-50" },
    MongoDB: { icon: <SiMongodb className="text-xl" />, color: "text-green-600", bg: "bg-green-50" },
    Arduino: { icon: <SiArduino className="text-xl" />, color: "text-orange-500", bg: "bg-orange-50" },
    "Expo React Native": { icon: <FaReact className="text-xl" />, color: "text-blue-500", bg: "bg-blue-50" },
    Firebase: { icon: <SiFirebase className="text-xl" />, color: "text-yellow-500", bg: "bg-yellow-50" },
    Mysql: { icon: <SiMysql className="text-xl" />, color: "text-blue-500", bg: "bg-blue-50" },
    JavaScript: { icon: <SiJavascript className="text-xl" />, color: "text-yellow-400", bg: "bg-yellow-50" },
    Bootstrap: { icon: <SiBootstrap className="text-xl" />, color: "text-indigo-500", bg: "bg-indigo-50" },
    PHP: { icon: <SiPhp className="text-xl" />, color: "text-blue-500", bg: "bg-indigo-50" },
};

const projects = [
    {
        title: "SACI",
        category: "Móvil",
        link: "https://github.com/MaraGarciaAldama/SACI",
        projectLink: "https://localhost:3000/",
        description: "Sistema Automatizado para Cultivos Invernaderos",
        technologies: ["Html", "JavaScript", "NodeJs", "MongoDB", "Arduino", "Bootstrap"],
        image: "/images/SACI.webp",
        fullDescription: "Sistema automatizado para cultivos invernaderos, con tecnologías como Node.js, MongoDB y Arduino.",
        additionalTechnologies: ["C#", "JwtBearer", "MySQL"],
        features: [
            "Monitoreo en tiempo real de condiciones ambientales",
            "Control automatizado de sistemas de riego",
            "Dashboard para visualización de datos",
            "Alertas y notificaciones configurables",
        ],
    },
    {
        title: "Capsule Care",
        category: "Móvil",
        link: "https://github.com/rusbelteclas/Capsule-care",
        projectLink: "https://capsule-care-demo.vercel.app/",
        description: "Gestión de Medicamentos",
        technologies: ["Expo React Native", "Firebase", "Mysql"],
        image: "/images/CC.webp",
        fullDescription: "Capsule permite gestionar los horarios de medicación de manera eficiente y precisa.",
        additionalTechnologies: ["C#", "JwtBearer", "MySQL"],
        features: [
            "Gestión de Medicamentos: Agrega, edita y elimina medicamentos.",
            "Recordatorios Automáticos: Alertas para tomar medicamentos.",
            "Historial de Medicación: Registro de medicaciones pasadas.",
            "Interfaz Fácil de Usar: Navegación intuitiva.",
        ],
    },
    {
        title: "Sistema Control Escolar",
        category: "Web",
        link: "https://github.com/rusbelteclas/control-escolar",
        projectLink: "https://control-escolar-demo.vercel.app/",
        description: "Control Escolar",
        technologies: ["PHP", "Mysql", "Html", "JavaScript"],
        image: "/images/sistema.webp",
        fullDescription: "Un sistema para gestionar la asistencia, calificaciones y datos de estudiantes en un entorno educativo",
        additionalTechnologies: ["C#", "JwtBearer", "MySQL"],
        features: [
            "Gestión de Estudiantes: Agregar, editar y eliminar estudiantes.",
            "Control de Asistencia: Marcar asistencia diaria.",
            "Gestión de Calificaciones: Registrar y modificar calificaciones.",
            "Interfaz Intuitiva: Panel fácil de usar para administradores.",
        ],
    },
];

const ProjectCard = ({ project, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="group relative bg-white rounded-lg overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-300"
    >
        <div className="relative h-48 overflow-hidden">
            <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
            />
        </div>

        <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                    {project.category}
                </span>
            </div>

            <p className="text-gray-600 text-sm line-clamp-2">{project.description}</p>

            <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                    <motion.div
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className={`p-2 rounded-md ${technologyIcons[tech].bg}`}
                        title={tech}
                    >
                        <div className={technologyIcons[tech].color}>
                            {technologyIcons[tech].icon}
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="flex gap-3 pt-4">
                <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-700 px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <FaGithub className="text-lg" />
                    <span>Código</span>
                </motion.a>
                <motion.button
                    onClick={onClick}
                    className="flex-1 bg-gray-900 hover:bg-gray-700 text-white px-4 py-2 rounded-md flex items-center justify-center gap-2 transition-colors text-sm"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    <AiOutlineLink className="text-lg" />
                    <span>Detalles</span>
                </motion.button>
            </div>
        </div>
    </motion.div>
);

const ProjectModal = ({ project, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-lg w-full max-w-2xl relative"
            onClick={(e) => e.stopPropagation()}
        >
            <motion.button
                className="absolute right-4 top-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                onClick={onClose}
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.2 }}
            >
                <AiOutlineClose size={20} />
            </motion.button>

            <div className="p-6 space-y-6">
                <div className="flex items-center gap-3">
                    <h3 className="text-2xl font-semibold text-gray-900">{project.title}</h3>
                    <span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm font-medium rounded-full">
                        {project.category}
                    </span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">{project.fullDescription}</p>

                <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Características Principales
                    </h4>
                    <ul className="space-y-2">
                        {project.features.map((feature, idx) => (
                            <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="flex items-center gap-2 text-gray-600 text-sm"
                            >
                                <AiOutlineArrowRight className="text-blue-500 flex-shrink-0" />
                                <span>{feature}</span>
                            </motion.li>
                        ))}
                    </ul>
                </div>

                <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                        Tecnologías
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                            <motion.span
                                key={tech}
                                className={`px-3 py-1 rounded-md flex items-center gap-2 ${technologyIcons[tech].bg} ${technologyIcons[tech].color} text-sm`}
                                whileHover={{ scale: 1.05 }}
                            >
                                {technologyIcons[tech].icon}
                                <span>{tech}</span>
                            </motion.span>
                        ))}
                    </div>
                </div>

                {project.title !== "SACI" && (
                    <motion.a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-900 hover:bg-gray-700 text-white py-2 px-4 rounded-md text-center text-sm transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <div className="flex items-center justify-center gap-2">
                            <FaLink className="text-lg" />
                            <span>Ver Proyecto</span>
                        </div>
                    </motion.a>
                )}
            </div>
        </motion.div>
    </motion.div>
);

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter] = useState("todos");

    const filteredProjects = filter === "todos" ? projects : projects.filter((p) => p.category.toLowerCase() === filter);

    return (
        <section id="proyectos" className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">Mis Proyectos</h2>
                    <p className="text-gray-600 max-w-xl mx-auto text-sm">
                        Una muestra de mis proyectos más relevantes y tecnologías utilizadas.
                    </p>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                <AnimatePresence>
                    {selectedProject && (
                        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;