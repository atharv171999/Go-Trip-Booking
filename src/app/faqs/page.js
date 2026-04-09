'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldCheck, Wallet, Map, PhoneCall } from 'lucide-react';

const faqData = [
  {
    category: 'Booking & Payments',
    icon: <Wallet className="text-purple-600" size={24} />,
    questions: [
      {
        q: 'How do I book a tour with VoyageVoyager?',
        a: 'You can book directly through our website by selecting your destination and clicking "Book Now". Alternatively, you can contact our travel consultants via WhatsApp or Email for a customized quotation.'
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept all major credit/debit cards, UPI, and bank transfers through our secure payment gateways (Razorpay/Tazapay). For international bookings, we also support multi-currency transfers.'
      },
      {
        q: 'Can I pay in installments?',
        a: 'Yes! Typically, we require a 25% deposit to lock in your booking. The remaining balance can be paid in scheduled installments, provided the full amount is settled 30 days before departure.'
      }
    ]
  },
  {
    category: 'Tour Logistics',
    icon: <Map className="text-purple-600" size={24} />,
    questions: [
      {
        q: 'Are flights included in the package price?',
        a: 'We offer both flight-inclusive and land-only packages. Check the "Inclusions" section of your specific quotation to see if flights are part of your deal.'
      },
      {
        q: 'Do you help with visa processing?',
        a: 'Yes, we provide complete visa assistance for most international destinations. We guide you through the documentation and appointment process, though the final issuance rests with the embassy.'
      },
      {
        q: 'What kind of accommodation should I expect?',
        a: 'We partner with premium 4-star and 5-star properties. Specific hotel details are always provided in your final itinerary before you make any payment.'
      }
    ]
  },
  {
    category: 'Cancellations & Safety',
    icon: <ShieldCheck className="text-purple-600" size={24} />,
    questions: [
      {
        q: 'What is your cancellation policy?',
        a: 'Our policies are tiered: 60+ days notice gets a nearly full refund, 30-60 days gets 50%, and less than 30 days is typically non-refundable. Please see our Refund Policy page for full details.'
      },
      {
        q: 'Do I need travel insurance?',
        a: 'Absolutely. We strongly recommend comprehensive travel insurance to cover medical emergencies, trip cancellations, or baggage loss. Some international destinations even require it for visa issuance.'
      }
    ]
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-zinc-100 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group hover:bg-zinc-50/50 transition-all px-4 rounded-xl"
      >
        <span className="text-zinc-900 font-bold text-lg leading-tight pr-8 group-hover:text-purple-600 transition-colors">
          {question}
        </span>
        <ChevronDown 
          size={20} 
          className={`text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-purple-600' : ''}`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]' : 'max-h-0 opacity-0'}`}>
        <p className="text-zinc-500 leading-relaxed px-4 pt-2">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQsPage() {
  return (
    <div className="bg-white min-h-screen px-6 py-24 md:px-12 lg:px-24">
      {/* Page Header */}
      <div className="mb-16 text-center flex flex-col items-center">
        <span className="text-purple-600 font-bold text-xs uppercase tracking-widest px-3 py-1 bg-purple-50 rounded-full mb-4 inline-block">
          Help Center
        </span>
        <h1 className="text-4xl md:text-5xl font-black text-zinc-900 mb-4 tracking-tight">
          Frequently Asked Questions
        </h1>
        <div className="w-24 h-2 bg-purple-600 rounded-full mb-8" />
        <p className="text-zinc-500 text-lg max-w-2xl leading-relaxed">
          Everything you need to know about booking your dream trip with VoyageVoyager. 
          Can't find what you're looking for? Reach out to our 24/7 support.
        </p>
      </div>

      {/* Main FAQ Content */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Sidebar Nav (Desktop) */}
        <div className="lg:col-span-4 space-y-4 hidden lg:block">
          <div className="sticky top-32 bg-zinc-50 rounded-[2.5rem] p-8 border border-zinc-100">
            <h3 className="text-zinc-900 font-black text-xl mb-8 tracking-tight">Categories</h3>
            <div className="flex flex-col gap-4">
              {faqData.map((section, idx) => (
                <div key={idx} className="flex items-center gap-3 text-zinc-600 font-bold hover:text-purple-600 cursor-pointer transition-colors group">
                  <div className="p-2 bg-white rounded-xl shadow-sm group-hover:shadow-md border border-zinc-200">
                    {section.icon}
                  </div>
                  <span>{section.category}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 pt-8 border-t border-zinc-200">
              <p className="text-zinc-500 text-sm mb-4 italic">Still have questions?</p>
              <button className="w-full bg-zinc-900 text-white px-6 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-purple-600 transition-all">
                <PhoneCall size={18} /> Contact Support
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Accordions */}
        <div className="lg:col-span-8 space-y-12">
          {faqData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationDelay: `${sectionIdx * 100}ms` }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-purple-50 rounded-2xl border border-purple-100 flex lg:hidden">
                  {section.icon}
                </div>
                <h2 className="text-2xl font-black text-zinc-900 tracking-tight uppercase">
                  {section.category}
                </h2>
              </div>
              <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-4 md:p-8 shadow-sm">
                {section.questions.map((q, qIdx) => (
                  <FAQItem key={qIdx} question={q.q} answer={q.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Contact CTA */}
      <div className="mt-16 lg:hidden text-center">
        <div className="bg-purple-600 p-8 rounded-[3rem] text-white">
          <h3 className="text-2xl font-black mb-4">Still need help?</h3>
          <p className="opacity-80 mb-8">Our travel experts are available 24/7 to assist you.</p>
          <button className="bg-white text-purple-600 px-10 py-4 rounded-full font-bold w-full">
            Connect with us
          </button>
        </div>
      </div>

      <div className="pb-24" />
    </div>
  );
}
