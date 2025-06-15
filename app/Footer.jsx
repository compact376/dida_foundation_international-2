'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    const footerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
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

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Our Programs", href: "/programs" },
        { name: "Blog", href: "/blog" },
        { name: "Donate", href: "/donate" }
    ];

    const programs = [
        { name: "Islamic Research", href: "/programs/global-islamic-research" },
        { name: "Scouting Movement", href: "/programs/smip" },
        { name: "Youth Programs", href: "/programs/youth" },
        { name: "Education", href: "/programs/education" }
    ];

    const policies = [
        { name: "Privacy Policy", href: "/policies/privacy-policy" },
        { name: "Terms & Conditions", href: "/policies/terms-and-conditions" },
        { name: "Donation Policy", href: "/policies/donation-policy" }
    ];

    return (
        <footer className="bg-red-950 text-white relative overflow-hidden">
            {/* Islamic Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-30"></div>
            </div>

            <div className="container mx-auto px-6 py-12 relative">
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-12 gap-10"
                    variants={footerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {/* Brand Column */}
                    <motion.div
                        className="md:col-span-4"
                        variants={itemVariants}
                    >
                        <motion.div
                            className="flex items-center mb-5"
                            whileHover={{ x: 5 }}
                        >
                            <div className="bg-white p-2 rounded-full mr-3">
                                <motion.div
                                    className="w-10 h-10 bg-red-800 rounded-full"
                                    whileHover={{ rotate: 15 }}
                                />
                            </div>
                            <h3 className="text-2xl font-bold tracking-tight">Dida Foundation International</h3>
                        </motion.div>
                        <motion.p
                            className="text-red-100 mb-6 leading-relaxed"
                            variants={itemVariants}
                        >
                            Advancing Islamic knowledge and values through research and youth programs worldwide.
                        </motion.p>
                        <motion.div
                            className="flex space-x-4"
                            variants={itemVariants}
                        >
                            {[
                                { icon: <FaFacebook className="w-5 h-5" />, name: "Facebook" },
                                { icon: <FaTwitter className="w-5 h-5" />, name: "Twitter" },
                                { icon: <FaInstagram className="w-5 h-5" />, name: "Instagram" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="text-white hover:text-red-200"
                                    whileHover={{ y: -3, scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    aria-label={social.name}
                                    variants={itemVariants}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        className="md:col-span-2"
                        variants={itemVariants}
                    >
                        <motion.h4
                            className="text-lg font-semibold mb-6 pb-2 border-b border-red-800"
                            whileHover={{ x: 3 }}
                        >
                            Quick Links
                        </motion.h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <Link href={link.href} className="text-red-100 hover:text-white flex items-center group">
                                        <motion.span
                                            className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <motion.span whileHover={{ x: 5 }}>
                                            {link.name}
                                        </motion.span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Programs */}
                    <motion.div
                        className="md:col-span-2"
                        variants={itemVariants}
                    >
                        <motion.h4
                            className="text-lg font-semibold mb-6 pb-2 border-b border-red-800"
                            whileHover={{ x: 3 }}
                        >
                            Programs
                        </motion.h4>
                        <ul className="space-y-3">
                            {programs.map((program, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <Link href={program.href} className="text-red-100 hover:text-white flex items-center group">
                                        <motion.span
                                            className="w-1.5 h-1.5 bg-red-500 rounded-full mr-2"
                                            whileHover={{ scale: 1.5 }}
                                        />
                                        <motion.span whileHover={{ x: 5 }}>
                                            {program.name}
                                        </motion.span>
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact */}
                    <motion.div
                        className="md:col-span-4"
                        variants={itemVariants}
                    >
                        <motion.h4
                            className="text-lg font-semibold mb-6 pb-2 border-b border-red-800"
                            whileHover={{ x: 3 }}
                        >
                            Contact Us
                        </motion.h4>
                        <address className="not-italic space-y-4">
                            <motion.div
                                className="flex items-start"
                                variants={itemVariants}
                                whileHover={{ x: 3 }}
                            >
                                <FaMapMarkerAlt className="text-red-300 mt-1 mr-3 flex-shrink-0" />
                                <div>
                                    <p>617 Cedar Ave S APT A4</p>
                                    <p>Minneapolis, Minnesota 55454</p>
                                </div>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                variants={itemVariants}
                                whileHover={{ x: 3 }}
                            >
                                <FaEnvelope className="text-red-300 mr-3" />
                                <a href="mailto:mrmdidah@gmail.com" className="hover:text-white">
                                    mrmdidah@gmail.com
                                </a>
                            </motion.div>
                            <motion.div
                                className="flex items-center"
                                variants={itemVariants}
                                whileHover={{ x: 3 }}
                            >
                                <FaPhoneAlt className="text-red-300 mr-3" />
                                <a href="tel:+16124562612" className="hover:text-white">
                                    +1 (612) 456-2612
                                </a>
                            </motion.div>
                        </address>
                    </motion.div>
                </motion.div>

                {/* Bottom Bar */}
                <motion.div
                    className="mt-12 pt-8 border-t border-red-800"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <motion.p
                            className="text-red-300 text-sm mb-4 md:mb-0"
                            whileHover={{ scale: 1.02 }}
                        >
                            © {new Date().getFullYear()} Dida Foundation International. All rights reserved.
                        </motion.p>

                        <motion.ul
                            className="flex flex-wrap justify-center gap-6 text-sm"
                            variants={footerVariants}
                        >
                            {policies.map((policy, index) => (
                                <motion.li
                                    key={index}
                                    variants={itemVariants}
                                >
                                    <Link href={policy.href} className="text-red-300 hover:text-white">
                                        {policy.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}