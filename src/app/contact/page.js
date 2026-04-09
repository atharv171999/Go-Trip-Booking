'use client';

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-16 mt-10 text-center flex flex-col items-center">
        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
          Support Center
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
          Get in Touch
        </h1>
        <div className="w-24 h-2 bg-purple-600 rounded-full mb-8" />
        <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
          Have questions about a destination or need help with a booking? 
          Our travel experts are ready to help you plan your next adventure.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-black text-zinc-900 mb-6 flex items-center gap-3">
              <MessageSquare className="text-purple-600" size={28} />
              Contact Information
            </h2>
            <p className="text-zinc-500 leading-relaxed mb-8">
              We aim to respond to all inquiries within 24 hours. For urgent booking assistance, 
              please use our dedicated support phone line.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Our Office</h4>
                <p className="text-zinc-500 text-sm">123 Wanderlust Way, Adventure City, AC 54321, US</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Email Us</h4>
                <p className="text-zinc-500 text-sm">hello@touron.com</p>
                <p className="text-zinc-500 text-sm">support@touron.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="p-4 bg-zinc-50 rounded-2xl group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-zinc-900 mb-1">Call Us</h4>
                <p className="text-zinc-500 text-sm">+1 (234) 567-8900</p>
                <p className="text-zinc-500 text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Optional: Small "Why" section */}
          <div className="bg-purple-50 p-8 rounded-[2.5rem] border border-purple-100">
            <h4 className="text-purple-600 font-bold mb-2">Why reach out?</h4>
            <p className="text-zinc-600 text-sm">Personalized itineraries, bulk booking discounts, and a local expert's perspective on any destination.</p>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white border border-zinc-100 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[3rem] p-8 md:p-12">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-zinc-900 font-bold text-sm ml-2">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all placeholder:text-zinc-300"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-zinc-900 font-bold text-sm ml-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all placeholder:text-zinc-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-900 font-bold text-sm ml-2">Subject</label>
              <input 
                type="text" 
                placeholder="How can we help?"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all placeholder:text-zinc-300"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-zinc-900 font-bold text-sm ml-2">Message</label>
              <textarea 
                rows="5" 
                placeholder="Tell us about your travel plans..."
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-2 focus:ring-purple-600/20 focus:border-purple-600 transition-all placeholder:text-zinc-300 resize-none"
              ></textarea>
            </div>

            <button className="w-full bg-purple-600 text-white font-black py-5 rounded-2xl flex items-center justify-center gap-3 hover:bg-purple-700 active:scale-95 transition-all shadow-xl shadow-purple-200">
              <Send size={20} />
              Send Message
            </button>
          </form>
        </div>

      </div>

      <div className="pb-24" />
    </div>
  );
}
