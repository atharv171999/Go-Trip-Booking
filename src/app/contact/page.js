'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-16 mt-10 text-center flex flex-col items-center">
        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
          Support Center
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight leading-tight">
          Get in <span className="text-purple-600 italic font-serif">Touch</span>
        </h1>
        <div className="w-24 h-2 bg-purple-600 rounded-full mb-8" />
        <p className="text-zinc-500 text-lg md:text-xl max-w-2xl leading-relaxed font-medium">
          Have questions about a destination or need help with a booking? 
          Our travel experts are ready to help you plan your next adventure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-black text-zinc-900 mb-6 flex items-center gap-3 tracking-tight">
              <MessageSquare className="text-purple-600" size={28} />
              Contact Information
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8 font-medium">
              We aim to respond to all inquiries within 24 hours. For urgent booking assistance, 
              please use our dedicated support phone line.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-zinc-50 rounded-[1.5rem] group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Our Office</h4>
                <p className="text-zinc-500 text-sm font-medium">172 Shubham Nagar, Sch. No. 51, Sangam Nagar, Indore, MP 452006</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-zinc-50 rounded-[1.5rem] group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Email Us</h4>
                <p className="text-zinc-500 text-sm font-medium">support@gotripbooking.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-zinc-50 rounded-[1.5rem] group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Call Us</h4>
                <p className="text-zinc-500 text-sm font-medium">+91 72238 23501</p>
                <p className="text-zinc-500 text-sm font-medium opacity-60 italic">Mon - Fri: 10:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Optional: Small "Why" section */}
          <div className="bg-purple-50 p-10 rounded-[2.5rem] border border-purple-100 shadow-sm shadow-purple-200/20">
            <h4 className="text-purple-600 font-black uppercase text-xs tracking-[0.2em] mb-3">Why reach out?</h4>
            <p className="text-zinc-600 text-sm font-medium leading-relaxed">
              Experience personalized itineraries, bulk booking discounts, and a local expert's perspective 
              on any destination in our catalog.
            </p>
          </div>
        </div>

        {/* Right: Contact Form Component */}
        <ContactForm />

      </div>

      <div className="pb-24" />
    </div>
  );
}
