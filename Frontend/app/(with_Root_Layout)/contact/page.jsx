'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock } from 'react-icons/fa';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submittedUsers, setSubmittedUsers] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Check if name/email already submitted
        const isDuplicate = submittedUsers.some(
            (entry) =>
                entry.name.toLowerCase() === formData.name.toLowerCase() &&
                entry.email.toLowerCase() === formData.email.toLowerCase()
        );

        if (isDuplicate) {
            alert('You have already submitted a message with this name and email.');
            setIsSubmitting(false);
            return;
        }

        try {

            const API_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';

            const response = await fetch(`${API_URL}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmittedUsers((prev) => [...prev, { name: formData.name, email: formData.email }]);
                setFormData({ name: '', email: '', subject: '', message: '' });
                setShowSuccess(true);
                setTimeout(() => setShowSuccess(false), 3000);
            } else {
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Please check your network.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const socialLinks = [
        { name: 'Facebook', icon: <FaFacebook />, url: '#' },
        { name: 'Twitter', icon: <FaTwitter />, url: '#' },
        { name: 'Instagram', icon: <FaInstagram />, url: '#' }
    ];

    const contactItems = [
        {
            title: "Address",
            icon: <FaMapMarkerAlt className="text-red-600" />,
            content: (
                <address className="not-italic">
                    <p>617 Cedar Ave S APT A4 Mineapolis</p>
                    <p>Minnesota 55454</p>
                </address>
            )
        },
        {
            title: "Email & Phone",
            icon: <FaEnvelope className="text-red-600" />,
            content: (
                <>
                    <a href="mailto:info@didafoundation.org" className="hover:underline hover:text-red-700">
                        mrmdidah@gmail.com
                    </a>
                    <a href="tel:+15551234567" className="block hover:underline hover:text-red-700">
                        +1 (612) 456-2612
                    </a>
                </>
            )
        },
        {
            title: "Office Hours",
            icon: <FaClock className="text-red-600" />,
            content: (
                <>
                    <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p>Saturday: 10:00 AM - 2:00 PM</p>
                    <p>Sunday: Closed</p>
                </>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
            {/* Hero Section with Islamic Pattern */}
            <motion.section
                className="relative bg-red-80 text-red-950 py-20 overflow-hidden"
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
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl max-w-3xl mx-auto"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        whileHover={{ y: 1 }}
                    >
                        Get in touch with our team for inquiries, collaborations, or support
                    </motion.p>
                </div>
            </motion.section>

            {/* Main Content */}
            <section className="container mx-auto px-4 py-16">
                <motion.div
                    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Contact Form */}
                    <motion.div
                        className="bg-white rounded-xl shadow-lg p-8"
                        whileHover={{ y: -5 }}
                    >
                        <motion.h2
                            className="text-3xl font-bold text-red-800 mb-6"
                            whileHover={{ x: 5 }}
                        >
                            Send Us a Message
                        </motion.h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {[
                                { id: 'name', label: 'Full Name', type: 'text' },
                                { id: 'email', label: 'Email', type: 'email' },
                                { id: 'subject', label: 'Subject', type: 'text' }
                            ].map((field, index) => (
                                <motion.div
                                    key={field.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                >
                                    <label htmlFor={field.id} className="block text-gray-700 font-medium mb-2">
                                        {field.label}
                                    </label>
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.id}
                                        value={formData[field.id]}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                                        required
                                    />
                                </motion.div>
                            ))}

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 text-gray-950 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-transparent transition-all"
                                    required
                                ></textarea>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <motion.button
                                    type="submit"
                                    className={`w-full py-4 bg-red-700 text-white rounded-lg font-semibold text-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-red-800'
                                        }`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : (
                                        "Send Message"
                                    )}
                                </motion.button>
                            </motion.div>
                        </form>

                        {/* Success Message */}
                        <AnimatePresence>
                            {showSuccess && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg"
                                >
                                    Thank you for your message! We'll get back to you soon.
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <motion.h2
                            className="text-3xl font-bold text-red-800 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ x: 5 }}
                        >
                            Contact Information
                        </motion.h2>

                        {contactItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                                        <div className="text-gray-600 space-y-1">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        {/* Social Media */}
                        <motion.div
                            className="bg-white p-6 rounded-xl shadow-md"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            whileHover={{ y: -5 }}
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Connect With Us</h3>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.url}
                                        className="text-gray-600 hover:text-red-700 text-2xl"
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 0.9 }}
                                        aria-label={social.name}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.7 + index * 0.1 }}
                                    >
                                        {social.icon}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}