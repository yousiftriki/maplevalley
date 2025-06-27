import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Maple Valley Real Estate',
  description: 'Sustainable Solutions For Modern Living',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className="pt-20">
          {children}
        </div>
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <p className="text-gray-300 mb-2">123 Main Street</p>
                <p className="text-gray-300 mb-2">Detroit, MI 48201</p>
                <p className="text-gray-300 mb-2">Phone: (555) 123-4567</p>
                <p className="text-gray-300">Email: info@maplevalley.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Hours</h3>
                <p className="text-gray-300 mb-2">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p className="text-gray-300 mb-2">Saturday: 10:00 AM - 2:00 PM</p>
                <p className="text-gray-300">Sunday: Closed</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">&copy; {new Date().getFullYear()} Maple Valley. All rights reserved.</p>
              <p className="text-gray-400 mt-2">Powered by <a href="#" className="hover:text-white transition-colors">JDPSoft</a></p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 