'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Globe, Plane } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-zinc-200 text-zinc-600 pt-0">
      {/* Top Purple Accent Bar */}
      <div className="bg-purple-600 w-full py-4 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between text-white mb-12">
        <span className="text-sm md:text-base font-medium mb-3 md:mb-0">
          Get connected with us on our latest adventures!
        </span>
        <div className="flex items-center gap-6">
          <Link href="#" className="hover:scale-110 transition-transform opacity-80 hover:opacity-100">
             <Globe size={18} />
          </Link>
          <span className="text-xs border border-white/30 px-3 py-1 rounded-full uppercase tracking-widest hidden sm:block">
            Est. 2024
          </span>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <h6 className="uppercase font-bold text-zinc-900 border-b-2 border-purple-600 w-fit pb-1 mb-2 tracking-wider text-sm">
            GoTripBooking
          </h6>
          <Link href="/" className="group flex items-center gap-3 mb-4 transition-all duration-300">
            <div className="bg-purple-600 p-2.5 rounded-2xl text-white shadow-lg shadow-purple-600/20 group-hover:bg-purple-700 transition-colors">
              <Plane size={24} className="fill-current -rotate-12" />
            </div>
            <div className="flex flex-col -gap-1">
              <span className="text-2xl font-[family-name:var(--font-outfit)] font-black text-zinc-900 tracking-tighter group-hover:text-purple-600 transition-colors uppercase leading-none">
                GoTrip<span className="text-purple-600 group-hover:text-zinc-900 transition-colors">Booking</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400 group-hover:text-purple-600/50 transition-colors leading-none">
                Since 2024
              </span>
            </div>
          </Link>
          <p className="text-sm leading-relaxed text-zinc-500">
            At GoTripBooking, we believe travel is about discovery. We curate unique, sustainable experiences that connect you with the world&apos;s most breathtaking destinations and hidden gems.
          </p>
        </div>

        {/* Categories/Products */}
        <div className="flex flex-col gap-4">
          <h6 className="uppercase font-bold text-zinc-900 border-b-2 border-purple-600 w-fit pb-1 mb-2 tracking-wider text-sm">
            Our Offerings
          </h6>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="#" className="hover:text-purple-600 transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-purple-600 transition-colors">Destinations</Link></li>
            <li><Link href="/about" className="hover:text-purple-600 transition-colors">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-purple-600 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-4">
          <h6 className="uppercase font-bold text-zinc-900 border-b-2 border-purple-600 w-fit pb-1 mb-2 tracking-wider text-sm">
            Useful Links
          </h6>
          <ul className="flex flex-col gap-3 text-sm">
            <li><Link href="/faqs" className="hover:text-purple-600 transition-colors">FAQs</Link></li>
            <li><Link href="/terms" className="hover:text-purple-600 transition-colors">Terms & Conditions</Link></li>
            <li><Link href="/refund-policy" className="hover:text-purple-600 transition-colors">Refund Policy</Link></li>
            <li><Link href="/refund-policy" className="hover:text-purple-600 transition-colors">Cancellation Policy </Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h6 className="uppercase font-bold text-zinc-900 border-b-2 border-purple-600 w-fit pb-1 mb-2 tracking-wider text-sm">
            Contact Us
          </h6>
          <ul className="flex flex-col gap-4 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
              <span>123 Wanderlust Way, Adventure City, AC 54321, US</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-purple-600" />
              <a href="mailto:hello@gotripbooking.com" className="hover:text-purple-600 transition-colors">hello@gotripbooking.com</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-purple-600" />
              <span>+1 (234) 567-8900</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-zinc-100 py-6 px-4 text-center text-xs sm:text-sm text-zinc-500 font-medium">
        <span>© 2026 Copyright: </span>
        <Link href="/" className="font-bold text-zinc-900 hover:text-purple-600 transition-colors uppercase">
          gotripbooking.com
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
