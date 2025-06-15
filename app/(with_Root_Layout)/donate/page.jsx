'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';
import { FaHandHoldingHeart, FaFlask, FaChild, FaBookOpen, FaLeaf, FaMosque } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function DonatePage() {
    const [amount, setAmount] = useState('');
    const [donationType, setDonationType] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [progress, setProgress] = useState(0);
    const [goalAmount] = useState(5000);
    const [raisedAmount, setRaisedAmount] = useState(0);
    const [activePreset, setActivePreset] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState('research');
    const [showConfetti, setShowConfetti] = useState(false);
    const [formError, setFormError] = useState('');

    useEffect(() => {
        setProgress(Math.min(Math.round((raisedAmount / goalAmount) * 100), 100));
    }, [raisedAmount, goalAmount]);

    const validateEmail = (email) => {
        // Simple email regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError('');
        setIsSubmitting(true);

        // Validation
        if (!amount || isNaN(amount) || Number(amount) < 1) {
            setFormError('Please enter a valid donation amount.');
            setIsSubmitting(false);
            return;
        }
        if (!donationType) {
            setFormError('Please select a donation type.');
            setIsSubmitting(false);
            return;
        }
        if (!name.trim()) {
            setFormError('Please enter your full name.');
            setIsSubmitting(false);
            return;
        }
        if (!validateEmail(email)) {
            setFormError('Please enter a valid email address.');
            setIsSubmitting(false);
            return;
        }

        try {
            // 1. Store donation info in your MySQL backend
            const saveResponse = await fetch('/api/save-donation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, donationType, name, email }),
            });

            const saveData = await saveResponse.json();

            if (!saveResponse.ok) {
                throw new Error(saveData?.message || 'Failed to save donation.');
            }

            // Update the raised amount optimistically before Stripe checkout
            setRaisedAmount(prev => prev + parseInt(amount || 0));
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 3000);

            // 2. Then initiate Stripe checkout
            const stripeRes = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount, donationType, name, email }),
            });

            const stripeData = await stripeRes.json();

            if (stripeData?.url) {
                window.location.href = stripeData.url; // Redirect to Stripe
            } else {
                // If Stripe fails, revert the optimistic update
                setRaisedAmount(prev => prev - parseInt(amount || 0));
                throw new Error('Something went wrong with Stripe. Please try again.');
            }

        } catch (err) {
            console.error('Donation submission error:', err);
            setFormError(err.message || 'Submission failed. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handlePresetSelect = (preset) => {
        setAmount(preset.toString());
        setActivePreset(preset);
    };

    const donationImpactItems = [
        { amount: "$50-100", desc: "Covers lab supplies for one sample analysis" },
        { amount: "$250", desc: "Funds ethical sample collection" },
        { amount: "$500", desc: "Sponsors professional lab testing" },
        { amount: "$1000+", desc: "Supports final report publication" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
            {/* Confetti effect */}
            <AnimatePresence>
                {showConfetti && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 pointer-events-none flex justify-center items-start overflow-hidden"
                    >
                        {[...Array(50)].map((_, i) => (
                            <motion.div
                                key={i}
                                initial={{
                                    y: -100,
                                    x: Math.random() * window.innerWidth - window.innerWidth / 2,
                                    rotate: Math.random() * 360
                                }}
                                animate={{
                                    y: window.innerHeight,
                                    x: Math.random() * 200 - 100,
                                    rotate: Math.random() * 360
                                }}
                                transition={{
                                    duration: 3 + Math.random() * 2,
                                    repeat: 0,
                                    ease: "linear"
                                }}
                                style={{
                                    position: 'absolute',
                                    fontSize: '20px',
                                    color: ['#dc2626', '#ea580c', '#d97706', '#b45309'][Math.floor(Math.random() * 4)],
                                }}
                            >
                                ❁
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Hero Section with Islamic Pattern */}
            <section className="relative bg-white text-red-900 py-20 text-center overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div
                        className="absolute inset-0 bg-repeat opacity-30"
                        style={{
                            backgroundImage: "url('/islamic-pattern.svg')",
                            backgroundSize: 'auto',
                            backgroundAttachment: 'fixed',
                            willChange: 'background-image'
                        }}
                        loading="lazy"
                        aria-hidden="true"
                    ></div>
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-6"
                    >
                        <div className="p-4 bg-red-900 rounded-full">
                            <FaHandHoldingHeart className="text-3xl text-white" />
                        </div>
                    </motion.div>
                    <motion.h1
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 leading-tight"
                    >
                        Support Islamic Research
                    </motion.h1>
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="text-xl text-red-950 max-w-3xl mx-auto leading-relaxed"
                    >
                        Your donation helps bridge modern science with Islamic tradition
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="container mx-auto px-4 sm:px-6 py-16">
                <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
                    {/* Left: Research Info */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Research Card with Islamic motifs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                                <FaMosque className="w-full h-full text-red-900" />
                            </div>

                            {/* Tabs */}
                            {/*
                                Accessibility improvements:
                                - Keyboard navigation (ArrowLeft/ArrowRight)
                                - Proper ARIA attributes
                            */}
                            {(() => {
                                const tabs = [
                                    { id: 'research', label: 'About the Research', icon: FaFlask },
                                    { id: 'impact', label: 'Your Impact', icon: FaLeaf },
                                    { id: 'story', label: 'Full Story', icon: FaBookOpen }
                                ];
                                const activeIdx = tabs.findIndex(tab => tab.id === activeTab);

                                return (
                                    <>
                                        <div
                                            className="flex border-b border-gray-200 mb-6"
                                            role="tablist"
                                            aria-label="Donation Info Tabs"
                                        >
                                            {tabs.map((tab, idx) => (
                                                <button
                                                    key={tab.id}
                                                    id={`tab-${tab.id}`}
                                                    role="tab"
                                                    aria-selected={activeTab === tab.id}
                                                    aria-controls={`tabpanel-${tab.id}`}
                                                    tabIndex={activeTab === tab.id ? 0 : -1}
                                                    onClick={() => setActiveTab(tab.id)}
                                                    onKeyDown={e => {
                                                        if (e.key === 'ArrowRight') {
                                                            const nextIdx = (activeIdx + 1) % tabs.length;
                                                            setActiveTab(tabs[nextIdx].id);
                                                        }
                                                        if (e.key === 'ArrowLeft') {
                                                            const prevIdx = (activeIdx - 1 + tabs.length) % tabs.length;
                                                            setActiveTab(tabs[prevIdx].id);
                                                        }
                                                    }}
                                                    className={`px-4 py-2 font-medium text-sm flex items-center mr-2 ${activeTab === tab.id
                                                            ? 'border-b-2 border-red-600 text-red-900'
                                                            : 'text-gray-500 hover:text-red-700'
                                                        }`}
                                                >
                                                    <tab.icon className="mr-2" />
                                                    {tab.label}
                                                </button>
                                            ))}
                                        </div>
                                        <AnimatePresence mode="wait">
                                            <motion.div
                                                key={activeTab}
                                                id={`tabpanel-${activeTab}`}
                                                role="tabpanel"
                                                aria-labelledby={`tab-${activeTab}`}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: 10 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {activeTab === 'research' && (
                                                    <div>
                                                        <h2 className="text-2xl font-bold text-red-900 mb-4">
                                                            About the Research
                                                        </h2>
                                                        <p className="text-gray-700 leading-relaxed mb-6">
                                                            We're launching a groundbreaking nonprofit research project to explore the properties of infant urine and its relevance to Islamic purification laws. Be part of this unique effort to blend modern science with ancient wisdom.
                                                        </p>

                                                        <div className="mb-6">
                                                            <h3 className="text-xl font-semibold text-red-900 mb-3">
                                                                Research Goals
                                                            </h3>
                                                            <ul className="space-y-3 text-gray-700">
                                                                {[
                                                                    "Explore scientific bases for Islamic purification distinctions",
                                                                    "Bridge the gap between faith and scientific understanding",
                                                                    "Provide clarity for Muslim parents and educators",
                                                                    "Contribute to interfaith and academic dialogue"
                                                                ].map((item, index) => (
                                                                    <motion.li
                                                                        key={index}
                                                                        className="flex items-start"
                                                                        whileHover={{ x: 5 }}
                                                                    >
                                                                        <span className="text-red-500 mr-2 mt-1">•</span>
                                                                        <span>{item}</span>
                                                                    </motion.li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                )}

                                                {activeTab === 'impact' && (
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-red-900 mb-3">
                                                            How Your Donation Helps
                                                        </h3>
                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            {donationImpactItems.map((item, index) => (
                                                                <motion.div
                                                                    key={index}
                                                                    className="bg-white border border-red-100 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                                                                    whileHover={{ y: -5 }}
                                                                    initial={{ opacity: 0 }}
                                                                    animate={{ opacity: 1 }}
                                                                    transition={{ delay: index * 0.1 }}
                                                                >
                                                                    <h4 className="font-medium text-red-900">{item.amount}</h4>
                                                                    <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                                                                </motion.div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {activeTab === 'story' && (
                                                    <div>
                                                        <h3 className="text-xl font-semibold text-red-900 mb-3">The Full Story</h3>
                                                        <div className="text-gray-700 space-y-4 leading-relaxed">
                                                            <p>
                                                                According to authentic hadith, the Prophet Muhammad ﷺ made a distinction in how to purify urine from breastfed boys and girls. This project, led by Mohamed Abduba Dida, Director of Dida Foundation International (501c3), seeks to explore whether there are any scientific bases—chemical, physical, or microbial—for this differentiation.
                                                            </p>
                                                            <p>
                                                                By conducting a small-scale lab analysis of infant urine, we hope to bridge the gap between faith and scientific understanding and provide clarity for Muslim parents and educators worldwide.
                                                            </p>
                                                            <motion.div
                                                                className="bg-gradient-to-r from-red-50 to-amber-50 p-4 rounded-lg border-l-4 border-red-400"
                                                                whileHover={{ scale: 1.01 }}
                                                            >
                                                                <blockquote className="italic text-red-800">
                                                                    "Whoever helps with good, will receive a share of it." — Qur'an 4:85
                                                                </blockquote>
                                                            </motion.div>
                                                        </div>
                                                    </div>
                                                )}
                                            </motion.div>
                                        </AnimatePresence>

                                        {/* Progress with Islamic styling - always visible */}
                                        <div className="bg-gradient-to-r from-red-50 to-amber-50 p-6 rounded-lg mb-6 border border-red-100 mt-8">
                                            <h3 className="text-lg font-semibold text-red-900 mb-2">Funding Progress</h3>
                                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden mb-2">
                                                <motion.div
                                                    className="bg-gradient-to-r from-red-600 to-amber-600 h-3 rounded-full"
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${progress}%` }}
                                                    transition={{ duration: 1, delay: 0.5 }}
                                                ></motion.div>
                                            </div>
                                            <div className="flex justify-between text-sm text-gray-600">
                                                <span>${raisedAmount.toLocaleString()} raised</span>
                                                <span>Goal: ${goalAmount.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </>
                                );
                            })()}
                        </motion.div>

                        {/* Testimonials Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="bg-white rounded-xl shadow-lg p-8"
                        >
                            <h3 className="text-xl font-semibold text-red-900 mb-4">What Scholars Say</h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                {[
                                    {
                                        quote: "This research could provide valuable insights into the wisdom behind Islamic purification laws.",
                                        author: "Sh. Abdullah Ali",
                                        role: "Islamic Scholar"
                                    },
                                    {
                                        quote: "Bridging science and religion is crucial in our times. This project is a step in the right direction.",
                                        author: "Dr. Aisha Malik",
                                        role: "Theology Professor"
                                    }
                                ].map((testimonial, index) => (
                                    <motion.div
                                        key={index}
                                        className="bg-gradient-to-br from-red-50 to-white p-6 rounded-lg border border-red-100"
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                                        <div className="flex items-center">
                                            <div className="bg-red-100 w-10 h-10 rounded-full flex items-center justify-center text-red-800 font-bold mr-3">
                                                {testimonial.author.charAt(0)}
                                            </div>
                                            <div>
                                                <h4 className="font-medium text-red-900">{testimonial.author}</h4>
                                                <p className="text-sm text-gray-600">{testimonial.role}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Right: Donation Form */}
                    <div className="space-y-6">
                        {/* Sticky donation form container */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className="sticky top-6 space-y-6"
                        >
                            {/* Donation Form */}
                            <div className="bg-white rounded-xl shadow-xl p-8 relative overflow-hidden border border-red-100">
                                <div className="absolute top-0 right-0 w-16 h-16 opacity-10">
                                    <FaHandHoldingHeart className="w-full h-full text-red-900" />
                                </div>
                                <h2 className="text-2xl font-bold text-red-900 mb-6">Make a Donation</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {/* Presets */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Quick Select</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {[50, 100, 250, 500].map((preset) => (
                                                <motion.button
                                                    key={preset}
                                                    type="button"
                                                    onClick={() => handlePresetSelect(preset)}
                                                    className={`px-4 py-3 rounded-lg border font-medium ${activePreset === preset
                                                        ? 'bg-gradient-to-br from-red-600 to-amber-600 text-white border-transparent shadow-md'
                                                        : 'border-gray-300  bg-white hover:border-red-400 hover:shadow-sm hover:text-red-900'
                                                        }`}
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                >
                                                    ${preset}
                                                </motion.button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Custom Amount */}
                                    <div>
                                        <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">
                                            Or Enter Custom Amount ($)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                                            <input
                                                type="number"
                                                id="amount"
                                                value={amount}
                                                onChange={(e) => {
                                                    setAmount(e.target.value);
                                                    setActivePreset(null);
                                                }}
                                                className=" text-gray-500 w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                                required
                                                min="1"
                                                placeholder="Enter amount"
                                            />
                                        </div>
                                    </div>

                                    {/* Donation Type */}
                                    <div>
                                        <label className="block text-gray-700 font-medium mb-2">Donation Type</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            {["one-time", "monthly"].map((type) => (
                                                <motion.label
                                                    key={type}
                                                    className={`flex justify-center items-center px-4 py-3 rounded-lg border cursor-pointer ${donationType === type
                                                        ? 'bg-gradient-to-br from-red-600 to-amber-600 text-white border-transparent shadow-md'
                                                        : 'border-gray-300 hover:border-red-400 hover:text-red-900'
                                                        }`}
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                >
                                                    <input
                                                        type="radio"
                                                        name="donationType"
                                                        checked={donationType === type}
                                                        onChange={() => setDonationType(type)}
                                                        className="hidden"
                                                    />
                                                    <span className="capitalize font-medium">{type.replace("-", " ")}</span>
                                                </motion.label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Name & Email */}
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                            placeholder="Your full name"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="text-gray-500 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                            required
                                            placeholder="you@example.com"
                                        />
                                    </div>

                                    {/* Error Message */}
                                    {formError && (
                                        <div className="bg-red-100 border border-red-300 text-red-700 px-4 py-2 rounded mb-4 text-sm" role="alert">
                                            {formError}
                                        </div>
                                    )}

                                    {/* Submit */}
                                    <motion.button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center ${isSubmitting
                                            ? 'bg-gray-400 cursor-not-allowed'
                                            : 'bg-gradient-to-br from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl'
                                            }`}
                                        whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                        whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                </svg>
                                                Processing...
                                            </>
                                        ) : (
                                            "Donate Now"
                                        )}
                                    </motion.button>
                                </form>
                                <p className="text-xs text-center text-gray-500 mt-4">
                                    All donations are tax-deductible under U.S. 501(c)(3) regulations.
                                </p>
                            </div>

                            {/* Other Ways to Give */}
                            <motion.div
                                className="bg-white rounded-xl shadow-md p-6 border border-red-100"
                                whileHover={{ y: -5 }}
                            >
                                <h3 className="text-xl font-semibold text-red-900 mb-3">Other Ways to Give</h3>
                                <ul className="space-y-2 text-gray-600">
                                    {[
                                        "Zakat and Sadaqah donations",
                                        "Sponsorship opportunities",
                                        "Planned giving and endowments"
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            className="flex items-start"
                                            whileHover={{ x: 5 }}
                                        >
                                            <span className="text-red-500 mr-2 mt-1">•</span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <Link
                                    href="/contact"
                                    className="inline-flex items-center mt-4 text-red-600 hover:text-red-800 font-medium group"
                                >
                                    Contact us about these options
                                    <svg className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}