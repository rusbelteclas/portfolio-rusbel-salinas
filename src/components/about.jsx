import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaPython,
    FaNodeJs,
    FaGithub,
    FaGraduationCap,
    FaCalendarAlt,
} from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi";
import {
    SiTypescript,
    SiPhp,
    SiNextdotjs,
    SiTailwindcss,
    SiFigma,
    SiMongodb,
    SiMysql,
    SiVercel,
} from "react-icons/si";

const EducationSection = () => {
    const educationDetails = [
        {
            institution: "Universidad Tecnológica de Izúcar de Matamoros (UTIM)",
            degree: "Técnico Superior en Tecnologías de la Información Área Desarrollo de Software Multiplataforma.",
            period: "2021 - 2023",
            image: "/images/utim.webp",
            achievements: ["Fundamentos de programación", "Desarrollo web", "Bases de datos"],
        },
        {
            institution: "Universidad Tecnológica de Izúcar de Matamoros (UTIM)",
            degree: "Ingeniero en Desarrollo y Gestión de Software",
            period: "2024 - 2025",
            image: "/images/yoo.webp",
            achievements: ["Desarrollo móvil", "Arquitectura de software", "Gestión de proyectos"],
        },
    ];

    return (
        <motion.section
            className="mt-16 px-4 max-w-6xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex items-center justify-center gap-4 mb-16">
                <HiAcademicCap className="text-4xl sm:text-5xl text-blue-600" />
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800">
                    Mi Trayectoria Académica
                </h2>
            </div>

            <div className="space-y-12">
                {educationDetails.map((edu, index) => (
                    <motion.article
                        key={index}
                        className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                        <img
                            src={edu.image}
                            alt={edu.institution}
                            className="w-full md:w-1/3 rounded-lg shadow-md"
                            loading="lazy"
                        />
                        <div className="w-full md:w-2/3">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                                    <FaGraduationCap className="text-2xl text-white" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <FaCalendarAlt />
                                        <span className="text-lg font-medium">{edu.period}</span>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold text-gray-800 mb-3">
                                {edu.institution}
                            </h3>

                            <p className="text-lg font-semibold text-gray-700 mb-4">
                                {edu.degree}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {edu.achievements.map((achievement, i) => (
                                    <span
                                        key={i}
                                        className="px-3 py-1 bg-blue-50 text-blue-800 rounded-full text-sm"
                                    >
                                        {achievement}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </motion.section>
    );
};

const TechnologiesSection = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const techCategories = {
        frontend: {
            title: "Frontend",
            technologies: [
                { Icon: FaHtml5, name: "HTML5", color: "#E34F26" },
                { Icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
                { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
                { Icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
                { Icon: FaReact, name: "React", color: "#61DAFB" },
                { Icon: SiNextdotjs, name: "Next.js", color: "#000000" },
                { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
            ],
        },
        backend: {
            title: "Backend",
            technologies: [
                { Icon: FaNodeJs, name: "Node.js", color: "#339933" },
                { Icon: SiPhp, name: "PHP", color: "#0175C2" },
                { Icon: FaPython, name: "Python", color: "#3776AB" },
            ],
        },
        databases: {
            title: "Bases de Datos",
            technologies: [
                { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
                { Icon: SiMysql, name: "MySQL", color: "#00758F" },
            ],
        },
        tools: {
            title: "Herramientas",
            technologies: [
                { Icon: FaGitAlt, name: "Git", color: "#F05032" },
                { Icon: FaGithub, name: "GitHub", color: "#000000" },
                { Icon: SiFigma, name: "Figma", color: "#F24E1E" },
                { Icon: SiVercel, name: "Vercel", color: "#000000" },
            ],
        },
    };

    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-10">
                    Tecnologías
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {Object.entries(techCategories).map(([key, category]) => (
                        <button
                            key={key}
                            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                                selectedCategory === key
                                    ? "bg-blue-600 text-white"
                                    : "bg-white text-gray-800 hover:bg-blue-50"
                            } shadow-sm`}
                            onClick={() =>
                                setSelectedCategory(key === selectedCategory ? null : key)
                            }
                        >
                            {category.title}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                    {Object.entries(techCategories).map(
                        ([key, category]) =>
                            (!selectedCategory || selectedCategory === key) &&
                            category.technologies.map((tech) => (
                                <motion.div
                                    key={tech.name}
                                    className="p-4 rounded-lg bg-white text-center shadow-md hover:shadow-lg border border-gray-100"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <tech.Icon
                                        className="text-5xl mb-4 mx-auto"
                                        style={{ color: tech.color }}
                                        aria-hidden="true"
                                    />
                                    <p className="text-sm font-medium text-gray-700">{tech.name}</p>
                                </motion.div>
                            ))
                    )}
                </div>
            </div>
        </section>
    );
};

const About = () => (
    <div className="bg-white min-h-screen py-16 px-4">
        <EducationSection />
        <TechnologiesSection />
    </div>
);

export default About;