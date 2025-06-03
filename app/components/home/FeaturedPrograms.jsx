import Link from 'next/link';
import { Card } from '../ui/card';

export function FeaturedPrograms() {
    return (
        <section className="bg-red-950 py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Programs</h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <Link href="/programs/global-islamic-research">
                        <Card className="hover:shadow-lg transition-shadow h-full transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-red-700">Global Islamic Research</h3>
                                <p className="text-gray-600 mb-4">
                                    Pioneering research projects including our groundbreaking Infant Urine Research
                                    that examines traditional Islamic practices through modern scientific methods.
                                </p>
                                <span className="text-red-600 font-medium hover:text-red-800 transition-colors">Learn more →</span>
                            </div>
                        </Card>
                    </Link>

                    <Link href="/programs/smip">
                        <Card className="hover:shadow-lg transition-shadow h-full transform hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300">
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-3 text-red-700">Scouting Movement Islamic Perspective (SMIP)</h3>
                                <p className="text-gray-600 mb-4">
                                    A unique program combining outdoor education, leadership training, and spiritual
                                    development grounded in Islamic principles.
                                </p>
                                <span className="text-red-600 font-medium hover:text-red-800 transition-colors">Learn more →</span>
                            </div>
                        </Card>
                    </Link>
                </div>
            </div>
        </section>
    );
}