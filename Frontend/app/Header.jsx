'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaTimes, FaBars } from 'react-icons/fa';
import { menuItems } from './lib/constants';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <motion.header
      className="sticky top-0 bg-red-950 text-white shadow-lg z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Islamic Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/islamic-pattern.svg')] bg-repeat opacity-20"></div>
      </div>

      <nav className="container mx-auto px-4 py-3 relative">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="flex items-center space-x-3">
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Image
                  src="/logo.png"
                  alt="Dida Foundation Logo"
                  width={40}
                  height={40}
                  className="rounded-full border-2 border-white"
                />
              </motion.div>
              <span className="text-xl font-bold tracking-wide bg-gradient-to-r from-white to-red-100 bg-clip-text text-transparent">
                Dida Foundation
              </span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            {menuItems.map((item) => (
              <motion.div
                key={item.path}
                className="relative"
                onHoverStart={() => setHoveredItem(item.path)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                {item.subItems ? (
                  <>
                    <motion.button
                      className="flex items-center space-x-1 px-3 py-2 rounded-lg transition-all"
                      whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.2)" }}
                    >
                      <span className="font-medium">{item.label}</span>
                      <motion.div
                        animate={{ rotate: hoveredItem === item.path ? 180 : 0 }}
                      >
                        <FaChevronDown className="w-3 h-3" />
                      </motion.div>
                    </motion.button>

                    <AnimatePresence>
                      {hoveredItem === item.path && (
                        <motion.div
                          className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.subItems.map((subItem, index) => (
                            <motion.div
                              key={subItem.path}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              <Link
                                href={subItem.path}
                                className="block px-4 py-3 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-all font-medium"
                              >
                                {subItem.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    href={item.path}
                    className="px-3 py-2 rounded-lg font-medium transition-all hover:bg-red-900/30 relative"
                  >
                    {item.label}
                    {hoveredItem === item.path && (
                      <motion.div
                        className="absolute bottom-0 left-0 w-full h-0.5 bg-white"
                        layoutId="underline"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <motion.button
            className="md:hidden text-white p-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileHover={{ backgroundColor: "rgba(220, 38, 38, 0.3)" }}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden bg-red-900 rounded-lg mt-2 shadow-xl overflow-hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-1 p-2">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    {item.subItems ? (
                      <div className="overflow-hidden">
                        <button
                          className="w-full flex justify-between items-center px-4 py-3 text-left text-white font-medium rounded-lg hover:bg-red-800"
                          onClick={() => setHoveredItem(hoveredItem === item.path ? null : item.path)}
                        >
                          <span>{item.label}</span>
                          <motion.div
                            animate={{ rotate: hoveredItem === item.path ? 180 : 0 }}
                          >
                            <FaChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {hoveredItem === item.path && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-6 space-y-1"
                            >
                              {item.subItems.map((subItem) => (
                                <Link
                                  key={subItem.path}
                                  href={subItem.path}
                                  className="block px-4 py-2 text-red-100 hover:text-white hover:bg-red-700 rounded-lg"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setHoveredItem(null);
                                  }}
                                >
                                  {subItem.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={item.path}
                        className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-red-800"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}