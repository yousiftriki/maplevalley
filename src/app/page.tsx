'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gray-900 py-16 md:py-28 lg:py-36">
        <Image
          src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=1500&q=80"
          alt="Modern sustainable housing"
          fill
          className="object-cover object-center opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto animate-fade-in flex flex-col items-center justify-center" style={{minHeight: '350px'}}>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight drop-shadow-lg">
            Building Michigan's Future
          </h1>
          <p className="text-2xl md:text-3xl mb-10 font-light drop-shadow">
            Innovative, sustainable, and community-driven housing solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/our-community">
              <button className="bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors duration-300">
                Explore Communities
              </button>
            </Link>
            <Link href="/contact">
              <button className="bg-white/10 border-2 border-white text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-colors duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Maple Valley Real Estate is redefining affordable housing in Michigan. By collaborating with industry leaders and leveraging innovative construction methods, we create vibrant, sustainable communities that empower individuals and strengthen neighborhoods.
            </p>
            <div className="flex gap-6 mt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">$45M+</div>
                <div className="text-gray-500 text-sm">Invested</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">118</div>
                <div className="text-gray-500 text-sm">Units Developed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">200+</div>
                <div className="text-gray-500 text-sm">Jobs Created</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Community"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl object-cover w-full max-w-xs md:max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow border-t-4 border-blue-600 animate-fade-in-up">
                <div className="mb-4 flex justify-center">
                  <span className="inline-block text-blue-600 text-4xl">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {featuredProjects.map((project, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row animate-fade-in-up">
                <div className="relative w-full md:w-1/2 h-64 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex-1 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.location}</p>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                  </div>
                  <Link href="/our-community">
                    <span className="inline-block mt-2 text-blue-600 font-semibold hover:underline">Learn More &rarr;</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Impact Section */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center animate-fade-in-up">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <span className="text-2xl text-blue-600">{t.icon}</span>
                </div>
                <p className="text-gray-700 text-lg mb-4 text-center">“{t.quote}”</p>
                <div className="text-gray-900 font-semibold">{t.name}</div>
                <div className="text-gray-500 text-sm">{t.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-xl">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Stay in the Loop</h2>
          <p className="text-lg text-gray-600 mb-8">Get the latest updates on new communities, listings, and company news.</p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Connect with our team to learn more about our communities, investment opportunities, or to schedule a visit.
          </p>
          <Link href="/contact">
            <button className="bg-white text-blue-700 px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-100 transition-colors">
              Let's Talk
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Workforce Housing Development",
    icon: "🏢",
    description: "We develop high-quality, affordable housing for working families, focusing on comfort, accessibility, and energy efficiency."
  },
  {
    title: "LIHTC - Funded Projects",
    icon: "💸",
    description: "Experts in Low-Income Housing Tax Credit (LIHTC) developments, maximizing funding for impactful community projects."
  },
  {
    title: "Modular Construction Solutions",
    icon: "🏗️",
    description: "We use modular construction for efficient, cost-effective, and sustainable multi-family housing."
  },
  {
    title: "Community Revitalization",
    icon: "🌱",
    description: "Redeveloping underutilized properties into thriving communities, prioritizing long-term benefits for residents."
  }
];

const featuredProjects = [
  {
    title: "Maple Valley Estates",
    location: "Brown City, MI",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "A modern 28-unit workforce housing development with energy-efficient design and community amenities."
  },
  {
    title: "Pontiac Community Development",
    location: "Pontiac, MI",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "A 90-unit affordable housing community near Pontiac General Hospital, designed to serve local families."
  }
];

const testimonials = [
  {
    quote: "Maple Valley's commitment to quality and community is unmatched. Our new home is beautiful and energy-efficient!",
    name: "Sarah L.",
    role: "Resident",
    icon: "🏡"
  },
  {
    quote: "Partnering with Maple Valley was seamless. Their team is professional, innovative, and truly cares about impact.",
    name: "James R.",
    role: "Municipal Partner",
    icon: "🤝"
  },
  {
    quote: "The new developments have brought life and opportunity to our neighborhood. Thank you, Maple Valley!",
    name: "Linda K.",
    role: "Community Leader",
    icon: "🌟"
  }
]; 