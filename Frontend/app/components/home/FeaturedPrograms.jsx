'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card } from '../ui/card';

export function FeaturedPrograms() {
    const programs = [
        {
            title: "Global Islamic Research",
            desc: "Pioneering research projects including our groundbreaking Infant Urine Research that examines traditional Islamic practices through modern scientific methods.",
            href: "/programs/global-islamic-research"
        },
        {
            title: "Scouting Movement Islamic Perspective (SMIP)",
            desc: "A unique program combining outdoor education, leadership training, and spiritual development grounded in Islamic principles.",
            href: "/programs/smip"
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
        <section className="relative bg-white py-16 overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 relative">
                <motion.h2
                    className="text-3xl font-bold text-center text-red-950 mb-12"
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                >
                    Featured Programs
                </motion.h2>

                <motion.div
                    className="grid md:grid-cols-2 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                        >
                            <Link href={program.href}>
                                <Card className="h-full">
                                    <motion.div
                                        className="p-6"
                                        whileHover={{
                                            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                                            scale: 1.02
                                        }}
                                    >
                                        <h3 className="text-xl font-semibold mb-3 text-red-700">{program.title}</h3>
                                        <p className="text-gray-600 mb-4">{program.desc}</p>
                                        <motion.span
                                            className="text-red-600 font-medium inline-block"
                                            whileHover={{
                                                color: "#991b1b",
                                                x: 5
                                            }}
                                        >
                                            Learn more →
                                        </motion.span>
                                    </motion.div>
                                </Card>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}