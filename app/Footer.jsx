import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-red-900 text-white py-12">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-bold mb-4">Dida Foundation</h3>
                    <p className="text-green-100">
                        Advancing Islamic knowledge and values through research and youth programs.
                    </p>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link href="/about" className="hover:text-green-300">About Us</Link></li>
                        <li><Link href="/programs" className="hover:text-green-300">Our Programs</Link></li>
                        <li><Link href="/blog" className="hover:text-green-300">Blog</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Programs</h4>
                    <ul className="space-y-2">
                        <li><Link href="/programs/global-islamic-research" className="hover:text-green-300">Islamic Research</Link></li>
                        <li><Link href="/programs/smip" className="hover:text-green-300">Scouting Movement</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-semibold mb-4">Contact</h4>
                    <address className="not-italic">
                        <p>617 Cedar Ave S APT A4 Minneapolis</p>
                        <p>Minnesota 55454</p>
                        <p className="mt-2">Email: mrmdidah@gmail.com</p>
                        <p>Phone: +1 (612) 456-2612</p>
                    </address>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 pt-8 border-t border-green-700 text-center text-green-200">
                <p>© {new Date().getFullYear()} Dida Foundation International. All rights reserved.</p>
            </div>
        </footer>
    );
}