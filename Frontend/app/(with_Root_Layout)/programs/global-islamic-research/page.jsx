'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalIslamicResearch() {
    const projects = [
        {
            title: "Infant Urine Research Project",
            desc: "A groundbreaking study examining traditional Islamic practices regarding infant urine through modern scientific methods. This project combines fiqh analysis with microbiology and public health research.",
            tags: ["Fiqh", "Microbiology", "Public Health"]
        },
        {
            title: "Islamic Environmental Ethics",
            desc: "Researching traditional Islamic teachings on environmental stewardship and developing practical applications for contemporary sustainability challenges.",
            tags: ["Environmental Ethics", "Sustainability"]
        }
    ];

    const methodologies = [
        {
            title: "Traditional Analysis",
            items: [
                "Textual analysis of classical sources",
                "Fiqh methodology studies",
                "Historical contextualization"
            ]
        },
        {
            title: "Modern Methods",
            items: [
                "Empirical data collection",
                "Interdisciplinary collaboration",
                "Peer-reviewed publication"
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
            {/* Hero Section */}
            <motion.section
                className="relative bg-white text-red-950 py-20 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-30"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative">
                    <motion.h1
                        className="text-4xl md:text-5xl font-bold mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Global Islamic Research
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: 1 }}
                    >
                        Bridging traditional Islamic scholarship with contemporary research methodologies
                    </motion.p>
                </div>
            </motion.section>

            {/* Overview Section */}
            <motion.section
                className="container mx-auto px-4 py-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-red-800 mb-6"
                        whileHover={{ x: 5 }}
                    >
                        Overview
                    </motion.h2>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <motion.p
                            className="text-lg text-gray-700 mb-6"
                            variants={itemVariants}
                            whileHover={{ color: "#1f2937" }}
                        >
                            Our Global Islamic Research program conducts rigorous academic studies on topics at the
                            intersection of Islamic tradition and contemporary issues. We employ both traditional
                            textual analysis and modern empirical methods to produce knowledge that is both
                            authentically Islamic and relevant to today's world.
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700"
                            variants={itemVariants}
                            whileHover={{ color: "#1f2937" }}
                        >
                            Our research teams include scholars trained in both Islamic sciences and modern academic
                            disciplines, ensuring our work meets the highest standards of both traditions.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Current Projects Section */}
            <section className="bg-red-50 py-16">
                <div className="container mx-auto px-4">
                    <motion.h2
                        className="text-3xl font-bold text-center text-red-800 mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Current Projects
                    </motion.h2>

                    <motion.div
                        className="max-w-4xl mx-auto space-y-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            >
                                <h3 className="text-2xl font-semibold text-red-800 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <motion.span
                                            key={i}
                                            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                                            whileHover={{ backgroundColor: "#fee2e2" }}
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Research Methodology Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.h2
                        className="text-3xl font-bold text-red-800 mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Research Methodology
                    </motion.h2>
                    <motion.p
                        className="text-lg text-gray-700 mb-8"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        whileHover={{ color: "#1f2937" }}
                    >
                        Our research follows a dual methodology framework that respects traditional Islamic
                        epistemological approaches while incorporating appropriate modern research techniques.
                    </motion.p>

                    <motion.div
                        className="grid md:grid-cols-2 gap-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {methodologies.map((method, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            >
                                <h3 className="text-xl font-semibold mb-3 text-red-800">
                                    {method.title}
                                </h3>
                                <ul className="text-gray-600 space-y-2 text-left">
                                    {method.items.map((item, i) => (
                                        <motion.li
                                            key={i}
                                            className="flex items-start"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-red-500 mr-2 mt-1">•</span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}