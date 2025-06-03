'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Store submitted name/email combinations
    const [submittedUsers, setSubmittedUsers] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if name/email already submitted
        const isDuplicate = submittedUsers.some(
            (entry) =>
                entry.name.toLowerCase() === formData.name.toLowerCase() &&
                entry.email.toLowerCase() === formData.email.toLowerCase()
        );

        if (isDuplicate) {
            alert('You have already submitted a message with this name and email.');
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert(`Thank you for your message, ${formData.name}! We'll get back to you soon.`);
                setSubmittedUsers((prev) => [...prev, { name: formData.name, email: formData.email }]);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                alert('Something went wrong. Please try again later.');
            }
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Please check your network.');
        }
    };




    return (
        <div className="space-y-16 pb-16">
            <section className="bg-red-950 text-white py-20 group transition-all duration-500 hover:bg-red-900">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6 transition-all duration-300 group-hover:scale-105">Contact Us</h1>
                    <p className="text-xl max-w-3xl mx-auto transition-all duration-300 group-hover:translate-y-1">
                        Get in touch with our team for inquiries, collaborations, or support
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="transition-all duration-300 hover:-translate-y-1">
                        <h2 className="text-3xl font-bold text-red-800 mb-6 hover:text-red-700">Send Us a Message</h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-gray-700 font-medium mb-2 hover:text-gray-800">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-red-500 transition hover:scale-[1.02]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700 font-medium mb-2 hover:text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-red-500 transition hover:scale-[1.02]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-gray-700 font-medium mb-2 hover:text-gray-800">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-red-500 transition hover:scale-[1.02]"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700 font-medium mb-2 hover:text-gray-800">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 hover:border-red-500 transition hover:scale-[1.02]"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-red-800 transition-all hover:scale-105 hover:shadow-md active:scale-95"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="transition-all duration-300 hover:-translate-y-1">
                        <h2 className="text-3xl font-bold text-red-800 mb-6 hover:text-red-700">Contact Information</h2>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-red-700">Address</h3>
                                <address className="not-italic text-gray-600 hover:text-gray-800">
                                    <p>617 Cedar Ave S APT A4 Mineapolis</p>
                                    <p>Minnesota 55454</p>
                                </address>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-red-700">Email & Phone</h3>
                                <p className="text-gray-600 hover:text-red-600 transition">
                                    <a href="mailto:info@didafoundation.org" className="hover:underline">
                                        mrmdidah@gmail.com
                                    </a>
                                </p>
                                <p className="text-gray-600 hover:text-red-600 transition">
                                    <a href="tel:+15551234567" className="hover:underline">
                                        +1 (612) 456-2612
                                    </a>
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-red-700">Office Hours</h3>
                                <p className="text-gray-600 hover:text-gray-800">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                <p className="text-gray-600 hover:text-gray-800">Saturday: 10:00 AM - 2:00 PM</p>
                                <p className="text-gray-600 hover:text-gray-800">Sunday: Closed</p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-red-700">Connect With Us</h3>
                                <div className="flex space-x-4">
                                    {[
                                        { name: 'Facebook', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' },
                                        { name: 'Twitter', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' },
                                        { name: 'Instagram', icon: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' }
                                    ].map((social, index) => (
                                        <a
                                            key={index}
                                            href="#"
                                            className="text-gray-600 hover:text-red-700 transition-all duration-300 hover:scale-125"
                                            aria-label={social.name}
                                        >
                                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path fillRule="evenodd" d={social.icon} clipRule="evenodd" />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}