import Link from "next/link"

export function HeroSection() {
    return (
        <section className="relative bg-red-950 text-white py-20 md:py-32">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 transform hover:scale-105 transition-transform">Advancing Islamic Knowledge</h1>
                <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
                    Bridging traditional wisdom with contemporary research for a better ummah
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Link
                        href="/programs"
                        className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-950 transition-all duration-300 hover:scale-105"
                    >
                        Explore Programs
                    </Link>
                    <Link
                        href="/donate"
                        className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-red-950 transition-all duration-300 hover:scale-105"
                    >
                        Support Our Work
                    </Link>
                </div>
            </div>
        </section>
    );
}