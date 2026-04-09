'use client';

import React from 'react';
import { Send } from 'lucide-react';

const ContactForm = ({ isCompact = false }) => {
  return (
    <div className={`bg-white border border-zinc-100 ${isCompact ? 'p-6 md:p-8 rounded-[2rem]' : 'shadow-[0_32px_64px_-12px_rgba(0,0,0,0.08)] rounded-[3rem] p-8 md:p-12'}`}>
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div className={`grid grid-cols-1 ${isCompact ? 'gap-4' : 'md:grid-cols-2 gap-6'}`}>
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-sm ml-2">Full Name</label>
            <input 
              type="text" 
              placeholder="Janardhan Singh"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 font-medium font-outfit"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-sm ml-2">Email Address</label>
            <input 
              type="email" 
              placeholder="janardhan@example.com"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 font-medium font-outfit"
            />
          </div>
        </div>

        {!isCompact && (
          <div className="flex flex-col gap-2">
            <label className="text-zinc-900 font-bold text-sm ml-2">Subject</label>
            <input 
              type="text" 
              placeholder="How can we help?"
              className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 font-medium font-outfit"
            />
          </div>
        )}

        <div className="flex flex-col gap-2">
          <label className="text-zinc-900 font-bold text-sm ml-2">Message</label>
          <textarea 
            rows={isCompact ? 3 : 5} 
            placeholder="Tell us about your travel plans..."
            className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-6 py-4 text-zinc-900 focus:outline-none focus:ring-4 focus:ring-purple-600/5 focus:border-purple-600 transition-all placeholder:text-zinc-300 resize-none font-medium font-outfit"
          ></textarea>
        </div>

        <button className="w-full bg-purple-600 text-white font-black py-5 rounded-3xl flex items-center justify-center gap-3 hover:bg-purple-700 active:scale-95 transition-all shadow-xl shadow-purple-600/10 mt-4">
          <Send size={20} />
          Send Message
        </button>
        
        {isCompact && (
          <p className="text-center text-zinc-400 text-[10px] uppercase font-bold tracking-[0.2em] mt-2">
            Average Response: Under 4 Hours
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
