'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '../../components/ui/card';
import Link from "next/link";

export default function AboutPage() {
    const values = [
        {
            emoji: "📚",
            title: "Knowledge",
            description: "We pursue both revealed and acquired knowledge with rigor and integrity"
        },
        {
            emoji: "🕌",
            title: "Tradition",
            description: "We remain firmly rooted in authentic Islamic scholarship"
        },
        {
            emoji: "🌍",
            title: "Relevance",
            description: "We address contemporary challenges with Islamic solutions"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
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
        <div className=" bg-white space-y-16 pb-16">
            {/* Hero Section */}
            <motion.section
                className="bg-white text-red-950 py-20 relative overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center"
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.05 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                />
                <div className="container mx-auto px-4 text-center relative">
                    <motion.h1
                        className="text-4xl font-bold mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        About Dida Foundation
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Established with a vision to bridge traditional Islamic knowledge with contemporary research methodologies
                    </motion.p>
                    <motion.div
                        className="mt-8"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        whileHover={{ scale: 1.2 }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-red-950 animate-bounce hover:animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </motion.div>
                </div>
            </motion.section>

            {/* History Section */}
            <motion.section
                className="bg-red-60 container  mx-auto px-4 rounded-xl py-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-red-800  text-center mb-6"
                        whileHover={{ x: 5 }}
                    >
                        Our History
                    </motion.h2>
                    <div className="space-y-6">
                        <motion.p
                            className="text-lg text-gray-700"
                            whileHover={{
                                backgroundColor: "#ffffff",
                                padding: "1rem",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            <span className="font-semibold text-red-700">Founded in 2010</span> by Sheikh Amin Dida, the Dida Foundation began as a small research initiative
                            focusing on Islamic medical ethics. Over the years, we've grown into a multifaceted organization
                            with programs spanning research, education, and youth development.
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700"
                            whileHover={{
                                backgroundColor: "#ffffff",
                                padding: "1rem",
                                borderRadius: "0.5rem",
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                            }}
                        >
                            Our name <span className="font-semibold text-red-700">"Dida"</span> comes from the Arabic word for "knowledge" reflecting our core mission to
                            preserve and advance Islamic knowledge in the modern world.
                        </motion.p>
                    </div>
                    <motion.div
                        className="mt-8 flex justify-center"
                        whileInView={{ scaleX: 1.1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="w-full h-1 bg-gradient-to-r from-red-600 to-yellow-300 rounded-full" />
                    </motion.div>
                </div>
            </motion.section>

            {/* Founder Section */}
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
                        Meet Our Founder
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <Card className="max-w-4xl mx-auto group">
                            <div className="md:flex">
                                <div className="md:w-1/3 p-6 flex justify-center relative">
                                    <motion.div
                                        className="border-2 border-gray-300 rounded-full overflow-hidden w-64 h-64"
                                        whileHover={{ borderColor: "#dc2626", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                                    >
                                        <motion.img
                                            src="/dida2.webp"
                                            alt="Mohamed Abduba Dida"
                                            className="w-full h-full object-cover"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.1 }}
                                            transition={{ duration: 0.7 }}
                                        />
                                        <motion.div
                                            className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        />
                                        <motion.div
                                            className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.5, delay: 0.2 }}
                                        />
                                    </motion.div>
                                </div>

                                <div className="md:w-2/3 p-6">
                                    <motion.h3
                                        className="text-2xl font-bold text-red-800 mb-3"
                                        whileHover={{
                                            textDecoration: "underline",
                                            textDecorationStyle: "wavy"
                                        }}
                                    >
                                        Sheikh Mohamed Abduba Dida
                                        <motion.span
                                            className="inline-block ml-2 text-yellow-500"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                            transition={{ duration: 0.5 }}
                                        >
                                            ✨
                                        </motion.span>
                                    </motion.h3>

                                    <div className="space-y-4">
                                        <motion.p
                                            className="text-gray-600"
                                            whileHover={{
                                                color: "#1f2937",
                                                backgroundColor: "#fef2f2",
                                                padding: "0.5rem",
                                                borderRadius: "0.25rem"
                                            }}
                                        >
                                            A renowned Islamic scholar with degrees from Al-Azhar University and Oxford, Sheikh Amin
                                            established the foundation to address what he saw as a growing gap between traditional
                                            Islamic scholarship and contemporary research methodologies.
                                        </motion.p>

                                        <motion.blockquote
                                            className="relative pl-4 border-l-4 border-red-200 italic text-gray-700"
                                            whileHover={{
                                                borderColor: "#dc2626",
                                                backgroundColor: "#fef2f2",
                                                paddingRight: "0.75rem",
                                                paddingTop: "0.5rem",
                                                paddingBottom: "0.5rem",
                                                borderRadius: "0 0.5rem 0.5rem 0"
                                            }}
                                        >
                                            <motion.span
                                                className="absolute -left-2 text-4xl text-red-300"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.7 }}
                                            >
                                                "
                                            </motion.span>
                                            "Our tradition is rich with wisdom that can guide modern challenges, but we must be willing
                                            to engage with contemporary tools and methods to make this wisdom accessible and relevant."
                                            <motion.span
                                                className="absolute -right-2 bottom-0 text-4xl text-red-300"
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.7, delay: 0.3 }}
                                            >
                                                "
                                            </motion.span>
                                        </motion.blockquote>
                                    </div>

                                    <motion.div
                                        className="mt-4 flex space-x-2"
                                        variants={containerVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                    >
                                        {['📚', '🌍', '🕌', '💡'].map((emoji, i) => (
                                            <motion.span
                                                key={i}
                                                className="text-2xl opacity-70"
                                                variants={itemVariants}
                                                whileHover={{
                                                    opacity: 1,
                                                    scale: 1.25
                                                }}
                                            >
                                                {emoji}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </div>
                        </Card>
                    </motion.div>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4 py-12">
                <motion.h2
                    className="text-3xl font-bold text-center text-red-800 mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Our Values
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {values.map((value, index) => (
                        <motion.div
                            key={index}
                            className="text-center p-6 rounded-xl"
                            variants={itemVariants}
                            whileHover={{
                                backgroundColor: "#ffffff",
                                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                scale: 1.05,
                                borderWidth: "1px",
                                borderColor: "#fecaca"
                            }}
                        >
                            <motion.div
                                className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                                whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                            >
                                <motion.span
                                    className="text-2xl"
                                    whileHover={{ scale: 1.25 }}
                                >
                                    {value.emoji}
                                </motion.span>
                            </motion.div>
                            <h3 className="text-xl font-semibold mb-2 hover:text-red-700">
                                {value.title}
                            </h3>
                            <p className="text-gray-600">
                                {value.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated Divider */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ scaleX: 0.5, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
                </motion.div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="container mx-auto px-4 text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="max-w-2xl mx-auto p-8 rounded-xl bg-gradient-to-br from-red-50 to-white"
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                    }}
                >
                    <h3 className="text-2xl font-bold text-red-800 mb-4">
                        Interested in our work?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Join us in bridging traditional wisdom with modern research
                    </p>
                    <motion.button
                        className="px-6 py-3 bg-red-700 text-white rounded-lg"
                        whileHover={{
                            backgroundColor: "#991b1b",
                            scale: 1.05,
                            boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Link href="/contact">Get Involved</Link>
                    </motion.button>
                </motion.div>
            </motion.section>
        </div>
    );
}