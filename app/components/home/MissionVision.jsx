export function MissionVision() {
    return (
        <section className="bg-red-950 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="bg-white/10 p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
                        <p className="text-lg text-white/80 mb-6">
                            To conduct rigorous Islamic research that addresses contemporary issues while
                            maintaining fidelity to traditional scholarship.
                        </p>
                        <p className="text-lg text-white/80">
                            We aim to develop spiritually grounded youth through our Scouting Movement program
                            that combines outdoor education with Islamic values.
                        </p>
                    </div>

                    <div className="bg-white/10 p-8 rounded-xl hover:bg-white/20 transition-all duration-300">
                        <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
                        <p className="text-lg text-white/80">
                            A world where Islamic knowledge is both deeply rooted in tradition and
                            dynamically engaged with modern challenges, producing well-rounded
                            individuals who contribute positively to society.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}