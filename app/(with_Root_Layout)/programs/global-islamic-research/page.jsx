export default function GlobalIslamicResearch() {
    return (
        <div className="space-y-16 pb-16">
            <section className="bg-red-950 text-white py-20 group transition-all duration-500 hover:bg-red-900">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-6 transition-all duration-300 group-hover:scale-105">Global Islamic Research</h1>
                    <p className="text-xl max-w-3xl mx-auto transition-all duration-300 group-hover:translate-y-1">
                        Bridging traditional Islamic scholarship with contemporary research methodologies
                    </p>
                </div>
            </section>

            <section className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-red-800 mb-6 hover:text-red-700 transition-colors">Overview</h2>
                    <p className="text-lg text-gray-700 mb-6 hover:text-gray-800 transition-colors">
                        Our Global Islamic Research program conducts rigorous academic studies on topics at the
                        intersection of Islamic tradition and contemporary issues. We employ both traditional
                        textual analysis and modern empirical methods to produce knowledge that is both
                        authentically Islamic and relevant to today's world.
                    </p>
                    <p className="text-lg text-gray-700 hover:text-gray-800 transition-colors">
                        Our research teams include scholars trained in both Islamic sciences and modern academic
                        disciplines, ensuring our work meets the highest standards of both traditions.
                    </p>
                </div>
            </section>

            <section className="bg-red-50 py-16 group transition-all duration-500 hover:bg-red-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-red-800 mb-12 transition-all duration-300 group-hover:scale-105">Current Projects</h2>

                    <div className="max-w-4xl mx-auto space-y-8">
                        {[
                            {
                                title: "Infant Urine Research Project",
                                desc: "A groundbreaking study examining traditional Islamic practices regarding infant urine through modern scientific methods. This project combines fiqh analysis with microbiology and public health research.",
                                tags: ["Fiqh", "Microbiology", "Public Health"]
                            },
                            {
                                title: "Islamic Environmental Ethics",
                                desc: "Researching traditional Islamic teachings on environmental stewardship and developing practical applications for contemporary sustainability challenges.",
                                tags: ["Environmental Ethics", "Sustainability"]
                            }
                        ].map((project, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <h3 className="text-2xl font-semibold text-red-800 mb-3 hover:text-red-700 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 hover:text-gray-800 transition-colors">
                                    {project.desc}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm hover:bg-red-200 transition-colors"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-red-800 mb-8 hover:text-red-700 transition-colors">Research Methodology</h2>
                    <p className="text-lg text-gray-700 mb-8 hover:text-gray-800 transition-colors">
                        Our research follows a dual methodology framework that respects traditional Islamic
                        epistemological approaches while incorporating appropriate modern research techniques.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Traditional Analysis",
                                items: [
                                    "Textual analysis of classical sources",
                                    "Fiqh methodology studies",
                                    "Historical contextualization"
                                ]
                            },
                            {
                                title: "Modern Methods",
                                items: [
                                    "Empirical data collection",
                                    "Interdisciplinary collaboration",
                                    "Peer-reviewed publication"
                                ]
                            }
                        ].map((method, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                            >
                                <h3 className="text-xl font-semibold mb-3 text-red-800 hover:text-red-700 transition-colors">
                                    {method.title}
                                </h3>
                                <ul className="text-gray-600 space-y-2 text-left hover:text-gray-800 transition-colors">
                                    {method.items.map((item, i) => (
                                        <li key={i} className="hover:pl-1 transition-all">
                                            • {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}