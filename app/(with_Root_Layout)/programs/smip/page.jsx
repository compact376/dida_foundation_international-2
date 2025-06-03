import Link from "next/link"

export default function SMIPPage() {
    return (
        <div className="space-y-16 pb-16">
            <section className="bg-red-950 text-white py-20 group transition-all duration-500 hover:bg-red-900">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6 transition-all duration-300 group-hover:scale-105">Scouting Movement Islamic Perspective (SMIP)</h1>
                    <p className="text-xl max-w-3xl mx-auto transition-all duration-300 group-hover:translate-y-1">
                        Developing character, leadership, and spirituality through outdoor education
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-red-800 mb-6 hover:text-red-700 transition-colors">Philosophy</h2>
                    <p className="text-lg text-gray-700 mb-6 hover:text-gray-800 transition-colors">
                        SMIP combines the best of traditional scouting principles with Islamic spiritual values.
                        We believe that outdoor education provides unique opportunities for character development
                        that complements Islamic teachings about self-discipline, community, and stewardship of creation.
                    </p>
                    <p className="text-lg text-gray-700 hover:text-gray-800 transition-colors">
                        Our program is built on three pillars: physical development, mental resilience, and spiritual growth.
                    </p>
                </div>
            </section>

            <section className="bg-red-50 py-16 group transition-all duration-500 hover:bg-red-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-800 mb-12 transition-all duration-300 group-hover:scale-105">
                        Activities & Training
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {[
                            { emoji: "🏕️", title: "Camping Expeditions", desc: "Regular camping trips teaching survival skills, teamwork, and environmental stewardship" },
                            { emoji: "🕌", title: "Spiritual Training", desc: "Daily prayers, Quran circles, and Islamic character building activities" },
                            { emoji: "👥", title: "Leadership Development", desc: "Progressive leadership training through practical challenges and mentoring" }
                        ].map((activity, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border hover:border-red-200"
                            >
                                <div className="bg-red-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-300 hover:scale-110 hover:bg-red-200">
                                    <span className="text-2xl hover:scale-125 transition-transform">{activity.emoji}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-red-800 hover:text-red-700 transition-colors">
                                    {activity.title}
                                </h3>
                                <p className="text-gray-600 hover:text-gray-800 transition-colors">
                                    {activity.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-red-800 mb-6 hover:text-red-700 transition-colors">Program Structure</h2>

                    <div className="space-y-6">
                        {[
                            { age: "Ages 8-12", title: "Junior Scouts", desc: "Focus on basic skills, teamwork, and Islamic etiquette through fun activities" },
                            { age: "Ages 13-17", title: "Senior Scouts", desc: "Advanced skills training, leadership opportunities, and community service" },
                            { age: "Ages 18-25", title: "Rover Program", desc: "Leadership development and specialized training for young adults" }
                        ].map((program, index) => (
                            <div
                                key={index}
                                className="border-l-4 border-red-600 pl-4 transition-all duration-300 hover:border-red-700 hover:pl-6 hover:bg-red-50 hover:py-2 hover:rounded-r-lg"
                            >
                                <h3 className="text-xl font-semibold text-red-800 hover:text-red-700 transition-colors">
                                    {program.title} <span className="text-sm text-gray-500">({program.age})</span>
                                </h3>
                                <p className="text-gray-600 hover:text-gray-800 transition-colors">
                                    {program.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-red-950 text-white py-16 group transition-all duration-500 hover:bg-red-900">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 transition-all duration-300 group-hover:scale-105">Join SMIP Today</h2>
                    <p className="text-xl max-w-3xl mx-auto mb-8 transition-all duration-300 group-hover:translate-y-1">
                        Registration opens twice yearly for our spring and fall semesters
                    </p>
                    <Link
                        href="/contact"
                        className="bg-white text-red-800 px-8 py-3 rounded-lg font-medium hover:bg-red-50 transition-all hover:scale-105 hover:shadow-md active:scale-95 inline-block"
                    >
                        Contact Us to Enroll
                    </Link>
                </div>
            </section>
        </div>
    );
}