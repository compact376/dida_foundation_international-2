'use client';

import Link from "next/link";
import { useState, useEffect } from 'react';

export default function DonatePage() {
    const [amount, setAmount] = useState('');
    const [donationType, setDonationType] = useState('one-time');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [progress, setProgress] = useState(0);
    const [goalAmount] = useState(5000);
    const [raisedAmount, setRaisedAmount] = useState(0);
    const [activePreset, setActivePreset] = useState(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        setProgress(Math.min(Math.round((raisedAmount / goalAmount) * 100), 100));
    }, [raisedAmount, goalAmount]);

    const handleSubmit = async (e) => {
        e.preventDefault();

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
                alert('Something went wrong with Stripe. Please try again.');
            }

        } catch (err) {
            console.error('Donation submission error:', err);
            alert('Submission failed. Please try again.');
        }
    };



    const handlePresetSelect = (preset) => {
        setAmount(preset);
        setActivePreset(preset);
    };

    const presetAmounts = [50, 100, 250, 500];

    return (
        <div className="space-y-16 pb-16">
            <section
                className="bg-red-900 text-white py-12 md:py-20 transition-all duration-500 hover:bg-red-800"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6 transform transition-transform duration-300 hover:scale-105">
                        Help Us Bridge Science & Faith
                    </h1>
                    <p className={`text-lg md:text-xl max-w-3xl mx-auto transition-all duration-500 ${isHovered ? 'translate-y-1' : ''}`}>
                        A Study on Infant Purity in Islam - Your donation supports groundbreaking research
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-8">
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                            <h2 className="text-2xl font-bold text-red-700 mb-4 group-hover:text-red-800 transition-colors">
                                About the Research
                            </h2>
                            <p className="text-gray-700 mb-4 group-hover:text-gray-800 transition-colors">
                                We're launching a groundbreaking nonprofit research project to explore the properties of infant urine and its relevance to Islamic purification laws. Be part of this unique effort to blend modern science with ancient wisdom.
                            </p>

                            <div className="mb-6">
                                <h3 className="text-xl font-semibold text-red-700 mb-3 group-hover:text-red-800 transition-colors">
                                    Research Goals
                                </h3>
                                <ul className="space-y-2 text-gray-700 list-disc pl-5">
                                    {[
                                        "Explore scientific bases for Islamic purification distinctions",
                                        "Bridge the gap between faith and scientific understanding",
                                        "Provide clarity for Muslim parents and educators",
                                        "Contribute to interfaith and academic dialogue"
                                    ].map((item, index) => (
                                        <li key={index} className="hover:text-gray-800 transition-colors hover:pl-1">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-red-50 p-4 rounded-lg mb-6 hover:bg-red-100 transition-colors group/progress">
                                <h3 className="text-lg font-semibold text-red-700 mb-2 group-hover/progress:text-red-800">Funding Progress</h3>
                                <div className="w-full bg-gray-200 rounded-full h-4 mb-2 overflow-hidden">
                                    <div
                                        className="bg-red-600 h-4 rounded-full transition-all duration-1000 ease-out"
                                        style={{ width: `${progress}%` }}
                                    ></div>
                                </div>
                                <div className="flex justify-between text-sm text-gray-600">
                                    <span>${raisedAmount.toLocaleString()} raised</span>
                                    <span>Goal: ${goalAmount.toLocaleString()}</span>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-red-700 mb-3 group-hover:text-red-800 transition-colors">
                                    How Your Donation Helps
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        { amount: "$50-100", desc: "Covers lab supplies for one sample analysis" },
                                        { amount: "$250", desc: "Funds ethical sample collection" },
                                        { amount: "$500", desc: "Sponsors professional lab testing" },
                                        { amount: "$1000+", desc: "Supports final report publication" }
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-red-100 p-4 rounded-lg hover:border-red-300 hover:shadow-sm transition-all hover:-translate-y-1"
                                        >
                                            <h4 className="font-medium text-red-700 mb-1 hover:text-red-800 transition-colors">
                                                {item.amount}
                                            </h4>
                                            <p className="text-gray-600 text-sm hover:text-gray-700 transition-colors">
                                                {item.desc}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 group">
                            <h3 className="text-xl font-semibold text-red-700 mb-3 group-hover:text-red-800 transition-colors">
                                The Full Story
                            </h3>
                            <div className="text-gray-700 space-y-4">
                                <p className="hover:text-gray-800 transition-colors hover:pl-1">
                                    According to authentic hadith, the Prophet Muhammad ﷺ made a distinction in how to purify urine from breastfed boys and girls. This project, led by Mohamed Abduba Dida, Director of Dida Foundation International (501c3), seeks to explore whether there are any scientific bases—chemical, physical, or microbial—for this differentiation.
                                </p>
                                <p className="hover:text-gray-800 transition-colors hover:pl-1">
                                    By conducting a small-scale lab analysis of infant urine, we hope to bridge the gap between faith and scientific understanding and provide clarity for Muslim parents and educators worldwide.
                                </p>
                                <p className="italic text-red-700 border-l-4 border-red-300 pl-4 py-2 group-hover:text-red-800 group-hover:border-red-400 transition-colors">
                                    "Whoever helps with good, will receive a share of it." —Qur'an 4:85
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-4">
                        <div className="bg-white p-6 rounded-lg shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <h2 className="text-2xl font-bold text-red-700 mb-6 hover:text-red-800 transition-colors">
                                Make a Donation
                            </h2>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 hover:text-gray-800 transition-colors">
                                        Quick Select
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        {presetAmounts.map((preset) => (
                                            <button
                                                key={preset}
                                                type="button"
                                                onClick={() => handlePresetSelect(preset)}
                                                className={`px-4 py-2 rounded-lg border transition-all ${activePreset === preset
                                                    ? 'bg-red-600 text-white border-red-600 shadow-md'
                                                    : 'border-gray-300 hover:border-red-400 bg-white hover:bg-red-50'
                                                    } hover:scale-105`}
                                            >
                                                ${preset}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="amount" className="block text-gray-700 font-medium mb-2 hover:text-gray-800 transition-colors">
                                        Or Enter Custom Amount ($)
                                    </label>
                                    <input
                                        type="number"
                                        id="amount"
                                        value={amount}
                                        onChange={(e) => {
                                            setAmount(e.target.value);
                                            setActivePreset(null);
                                        }}
                                        className="w-full px-4 py-2 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400 transition hover:scale-[1.02]"
                                        required
                                        min="1"
                                        placeholder="Enter amount"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-700 font-medium mb-2 hover:text-gray-800 transition-colors">
                                        Donation Type
                                    </label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${donationType === 'one-time'
                                            ? 'bg-red-600 text-white border-red-500 shadow-inner'
                                            : 'border-gray-300 hover:border-red-400'
                                            } hover:scale-[1.02]`}>
                                            <input
                                                type="radio"
                                                name="donationType"
                                                checked={donationType === 'one-time'}
                                                onChange={() => setDonationType('one-time')}
                                                className="hidden"
                                            />
                                            <span>One-time</span>
                                        </label>
                                        <label className={`flex items-center justify-center p-3 rounded-lg border cursor-pointer transition-all ${donationType === 'monthly'
                                            ? 'bg-red-600 text-white border-red-500 shadow-inner'
                                            : 'border-gray-300 hover:border-red-400'
                                            } hover:scale-[1.02]`}>
                                            <input
                                                type="radio"
                                                name="donationType"
                                                checked={donationType === 'monthly'}
                                                onChange={() => setDonationType('monthly')}
                                                className="hidden"
                                            />
                                            <span>Monthly</span>
                                        </label>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2 hover:text-gray-800 transition-colors">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400 transition hover:scale-[1.02]"
                                        required
                                        placeholder="Your full name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2 hover:text-gray-800 transition-colors">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 hover:border-red-400 transition hover:scale-[1.02]"
                                        required
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-all flex items-center justify-center hover:shadow-lg hover:scale-[1.02] active:scale-95"
                                >
                                    Donate Now
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </form>

                            <div className="mt-6 text-center text-sm text-gray-500 hover:text-gray-600 transition-colors">
                                <p>All donations are tax-deductible under U.S. 501(c)(3) regulations.</p>
                            </div>
                        </div>

                        <div className="mt-6 bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <h3 className="text-xl font-semibold text-red-700 mb-3 hover:text-red-800 transition-colors">
                                Other Ways to Give
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                {[
                                    "Zakat and Sadaqah donations",
                                    "Sponsorship opportunities",
                                    "Planned giving and endowments"
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start hover:text-gray-800 transition-colors hover:pl-1">
                                        <span className="text-red-500 mr-2">•</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link
                                href="/contact"
                                className="inline-flex items-center mt-4 text-red-600 hover:text-red-800 font-medium transition group"
                            >
                                Contact us about these options
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}