import { Card } from '../../components/ui/card';
import Link from 'next/link';

export default function ProgramsPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold text-center text-red-800 mb-12">Our Programs</h1>

            <div className="grid md:grid-cols-2 gap-8">
                <Link href="/programs/global-islamic-research">
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-red-200">
                        <h2 className="text-xl font-semibold mb-3 text-red-800 hover:text-red-700">Global Islamic Research</h2>
                        <p className="text-gray-600 hover:text-gray-800">
                            Advancing Islamic knowledge through rigorous research projects including our
                            pioneering Infant Urine Research Project.
                        </p>
                    </Card>
                </Link>

                <Link href="/programs/smip">
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-red-200">
                        <h2 className="text-xl font-semibold mb-3 text-red-800 hover:text-red-700">Scouting Movement Islamic Perspective (SMIP)</h2>
                        <p className="text-gray-600 hover:text-gray-800">
                            Combining scouting principles with Islamic values for holistic youth development.
                        </p>
                    </Card>
                </Link>
            </div>
        </div>
    );
}