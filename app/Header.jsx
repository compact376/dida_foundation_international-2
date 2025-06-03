'use client';

import Link from 'next/link';
import Image from 'next/image';
import { menuItems } from './lib/constants';
import { useState } from 'react'; // Add this import

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State for mobile menu

    return (
        <header className="sticky top-0 bg-white shadow-md z-50">
            <nav className="container mx-auto px-4 py-3">
                <div className="flex justify-between items-center">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/logo.png"
                            alt="Dida Foundation Logo"
                            width={40}
                            height={40}
                            className="rounded-full"
                        />
                        <span className="text-2xl font-bold text-red-900">
                            Dida Foundation International
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <div key={item.path} className="relative group">
                                {item.subItems ? (
                                    <>
                                        <button className="flex items-center space-x-1 text-gray-800 hover:text-green-600">
                                            <span>{item.label}</span>
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    href={subItem.path}
                                                    className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600"
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="text-gray-800 hover:text-green-600"
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-gray-800 "
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 pb-4">
                        {menuItems.map((item) => (
                            <div key={item.path} className="mb-2">
                                {item.subItems ? (
                                    <div className="space-y-2">
                                        <div className="font-medium text-gray-800 px-4 py-2">
                                            {item.label}
                                        </div>
                                        <div className="pl-6 space-y-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.path}
                                                    href={subItem.path}
                                                    className="block px-4 py-2 text-gray-600 hover:text-green-600"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {subItem.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.path}
                                        className="block px-4 py-2 text-gray-800 hover:text-green-600"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </header>
    );
}