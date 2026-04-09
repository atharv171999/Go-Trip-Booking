import React from 'react';
import Image from 'next/image';
import { Heart, Globe, Shield, Zap, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-24 mt-10 text-center flex flex-col items-center">
        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
          Our Story
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
          Crafting Unforgettable Journeys
        </h1>
        <div className="w-24 h-2 bg-purple-600 rounded-full mb-8" />
        <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
          Since 2024, GoTripBooking has been dedicated to uncovering the world&apos;s 
          most breathtaking hidden gems and sharing them with curious travelers like you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto space-y-32">
        
        {/* Mission & Vision Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1200"
              alt="Travel Adventure"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
              <span className="bg-purple-600 text-white w-2 h-10 rounded-full"></span>
              Redefining Modern Travel
            </h2>
            <p className="text-zinc-600 text-lg leading-relaxed">
              At GoTripBooking, we believe that travel is more than just a destination; it&apos;s a transformative experience. 
              We curate every itinerary with a focus on <strong>authenticity, sustainability, and personal growth.</strong>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                <Target className="text-purple-600 mb-4" size={24} />
                <h4 className="font-bold text-zinc-900 mb-2">Our Mission</h4>
                <p className="text-zinc-500 text-sm">To connect people with genuine local cultures while preserving the planet&apos;s natural beauty.</p>
              </div>
              <div className="p-6 bg-zinc-50 rounded-3xl border border-zinc-100">
                <Zap className="text-purple-600 mb-4" size={24} />
                <h4 className="font-bold text-zinc-900 mb-2">Our Vision</h4>
                <p className="text-zinc-500 text-sm">To become the world&apos;s most trusted partner for sustainable and impactful travel adventures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="bg-zinc-900 text-white p-12 md:p-24 rounded-[3.5rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="relative z-10 text-center mb-16">
            <h2 className="text-3xl font-black tracking-tight mb-4">The Values We Live By</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">These core principles guide every booking we manage and every tour we operate.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="flex flex-col items-center text-center group">
              <div className="p-6 bg-zinc-800 rounded-[2rem] mb-6 group-hover:bg-purple-600 transition-colors duration-500">
                <Shield size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-sm">Reliability</h3>
              <p className="text-zinc-400 text-sm">We provide 24/7 on-ground support and only partner with verified, high-quality suppliers.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="p-6 bg-zinc-800 rounded-[2rem] mb-6 group-hover:bg-purple-600 transition-colors duration-500">
                <Heart size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-sm">Passion</h3>
              <p className="text-zinc-400 text-sm">We are travelers first. Every package we offer is something we would (and often do) book for ourselves.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="p-6 bg-zinc-800 rounded-[2rem] mb-6 group-hover:bg-purple-600 transition-colors duration-500">
                <Globe size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 uppercase tracking-widest text-sm">Sustainability</h3>
              <p className="text-zinc-400 text-sm">We actively work to minimize our environmental footprint and support local economies.</p>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="text-center pb-24">
          <h2 className="text-4xl font-black text-zinc-900 mb-6 tracking-tight">Ready to start your story?</h2>
          <p className="text-zinc-500 mb-10 text-lg">Join thousands of adventurers who have discovered the world with tour on.</p>
          <button className="bg-purple-600 text-white px-12 py-5 rounded-full font-black text-lg hover:bg-purple-700 active:scale-95 transition-all shadow-xl shadow-purple-200">
            Explore Destinations
          </button>
        </section>
      </div>
    </div>
  );
}
