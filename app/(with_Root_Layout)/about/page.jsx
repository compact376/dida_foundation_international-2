import { Card } from '../../components/ui/card';
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="space-y-16 pb-16">
            {/* Hero Section */}
            <section className="bg-red-950 text-white py-20 relative overflow-hidden group transition-all duration-500 hover:bg-red-900">
                <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 bg-cover bg-center transform transition-transform duration-1000 group-hover:scale-105"></div>
                <div className="container mx-auto px-4 text-center relative">
                    <h1 className="text-4xl font-bold mb-6 transition-all duration-500 hover:scale-105 hover:text-red-100">
                        About Dida Foundation
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto transition-all duration-500 hover:scale-105 hover:text-red-100">
                        Established with a vision to bridge traditional Islamic knowledge with contemporary research methodologies
                    </p>
                    <div className="mt-8 animate-bounce hover:animate-spin">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto text-red-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="container mx-auto px-4 transition-all duration-500 hover:bg-red-50 rounded-xl py-6 group">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-red-800 mb-6 transition-all duration-300 hover:translate-x-2 hover:text-red-700">
                        Our History
                    </h2>
                    <div className="space-y-6">
                        <p className="text-lg text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-md hover:px-4 hover:py-3 hover:rounded-lg">
                            <span className="font-semibold text-red-700">Founded in 2010</span> by Sheikh Amin Dida, the Dida Foundation began as a small research initiative
                            focusing on Islamic medical ethics. Over the years, we've grown into a multifaceted organization
                            with programs spanning research, education, and youth development.
                        </p>
                        <p className="text-lg text-gray-700 transition-all duration-300 hover:bg-white hover:shadow-md hover:px-4 hover:py-3 hover:rounded-lg">
                            Our name <span className="font-semibold text-red-700">"Dida"</span> comes from the Arabic word for "knowledge" reflecting our core mission to
                            preserve and advance Islamic knowledge in the modern world.
                        </p>
                    </div>
                    <div className="mt-8 flex justify-center">
                        <div className="w-full h-1 bg-gradient-to-r from-red-600 to-yellow-300 rounded-full transition-all duration-1000 hover:scale-x-110"></div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="bg-red-50 py-16 transition-all duration-500 hover:bg-red-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-800 mb-12 transition-all duration-300 hover:scale-105 hover:text-red-700">
                        Meet Our Founder
                    </h2>

                    <Card className="max-w-4xl mx-auto transition-all duration-500 hover:scale-[1.02] hover:shadow-xl group">
                        <div className="md:flex">
                            <div className="md:w-1/3 p-6 flex justify-center relative">
                                <div className="border-2 border-gray-300 rounded-full overflow-hidden w-64 h-64 transition-all duration-500 group-hover:border-red-600 group-hover:shadow-lg">
                                    <img
                                        src="/dida2.webp"
                                        alt="Mohamed Abduba Dida"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                                    <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 delay-200"></div>
                                </div>
                            </div>

                            <div className="md:w-2/3 p-6 transition-all duration-500 group-hover:bg-gray-50 rounded-lg">
                                <h3 className="text-2xl font-bold text-red-800 mb-3 transition-all duration-300 hover:text-red-700 hover:underline decoration-wavy">
                                    Sheikh Mohamed Abduba Dida
                                    <span className="inline-block ml-2 text-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500">✨</span>
                                </h3>

                                <div className="space-y-4">
                                    <p className="text-gray-600 transition-all duration-300 hover:text-gray-800 hover:bg-red-50 hover:px-2 hover:py-1 hover:rounded">
                                        A renowned Islamic scholar with degrees from Al-Azhar University and Oxford, Sheikh Amin
                                        established the foundation to address what he saw as a growing gap between traditional
                                        Islamic scholarship and contemporary research methodologies.
                                    </p>

                                    <blockquote className="relative pl-4 border-l-4 border-red-200 italic text-gray-700 transition-all duration-500 hover:border-red-500 hover:bg-red-50 hover:px-3 hover:py-2 hover:rounded-r-lg">
                                        <span className="absolute -left-2 text-4xl text-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700">"</span>
                                        "Our tradition is rich with wisdom that can guide modern challenges, but we must be willing
                                        to engage with contemporary tools and methods to make this wisdom accessible and relevant."
                                        <span className="absolute -right-2 bottom-0 text-4xl text-red-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">"</span>
                                    </blockquote>
                                </div>

                                <div className="mt-4 flex space-x-2">
                                    {['📚', '🌍', '🕌', '💡'].map((emoji, i) => (
                                        <span
                                            key={i}
                                            className="text-2xl opacity-70 hover:opacity-100 hover:scale-125 transition-all duration-300 cursor-default"
                                            style={{ transitionDelay: `${i * 100}ms` }}
                                        >
                                            {emoji}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Values Section */}
            <section className="container mx-auto px-4 py-12 transition-all duration-500 hover:bg-red-50 rounded-xl">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-12 transition-all duration-300 hover:scale-105 hover:text-red-700">
                    Our Values
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
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
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="text-center p-6 rounded-xl transition-all duration-500 hover:bg-white hover:shadow-lg hover:scale-105 hover:border hover:border-red-200"
                        >
                            <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-500 hover:scale-110 hover:bg-red-200">
                                <span className="text-2xl transition-all duration-300 hover:scale-125">
                                    {value.emoji}
                                </span>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 transition-all duration-300 hover:text-red-700">
                                {value.title}
                            </h3>
                            <p className="text-gray-600 transition-all duration-300 hover:text-gray-800">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Animated Divider */}
                <div className="mt-16 flex justify-center">
                    <div className="w-1/2 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full animate-pulse hover:animate-spin"></div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 text-center">
                <div className="max-w-2xl mx-auto p-8 rounded-xl bg-gradient-to-br from-red-50 to-white transition-all duration-500 hover:scale-105 hover:shadow-md">
                    <h3 className="text-2xl font-bold text-red-800 mb-4">
                        Interested in our work?
                    </h3>
                    <p className="text-gray-600 mb-6">
                        Join us in bridging traditional wisdom with modern research
                    </p>
                    <button className="px-6 py-3 bg-red-700 text-white rounded-lg transition-all duration-300 hover:bg-red-800 hover:scale-105 hover:shadow-md active:scale-95">
                        <Link href="/contact">Get Involved</Link>
                    </button>
                </div>
            </section>
        </div>
    );
}