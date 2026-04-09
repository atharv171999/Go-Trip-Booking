'use client';

import React from 'react';
import { User, Mail, Phone, Users, Calendar, ArrowLeft, Send } from 'lucide-react';

const BookingForm = ({ tourName, onBack }) => {
  return (
    <div className="animate-in slide-in-from-right-8 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-zinc-400 hover:text-purple-600 font-bold mb-8 transition-colors group"
      >
        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
        Back to Tour Details
      </button>

      <div className="mb-10">
        <h2 className="text-3xl font-black text-zinc-900 mb-2 tracking-tight">
          Book Your Trip
        </h2>
        <p className="text-zinc-500 text-sm italic font-medium">
          Confirming package for: <span className="text-purple-600 font-bold uppercase">{tourName}</span>
        </p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-xs uppercase tracking-widest ml-1">Full Name</label>
            <div className="relative group">
              <User className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Janardhan Singh"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 font-medium"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-xs uppercase tracking-widest ml-1">Email</label>
            <div className="relative group">
              <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors" size={18} />
              <input 
                type="email" 
                placeholder="janardhan@example.com"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 font-medium"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-xs uppercase tracking-widest ml-1">Phone Number</label>
            <div className="relative group">
              <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors" size={18} />
              <input 
                type="tel" 
                placeholder="+91 98765 43210"
                className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 font-medium"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-xs uppercase tracking-widest ml-1">Travelers</label>
            <div className="relative group">
              <Users className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors" size={18} />
              <select className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all font-medium appearance-none">
                <option>2 Person</option>
                <option>3 Person</option>
                <option>4 Person</option>
                <option>5+ Person (Group)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-zinc-900 font-bold text-xs uppercase tracking-widest ml-1">Preferred Travel Date</label>
          <div className="relative group">
            <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-300 group-focus-within:text-purple-600 transition-colors" size={18} />
            <input 
              type="date" 
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-12 pr-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all font-medium"
            />
          </div>
        </div>

        <button className="w-full bg-purple-600 text-white font-black py-5 rounded-3xl flex items-center justify-center gap-3 hover:bg-purple-700 active:scale-95 transition-all shadow-xl shadow-purple-100 mt-8">
          <Send size={20} />
          Submit Booking Request
        </button>
        
        <p className="text-center text-zinc-400 text-[10px] uppercase font-bold tracking-widest">
          No payment collected at this step • 24h Confirmation
        </p>
      </form>
    </div>
  );
};

export default BookingForm;
