'use client';

import { motion } from 'framer-motion';

export function MissionVision() {
    const items = [
        {
            title: "Our Mission",
            content: [
                "To conduct rigorous Islamic research that addresses contemporary issues while maintaining fidelity to traditional scholarship.",
                "We aim to develop spiritually grounded youth through our Scouting Movement program that combines outdoor education with Islamic values."
            ]
        },
        {
            title: "Our Vision",
            content: [
                "A world where Islamic knowledge is both deeply rooted in tradition and dynamically engaged with modern challenges, producing well-rounded individuals who contribute positively to society."
            ]
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
        <section className="relative bg-red-950 text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="bg-white absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-30"></div>
            </div>

            <div className="container mx-auto px-4 py-16 relative">
                <motion.div
                    className="grid md:grid-cols-2 gap-12"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/10 p-8 rounded-xl backdrop-blur-sm"
                            variants={itemVariants}
                            whileHover={{
                                backgroundColor: "rgba(255, 255, 255, 0.2)",
                                scale: 1.02
                            }}
                        >
                            <h2 className="text-3xl font-bold text-white mb-6">{item.title}</h2>
                            {item.content.map((paragraph, i) => (
                                <motion.p
                                    key={i}
                                    className="text-lg text-white/80 mb-6 last:mb-0"
                                    whileHover={{ x: 5 }}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}