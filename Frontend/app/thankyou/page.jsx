import Link from 'next/link';

export default function SuccessPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-gray-50">
            <h1 className="text-4xl font-bold text-green-600 mb-4">
                🎉 Thank You for Your Donation!
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-xl">
                Your generous support means a lot to us. Every contribution helps us continue our mission and serve the community with purpose and compassion.
            </p>
            <Link
                href="/donate"
                className="inline-block mt-4 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
            >
                Back to Donate Page
            </Link>
        </div>
    );
}
