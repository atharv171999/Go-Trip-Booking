'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Play, Plane, ArrowRight, Heart, Globe, Shield } from 'lucide-react';
import DestinationCard from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';

export default function Home() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Decorative Flight Path */}
      <div className="absolute top-24 right-0 w-1/2 h-[500px] pointer-events-none opacity-20 hidden lg:block">
        <svg viewBox="0 0 800 500" className="w-full h-full text-purple-200" fill="none" stroke="currentColor">
          <path 
            d="M50,450 C200,400 300,100 750,50" 
            strokeWidth="2" 
            strokeDasharray="8 8" 
          />
          <g transform="translate(730, 30) rotate(-45)">
            <Plane className="text-purple-600 fill-purple-600" size={32} />
          </g>
        </svg>
      </div>

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-32 lg:pt-32 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-10 animate-in fade-in slide-in-from-left-8 duration-700">

          <h1 className="text-5xl md:text-7xl font-black text-zinc-900 leading-[1.1] tracking-tight">
            Your Perfect <br />
            Journey, <span className="text-purple-600 italic">Tailored</span>.
          </h1>

          <p className="text-zinc-500 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
            Discover hand-picked destinations and bespoke itineraries designed for the modern explorer. 
            Experience the world, expertly curated by <span className="text-purple-600 font-bold">GoTripBooking</span>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6 pt-4">
            <Link 
              href="/destinations"
              className="w-full sm:w-auto bg-purple-600 text-white px-10 py-5 rounded-3xl font-black text-lg shadow-xl shadow-purple-200 hover:bg-purple-700 hover:-translate-y-1 transition-all active:scale-95 flex items-center justify-center gap-2"
            >
              Find Out More
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Right Content: Organic Image Section */}
        <div className="relative -top- animate-in fade-in zoom-in-95 duration-700 lg:ml-12">
          {/* Organic Shape Container */}
          <div className="relative w-full aspect-square md:aspect-[4/3.5] overflow-hidden rounded-[4rem] md:rounded-[6rem] shadow-2xl border-8 border-white group">
            <div className="absolute inset-0 bg-purple-600/5 group-hover:bg-transparent transition-all duration-500 z-10"></div>
            <Image 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1200"
              alt="Adventurous Travelers"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              priority
            />
          </div>

          {/* Social Proof Badge */}
          <div className="absolute -bottom-6 -left-6 md:bottom-12 md:-left-12 bg-white/90 backdrop-blur-xl border border-white/40 p-5 rounded-[2.5rem] shadow-2xl flex items-center gap-5 z-20 hover:scale-105 transition-transform duration-300">
            <div className="flex -space-x-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden relative shadow-sm">
                  <Image 
                    src={`https://i.pravatar.cc/150?u=${i + 10}`}
                    alt="Happy Customer"
                    fill
                  />
                </div>
              ))}
            </div>
            <div>
              <p className="text-zinc-900 font-black text-lg leading-tight">30K+</p>
              <p className="text-zinc-500 text-xs font-bold uppercase tracking-wider">Happy Customers</p>
            </div>
          </div>

          {/* Secondary Decoration */}
          <div className="absolute top-1/2 -right-12 w-24 h-24 bg-purple-100 rounded-full blur-[60px] opacity-60"></div>
          <div className="absolute bottom-1/4 -left-16 w-32 h-32 bg-purple-50 rounded-full blur-[80px] opacity-40"></div>
        </div>

      </main>

      {/* About Us Glimpse Section */}
      <section className="bg-zinc-50 py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Section Image */}
          <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl animate-in fade-in slide-in-from-left-8 duration-700">
            <Image 
              src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&q=80&w=1200"
              alt="Our Story"
              fill
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-10">
              <p className="text-white text-sm font-bold uppercase tracking-widest mb-2 opacity-80">Established 2024</p>
              <h3 className="text-white text-2xl font-black">Designing Journeys, <br />Not Just Trips.</h3>
            </div>
          </div>

          {/* Section Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm">
              Our Glimpse
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
              We Are More Than Just <br />
              A Travel Agency.
            </h2>
            
            <p className="text-zinc-500 text-lg leading-relaxed">
              GoTripBooking was born from a passion for authentic discovery. 
              We believe every traveler deserves a story worth telling. Our mission is to 
              bridge the gap between curious souls and the world&apos;s most breathtaking cultures.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Curated with Love</h4>
                  <p className="text-zinc-500 text-sm">Every itinerary is hand-picked by our local experts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white rounded-2xl shadow-sm text-purple-600">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900">Global Reach</h4>
                  <p className="text-zinc-500 text-sm">Access to hidden gems across 50+ countries.</p>
                </div>
              </div>
            </div>

            <Link 
              href="/about"
              className="inline-flex items-center gap-2 text-purple-600 font-black text-lg group bg-white px-8 py-4 rounded-2xl shadow-sm border border-zinc-100 hover:shadow-md transition-all active:scale-95"
            >
              Read Our Full Story
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Destination Glimpse Section */}
      <section className="bg-white py-24 md:py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-5 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm mb-6">
                Featured Tours
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight leading-tight">
                Trending Destinations <br />
                <span className="text-purple-600">Hand-Picked</span> For You.
              </h2>
            </div>
            <Link 
              href="/destinations"
              className="flex items-center gap-2 bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-zinc-800 transition-all active:scale-95 shadow-lg whitespace-nowrap"
            >
              View All Packages
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {destinations.slice(0, 12).map((dest) => (
              <DestinationCard 
                key={dest.id} 
                {...dest} 
              />
            ))}
          </div>

          <div className="mt-20 text-center lg:hidden">
            <Link 
              href="/destinations"
              className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-900 px-10 py-5 rounded-3xl font-black shadow-sm hover:bg-zinc-200 transition-all"
            >
              See More Destinations
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Background Shapes */}
      <div className="fixed top-0 left-0 -z-10 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-50 rounded-full blur-[120px] opacity-50"></div>
        <div className="absolute bottom-1/4 left-[-5%] w-[400px] h-[400px] bg-purple-50 rounded-full blur-[100px] opacity-30"></div>
      </div>
    </div>
  );
}
