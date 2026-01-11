'use client';

import Link from "next/link";
import { motion } from 'framer-motion';

export function HeroSection() {
    const MotionLink = motion.create(Link);

    return (
        <section className="relative bg-white text-red-950 py-20 md:py-32 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 text-center relative">
                <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-6"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Advancing Islamic Knowledge
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl max-w-3xl mx-auto mb-8"
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    whileHover={{ y: 1 }}
                >
                    Bridging traditional wisdom with contemporary research for a better ummah
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row justify-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                >
                    <MotionLink
                        href="/programs"
                        className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium"
                        whileHover={{
                            backgroundColor: "#ffffff",
                            color: "#991b1b",
                            scale: 1.05
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Explore Programs
                    </MotionLink>

                    <MotionLink
                        href="/donate"
                        className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium"
                        whileHover={{
                            backgroundColor: "#ffffff",
                            color: "#991b1b",
                            scale: 1.05
                        }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Support Our Work
                    </MotionLink>
                </motion.div>
            </div>
        </section>
    );
}