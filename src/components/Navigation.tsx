'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/maple-valley.png"
            alt="Maple Valley Real Estate Logo"
            width={200}
            height={50}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-800 hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/facts-or-fiction" className="text-gray-800 hover:text-gray-600 transition-colors">
            Facts or Fiction
          </Link>
          <Link href="/our-community" className="text-gray-800 hover:text-gray-600 transition-colors">
            Our Community
          </Link>
          <Link href="/press-release" className="text-gray-800 hover:text-gray-600 transition-colors">
            Press Release
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-800 hover:text-gray-600 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-4 py-2 space-y-2 bg-white border-t">
          <Link 
            href="/" 
            className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/facts-or-fiction" 
            className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Facts or Fiction
          </Link>
          <Link 
            href="/our-community" 
            className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Community
          </Link>
          <Link 
            href="/press-release" 
            className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Press Release
          </Link>
          <Link 
            href="/contact" 
            className="block py-2 text-gray-800 hover:text-gray-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 