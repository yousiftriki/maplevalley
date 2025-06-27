import React from 'react';

export default function PressRelease() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Press Release
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Our Mission Is To Provide Innovative, Sustainable Housing Solutions That
            Strengthen Communities and Empower Individuals
          </p>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {/* First Press Release */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Brown City Adopts PILOT Program to Support Affordable Housing at Maple Valley Estates
              </h2>
              <p className="text-gray-600 mb-4">FOR IMMEDIATE RELEASE</p>
              <p className="text-gray-600 mb-4">Brown City, MI - December 2024</p>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                The Brown City Council has approved a pilot Payment in Lieu of Taxes (PILOT) program for 28 units at Maple Valley Estates, reinforcing the city's commitment to expanding affordable housing opportunities.
              </p>
              <p className="text-gray-700">
                This initiative will provide critical support for the development of high-quality, attainable housing while fostering long-term community stability. By adopting the PILOT program, Brown City is taking a proactive approach to addressing housing affordability and ensuring sustainable growth for residents in need.
              </p>
            </div>
          </div>

          {/* Second Press Release */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                City of Pontiac Approves Rezoning for Affordable Housing Development by Maple Valley Real Estate
              </h2>
              <p className="text-gray-600 mb-4">FOR IMMEDIATE RELEASE</p>
              <p className="text-gray-600 mb-4">Pontiac, MI – April 1, 2025</p>
            </div>
            <div className="prose max-w-none">
              <p className="text-gray-700 mb-4">
                In a unanimous vote, the Pontiac City Council approved the conditional rezoning of a vacant 2.56-acre parcel near Pontiac General Hospital. The rezoning changes the site's designation from P-1 (Vehicular Parking) to R-4 (Multiple-Family Residential), allowing for the development of a new 90-unit affordable housing community.
              </p>
              <p className="text-gray-700 mb-4">
                The project is being led by Maple Valley Real Estate, a Michigan-based firm committed to creating high-quality, accessible housing across the state. The Pontiac development is part of the company's broader mission to invest in communities through long-term, sustainable housing solutions.
              </p>
              <p className="text-gray-700 mb-4">
                Construction is expected to begin in 2026, with an estimated project timeline of 24 months until completion. Once finished, the development will provide much-needed affordable housing options for families and individuals in the Pontiac area.
              </p>
              <blockquote className="border-l-4 border-blue-600 pl-4 my-6 italic text-gray-700">
                "We're proud to partner with the City of Pontiac on this important initiative. This development will not only activate an underutilized site but also bring lasting benefits to the community through stable, quality housing."
                <footer className="mt-2 text-gray-600">- Noah Lenk, Managing Member of Maple Valley Real Estate</footer>
              </blockquote>
              <p className="text-gray-700">
                This rezoning approval marks a significant step forward in addressing local housing needs and aligns with broader efforts to support inclusive, community-driven growth in the city.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-50 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact</h2>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Become a Partner</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Our company builds more than just communities. We build relationships. Discover how Maple Valley can be a part of the next big plan. Invest with us and discover how.
            </p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </section>
    </main>
  );
} 