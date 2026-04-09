'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Globe, Layers, Menu, X, User, Home, Map, Plane } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'Destination', href: '/destinations', icon: <Globe size={18} /> },
    { name: 'About Us', href: '/about', icon: <Layers size={18} /> },
  ];

  return (
    <nav className="  fixed max-w-md md:max-w-3xl mx-auto top-6 inset-x-0 z-50 px-4  flex flex-col items-center">
      {/* Main Navbar Pill */}
      <div className="w-full bg-white/80 backdrop-blur-xl rounded-lg border border-white/40 shadow-[0_8px_32px_rgba(0,0,0,0.08)] px-6 py-2 flex items-center justify-between transition-all duration-300">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group transition-all duration-300">
          <div className="bg-purple-600 p-2 rounded-xl text-white shadow-lg shadow-purple-600/20 group-hover:bg-purple-700 transition-colors">
            <Plane size={20} className="fill-current -rotate-12" />
          </div>
          <div className="flex flex-col -gap-1">
            <span className="text-xl font-[family-name:var(--font-outfit)] font-black text-zinc-900 tracking-tighter group-hover:text-purple-600 transition-colors uppercase leading-none">
              GoTrip<span className="text-purple-600 group-hover:text-zinc-900 transition-colors">Booking</span>
            </span>
            <span className="text-[8px] font-black uppercase tracking-[0.3em] text-zinc-400 group-hover:text-purple-600/50 transition-colors leading-none">
              Discover Journeys
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1 bg-zinc-100/50 p-1 rounded-lg border border-zinc-200/50">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-white hover:shadow-sm transition-all duration-200"
            >
              <span className="text-zinc-400 group-hover:text-blue-500">{link.icon}</span>
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden md:flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-md active:scale-95 transition-all"
          >
            Contact
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-full hover:bg-purple-50 text-purple-600 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`
        w-full max-w-md mt-3 overflow-hidden transition-all duration-300 ease-in-out md:hidden
        ${isOpen ? 'max-h-67 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}
      `}>
        <div className="bg-white/95 backdrop-blur-xl border border-white/40 shadow-xl rounded-3xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl text-base font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-all border border-transparent hover:border-zinc-100"
            >
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-zinc-100 my-1 mx-4" />
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-2xl text-sm font-bold shadow-sm"
          >
            <User size={18} />
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
