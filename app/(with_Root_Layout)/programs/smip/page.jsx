'use client';

import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';

// Create a motion-enhanced Link component
const MotionLink = motion(Link);

export default function SMIPPage() {
    const activities = [
        { emoji: "🏕️", title: "Camping Expeditions", desc: "Regular camping trips teaching survival skills, teamwork, and environmental stewardship" },
        { emoji: "🕌", title: "Spiritual Training", desc: "Daily prayers, Quran circles, and Islamic character building activities" },
        { emoji: "👥", title: "Leadership Development", desc: "Progressive leadership training through practical challenges and mentoring" }
    ];

    const programs = [
        { age: "Ages 8-12", title: "Junior Scouts", desc: "Focus on basic skills, teamwork, and Islamic etiquette through fun activities" },
        { age: "Ages 13-17", title: "Senior Scouts", desc: "Advanced skills training, leadership opportunities, and community service" },
        { age: "Ages 18-25", title: "Rover Program", desc: "Leadership development and specialized training for young adults" }
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
                        Scouting Movement Islamic Perspective (SMIP)
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: 1 }}
                    >
                        Developing character, leadership, and spirituality through outdoor education
                    </motion.p>
                </div>
            </motion.section>

            {/* Philosophy Section */}
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
                        Philosophy
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
                            SMIP combines the best of traditional scouting principles with Islamic spiritual values.
                            We believe that outdoor education provides unique opportunities for character development
                            that complements Islamic teachings about self-discipline, community, and stewardship of creation.
                        </motion.p>
                        <motion.p
                            className="text-lg text-gray-700"
                            variants={itemVariants}
                            whileHover={{ color: "#1f2937" }}
                        >
                            Our program is built on three pillars: physical development, mental resilience, and spiritual growth.
                        </motion.p>
                    </motion.div>
                </div>
            </motion.section>

            {/* Activities Section */}
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
                        Activities & Training
                    </motion.h2>

                    <motion.div
                        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {activities.map((activity, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md text-center"
                                variants={itemVariants}
                                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
                            >
                                <motion.div
                                    className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4"
                                    whileHover={{ scale: 1.1, backgroundColor: "#fee2e2" }}
                                >
                                    <motion.span
                                        className="text-2xl"
                                        whileHover={{ scale: 1.25 }}
                                    >
                                        {activity.emoji}
                                    </motion.span>
                                </motion.div>
                                <h3 className="text-xl font-semibold mb-3 text-red-800">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-600">
                                    {activity.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Program Structure Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        className="text-3xl font-bold text-red-800 mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        whileHover={{ x: 5 }}
                    >
                        Program Structure
                    </motion.h2>

                    <motion.div
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {programs.map((program, index) => (
                            <motion.div
                                key={index}
                                className="border-l-4 border-red-600 pl-4"
                                variants={itemVariants}
                                whileHover={{
                                    borderColor: "#dc2626",
                                    paddingLeft: "1.5rem",
                                    backgroundColor: "#fef2f2",
                                    paddingTop: "0.5rem",
                                    paddingBottom: "0.5rem",
                                    borderRadius: "0 0.5rem 0.5rem 0"
                                }}
                            >
                                <h3 className="text-xl font-semibold text-red-800">
                                    {program.title} <span className="text-sm text-gray-500">({program.age})</span>
                                </h3>
                                <p className="text-gray-600">
                                    {program.desc}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <motion.section
                className="relative bg-red-950 text-white py-16 overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-30"></div>
                </div>
                <div className="container mx-auto px-4 text-center relative">
                    <motion.h2
                        className="text-3xl font-bold mb-6"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                    >
                        Join SMIP Today
                    </motion.h2>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto mb-8"
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: 1 }}
                    >
                        Registration opens twice yearly for our spring and fall semesters
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                    >
                        <MotionLink
                            href="/contact"
                            className="bg-white text-red-800 px-8 py-3 rounded-lg font-medium inline-block"
                            whileHover={{
                                backgroundColor: "#fef2f2",
                                scale: 1.05,
                                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                            }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Us to Enroll
                        </MotionLink>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}