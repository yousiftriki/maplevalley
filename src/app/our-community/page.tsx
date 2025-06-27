'use client';

import React, { useState } from 'react';
import Image from 'next/image';

export default function OurCommunity() {
  const [activeTab, setActiveTab] = useState('new-construction');

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Community
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest developments and available properties
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActiveTab('new-construction')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'new-construction'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              New Construction
            </button>
            <button
              onClick={() => setActiveTab('new-listings')}
              className={`px-8 py-3 rounded-lg font-semibold transition-colors ${
                activeTab === 'new-listings'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              New Listings
            </button>
          </div>
        </div>
      </section>

      {/* New Construction Section */}
      {activeTab === 'new-construction' && (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">New Construction Projects</h2>
            <p className="text-gray-600 max-w-3xl">
              We're building the future of affordable housing with innovative designs, sustainable materials, and community-focused developments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Maple Valley Estates Construction"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Under Construction
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Maple Valley Estates</h3>
                <p className="text-gray-600 mb-4">Brown City, MI</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Units</span>
                    <p className="font-semibold">28</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Completion</span>
                    <p className="font-semibold">Q4 2025</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Type</span>
                    <p className="font-semibold">Workforce Housing</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <p className="font-semibold text-green-600">PILOT Approved</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  A modern 28-unit workforce housing development featuring energy-efficient design, community amenities, and sustainable building practices.
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Pontiac Development"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Planning Phase
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pontiac Community Development</h3>
                <p className="text-gray-600 mb-4">Pontiac, MI</p>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Units</span>
                    <p className="font-semibold">90</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Start Date</span>
                    <p className="font-semibold">2026</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Type</span>
                    <p className="font-semibold">Multi-Family</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Status</span>
                    <p className="font-semibold text-blue-600">Rezoning Approved</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  A 90-unit affordable housing community near Pontiac General Hospital, designed to serve local families and strengthen the community.
                </p>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Construction Stats */}
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Construction Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">118</div>
                <p className="text-gray-600">Total Units Under Development</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">$45M</div>
                <p className="text-gray-600">Total Investment</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                <p className="text-gray-600">Jobs Created</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* New Listings Section */}
      {activeTab === 'new-listings' && (
        <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Available Properties</h2>
            <p className="text-gray-600 max-w-3xl">
              Browse our current listings of available properties and find your perfect home in our communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Listing 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="2 Bedroom Apartment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">2 Bedroom Apartment</h3>
                <p className="text-gray-600 mb-3">Maple Valley Estates - Brown City</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">$1,200</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Bedrooms</span>
                    <p className="font-semibold">2</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Bathrooms</span>
                    <p className="font-semibold">1</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Square Feet</span>
                    <p className="font-semibold">850</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Available</span>
                    <p className="font-semibold">Immediate</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            </div>

            {/* Listing 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="1 Bedroom Apartment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-green-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  Available
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">1 Bedroom Apartment</h3>
                <p className="text-gray-600 mb-3">Maple Valley Estates - Brown City</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">$950</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Bedrooms</span>
                    <p className="font-semibold">1</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Bathrooms</span>
                    <p className="font-semibold">1</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Square Feet</span>
                    <p className="font-semibold">650</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Available</span>
                    <p className="font-semibold">Immediate</p>
                  </div>
                </div>
                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Schedule Viewing
                </button>
              </div>
            </div>

            {/* Listing 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="3 Bedroom Apartment"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-2 py-1 rounded text-sm font-semibold">
                  Coming Soon
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">3 Bedroom Apartment</h3>
                <p className="text-gray-600 mb-3">Pontiac Community Development</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-blue-600">$1,450</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Bedrooms</span>
                    <p className="font-semibold">3</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Bathrooms</span>
                    <p className="font-semibold">2</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Square Feet</span>
                    <p className="font-semibold">1,200</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Available</span>
                    <p className="font-semibold">2026</p>
                  </div>
                </div>
                <button className="w-full bg-gray-400 text-white py-2 px-4 rounded-lg font-semibold cursor-not-allowed">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>

          {/* Application Info */}
          <div className="mt-16 bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Apply</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Check Eligibility</h4>
                <p className="text-gray-600 text-sm">Review income requirements and application criteria</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Submit Application</h4>
                <p className="text-gray-600 text-sm">Complete the online application with required documents</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Schedule Viewing</h4>
                <p className="text-gray-600 text-sm">Visit the property and meet with our team</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start Application
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Our Properties?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our team to learn more about our available properties, application process, or to schedule a viewing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
} 